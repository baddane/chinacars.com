import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'vc_admin';

/**
 * Jeton de session déterministe dérivé du mot de passe admin. Un attaquant ne
 * peut pas le forger sans connaître ADMIN_PASSWORD. Stocké dans un cookie
 * httpOnly, jamais exposé au client.
 */
export function adminToken(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) throw new Error('ADMIN_PASSWORD non configuré.');
  return createHmac('sha256', pw).update('vc-admin-session-v1').digest('hex');
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

/** Vrai si la requête courante porte un cookie de session admin valide. */
export function isAdmin(): boolean {
  try {
    const value = cookies().get(ADMIN_COOKIE)?.value;
    if (!value) return false;
    const expected = adminToken();
    const a = Buffer.from(value);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
