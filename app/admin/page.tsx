import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isAdmin, isAdminConfigured } from '@/src/lib/adminAuth';
import { getSupabaseAdmin, isSupabaseConfigured } from '@/src/lib/supabase/admin';
import AdminDashboard, { type ContactMessage } from '@/src/components/admin/AdminDashboard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Administration',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!isAdminConfigured()) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 text-center">
        <p className="max-w-md text-gray-600">
          L&apos;espace administrateur n&apos;est pas configuré. Définissez la variable
          d&apos;environnement <code className="rounded bg-gray-100 px-1">ADMIN_PASSWORD</code>.
        </p>
      </main>
    );
  }

  if (!isAdmin()) {
    redirect('/admin/login');
  }

  if (!isSupabaseConfigured()) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 text-center">
        <p className="max-w-md text-gray-600">
          Supabase n&apos;est pas configuré. Définissez{' '}
          <code className="rounded bg-gray-100 px-1">SUPABASE_URL</code> et{' '}
          <code className="rounded bg-gray-100 px-1">SUPABASE_SERVICE_ROLE_KEY</code>.
        </p>
      </main>
    );
  }

  const { data } = await getSupabaseAdmin()
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });

  return <AdminDashboard initial={(data as ContactMessage[]) ?? []} />;
}
