import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Client Supabase à privilèges élevés (service role) — STRICTEMENT côté serveur.
 * Ne jamais importer depuis un composant client. La clé service role contourne
 * la RLS ; la table contact_messages n'ayant aucune policy publique, elle n'est
 * accessible que par ce client.
 *
 * Créé paresseusement pour ne pas casser le build quand les variables
 * d'environnement ne sont pas présentes (ex. build CI).
 */
let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      'Supabase non configuré : définissez SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY.',
    );
  }
  if (!cached) {
    cached = createClient(url, key, { auth: { persistSession: false } });
  }
  return cached;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
