import { useRef, type ReactNode } from 'react';
import { useGsapContext } from '../hooks/useGsapContext';
import { revealEditorial } from '../animations/textReveals';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useGsapContext(root, ({ reduced }) => {
    if (!reduced && root.current) revealEditorial(root.current);
  });
  return <div ref={root} className={className} data-editorial-reveal>{children}</div>;
}
