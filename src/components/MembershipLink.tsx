import { ArrowUpRight } from 'lucide-react';
import { membershipUrl } from '../data/content';

export function MembershipLink({ label = 'ODPRI OBRAZEC ZA VČLANITEV', className = 'pill' }: { label?: string; className?: string }) {
  return <a href={membershipUrl} className={className} target="_blank" rel="noopener noreferrer" aria-label={`${label} — uradni obrazec (odpre se v novem zavihku)`}>{label}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
