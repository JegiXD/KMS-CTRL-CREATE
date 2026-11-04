import { clubContact } from '../data/contact';

export function buildContactMailto({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) {
  const title = subject.trim() || 'Sporočilo za KMŠ';
  const body = `Ime: ${name.trim()}\nE-pošta: ${email.trim()}\n\n${message}`;
  return `mailto:${clubContact.email}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
}
