import type { ReactNode } from 'react';

export function Subtitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl text-fd-muted-foreground mb-8 text-balance">
      {children}
    </p>
  );
}
