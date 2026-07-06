/** Objets possibles du formulaire de contact (menu déroulant + validation serveur). */
export const CONTACT_SUBJECTS = [
  'Question générale',
  "Suggestion d'article",
  'Signaler une erreur',
  'Partenariat / Publicité',
  'Presse / Média',
  'Autre',
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export function isValidSubject(value: string): value is ContactSubject {
  return (CONTACT_SUBJECTS as readonly string[]).includes(value);
}
