'use client';
import * as React from 'react';
import { Button } from '@base-ui/react/button';

export default function ExampleButton() {
  const [loading, setLoading] = React.useState(false);

  return (
    <Button className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-fd-border rounded-md bg-fd-background font-inherit text-base font-medium leading-6 text-fd-foreground select-none hover:data-[disabled]:bg-fd-background hover:bg-fd-muted active:data-[disabled]:bg-fd-background active:bg-fd-accent active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-fd-primary focus-visible:-outline-offset-1 data-[disabled]:text-fd-muted-foreground"
      disabled={loading}
      focusableWhenDisabled
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }}
    >
      {loading ? 'Submitting' : 'Submit'}
    </Button>
  );
}
