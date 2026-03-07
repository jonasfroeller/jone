'use client';
import * as React from 'react';
import { Menubar } from '@base-ui/react/menubar';
import { Menu } from '@base-ui/react/menu';

export default function ExampleMenubar() {
  return (
    <Menubar className="flex rounded-md border border-fd-border bg-fd-background p-0.5">
      <Menu.Root>
        <Menu.Trigger className="h-8 rounded-sm px-3 text-sm font-medium text-fd-muted-foreground outline-hidden select-none focus-visible:bg-fd-muted data-[disabled]:opacity-50 data-[popup-open]:bg-fd-muted">
          File
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-hidden" sideOffset={6}>
            <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none">
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                New
              </Menu.Item>
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Open
              </Menu.Item>
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Save
              </Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger className="flex w-full cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-xs data-[popup-open]:before:bg-fd-muted data-[highlighted]:data-[popup-open]:before:bg-fd-foreground">
                  Export
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none">
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        PDF
                      </Menu.Item>
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        PNG
                      </Menu.Item>
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        SVG
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator className="mx-4 my-1.5 h-px bg-fd-accent" />
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Print
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className="h-8 rounded-sm px-3 text-sm font-medium text-fd-muted-foreground outline-hidden select-none focus-visible:bg-fd-muted data-[disabled]:opacity-50 data-[popup-open]:bg-fd-muted">
          Edit
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-hidden" sideOffset={6}>
            <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none">
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Cut
              </Menu.Item>
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Copy
              </Menu.Item>
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Paste
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger className="h-8 rounded-sm px-3 text-sm font-medium text-fd-muted-foreground outline-hidden select-none focus-visible:bg-fd-muted data-[disabled]:opacity-50 data-[popup-open]:bg-fd-muted">
          View
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner className="outline-hidden" sideOffset={6}>
            <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none">
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Zoom In
              </Menu.Item>
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Zoom Out
              </Menu.Item>

              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger className="flex w-full cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground data-[popup-open]:relative data-[popup-open]:z-0 data-[popup-open]:before:absolute data-[popup-open]:before:inset-x-1 data-[popup-open]:before:inset-y-0 data-[popup-open]:before:z-[-1] data-[popup-open]:before:rounded-xs data-[popup-open]:before:bg-fd-muted data-[highlighted]:data-[popup-open]:before:bg-fd-foreground">
                  Layout
                  <ChevronRightIcon />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border data-[ending-style]:opacity-0 data-[ending-style]:transition-opacity data-[instant]:transition-none">
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        Single Page
                      </Menu.Item>
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        Two Pages
                      </Menu.Item>
                      <Menu.Item
                        onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
                      >
                        Continuous
                      </Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>

              <Menu.Separator className="mx-4 my-1.5 h-px bg-fd-accent" />
              <Menu.Item
                onClick={handleClick} className="flex cursor-default items-center justify-between gap-4 px-4 py-2 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground"
              >
                Full Screen
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root disabled>
        <Menu.Trigger className="h-8 rounded-sm px-3 text-sm font-medium text-fd-muted-foreground outline-hidden select-none focus-visible:bg-fd-muted data-[disabled]:opacity-50 data-[popup-open]:bg-fd-muted">
          Help
        </Menu.Trigger>
      </Menu.Root>
    </Menubar>
  );
}

function handleClick(event: React.MouseEvent<HTMLElement>) {
  // eslint-disable-next-line no-console
  console.log(`${event.currentTarget.textContent} clicked`);
}

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
