'use client';
import * as React from 'react';
import { Progress } from '@base-ui/react/progress';

export default function ExampleProgress() {
  const [value, setValue] = React.useState(20);

  // Simulate changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((current) => Math.min(100, Math.round(current + Math.random() * 25)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress.Root className="grid w-48 grid-cols-2 gap-y-2" value={value}>
      <Progress.Label className="text-sm font-medium text-fd-foreground">Export data</Progress.Label>
      <Progress.Value className="col-start-2 text-right text-sm text-fd-foreground" />
      <Progress.Track className="col-span-full h-1 overflow-hidden rounded-sm bg-fd-accent shadow-[inset_0_0_0_1px] shadow-fd-foreground/10">
        <Progress.Indicator className="block bg-gray-500 transition-all duration-500" />
      </Progress.Track>
    </Progress.Root>
  );
}
