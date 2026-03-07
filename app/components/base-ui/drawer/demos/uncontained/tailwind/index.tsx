'use client';
import * as React from 'react';
import { DrawerPreview as Drawer } from '@base-ui/react/drawer';

const ACTIONS = ['Unfollow', 'Mute', 'Add to Favourites', 'Add to Close Friends', 'Restrict'];

export default function ExampleDrawerUncontained() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary">
        Open action sheet
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="[--backdrop-opacity:0.4] fixed inset-0 min-h-dvh bg-fd-foreground opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-[swiping]:duration-0 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute :0.7]" />
        <Drawer.Viewport className="fixed inset-0 flex items-end justify-center">
          <Drawer.Popup className="box-border pointer-events-none flex w-full max-w-[28rem] flex-col gap-3 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] outline-none focus-visible:outline-none [transform:translateY(var(--drawer-swipe-movement-y))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-[swiping]:select-none data-[starting-style]:[transform:translateY(calc(100%+1rem+2px))] data-[ending-style]:[transform:translateY(calc(100%+1rem+2px))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]">
            <Drawer.Content className="pointer-events-auto overflow-hidden rounded-2xl bg-fd-background text-fd-foreground outline outline-1 outline-fd-border">
              <Drawer.Title className="sr-only">Profile actions</Drawer.Title>
              <Drawer.Description className="sr-only">
                Choose an action for this user.
              </Drawer.Description>

              <ul className="m-0 list-none divide-y divide-fd-border p-0"
                aria-label="Profile actions"
              >
                {ACTIONS.map((action, index) => (
                  <li key={action}>
                    {index === 0 && (
                      <Drawer.Close className="sr-only">Close action sheet</Drawer.Close>
                    )}
                    <button
                      type="button" className="block w-full border-0 bg-transparent px-5 py-4 text-center text-base text-fd-foreground select-none hover:bg-fd-muted focus-visible:bg-fd-muted focus-visible:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      {action}
                    </button>
                  </li>
                ))}
              </ul>
            </Drawer.Content>
            <div className="pointer-events-auto overflow-hidden rounded-2xl bg-fd-background outline outline-1 outline-fd-border">
              <button
                type="button" className="block w-full border-0 bg-transparent px-5 py-4 text-center text-base text-red-700 select-none hover:bg-fd-muted focus-visible:bg-fd-muted focus-visible:outline-none"
                onClick={() => setOpen(false)}
              >
                Block User
              </button>
            </div>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
