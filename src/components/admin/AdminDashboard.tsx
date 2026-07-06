'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, MailOpen, Trash2, LogOut, RefreshCw } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

export default function AdminDashboard({ initial }: { initial: ContactMessage[] }) {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>(initial);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [busy, setBusy] = useState(false);

  const unreadCount = useMemo(() => messages.filter((m) => !m.is_read).length, [messages]);
  const shown = useMemo(
    () => (filter === 'unread' ? messages.filter((m) => !m.is_read) : messages),
    [messages, filter],
  );

  async function refresh() {
    setBusy(true);
    try {
      const res = await fetch('/api/admin/messages', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages ?? []);
      }
    } finally {
      setBusy(false);
    }
  }

  async function toggleRead(m: ContactMessage) {
    const next = !m.is_read;
    setMessages((prev) => prev.map((x) => (x.id === m.id ? { ...x, is_read: next } : x)));
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: m.id, is_read: next }),
    });
  }

  async function remove(m: ContactMessage) {
    if (!confirm(`Supprimer le message de ${m.name} ?`)) return;
    setMessages((prev) => prev.filter((x) => x.id !== m.id));
    await fetch('/api/admin/messages', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: m.id }),
    });
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Messages de contact</h1>
            <p className="text-sm text-gray-500">
              {messages.length} message{messages.length > 1 ? 's' : ''} ·{' '}
              <span className="font-semibold text-red-600">{unreadCount} non lu{unreadCount > 1 ? 's' : ''}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={refresh}
              disabled={busy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
            >
              <RefreshCw className={cn('h-4 w-4', busy && 'animate-spin')} aria-hidden="true" />
              Actualiser
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-4 flex gap-2">
          {(['all', 'unread'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-semibold',
                filter === f
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-red-400',
              )}
            >
              {f === 'all' ? 'Tous' : `Non lus (${unreadCount})`}
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
            Aucun message{filter === 'unread' ? ' non lu' : ''}.
          </p>
        ) : (
          <ul className="space-y-3">
            {shown.map((m) => (
              <li
                key={m.id}
                className={cn(
                  'rounded-2xl border bg-white p-5 shadow-sm',
                  m.is_read ? 'border-gray-200' : 'border-red-200 ring-1 ring-red-100',
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      {!m.is_read && (
                        <span className="inline-block h-2 w-2 rounded-full bg-red-600" aria-hidden="true" />
                      )}
                      <span className="font-bold text-gray-900">{m.name}</span>
                      <a href={`mailto:${m.email}`} className="text-sm text-red-600 hover:underline">
                        {m.email}
                      </a>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {m.subject} · {formatDate(m.created_at)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleRead(m)}
                      title={m.is_read ? 'Marquer non lu' : 'Marquer lu'}
                      className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {m.is_read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => remove(m)}
                      title="Supprimer"
                      className="rounded-lg p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-700">{m.message}</p>
                <a
                  href={`mailto:${m.email}?subject=${encodeURIComponent('Re: ' + m.subject)}`}
                  className="mt-3 inline-block text-sm font-semibold text-red-600 hover:underline"
                >
                  Répondre par email →
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
