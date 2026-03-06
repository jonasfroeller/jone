'use client';
import React from 'react';

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose relative flex min-h-40 items-center justify-center rounded-xl border border-fd-border bg-fd-card p-6 my-6 overflow-auto">
      {children}
    </div>
  );
}
