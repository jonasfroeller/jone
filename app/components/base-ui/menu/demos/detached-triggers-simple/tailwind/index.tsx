'use client';
import * as React from 'react';
import { Menu } from '@base-ui/react/menu';

const demoMenu = Menu.createHandle();
const popupClass =
  'origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0      ';
const itemClass =
  'flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-hidden select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-fd-background data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-xs data-[highlighted]:before:bg-fd-foreground';

export default function MenuDetachedTriggersSimpleDemo() {
  return (
    <React.Fragment>
      <Menu.Trigger
        handle={demoMenu}
        aria-label="Project actions" className="flex size-10 items-center justify-center rounded-md border border-fd-border bg-fd-background text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted data-[popup-open]:bg-fd-muted"
      >
        <DotsIcon />
      </Menu.Trigger>

      <Menu.Root handle={demoMenu}>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8} className="outline-hidden">
            <Menu.Popup className={popupClass}>
              <Menu.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180 text-fd-muted">
                <ArrowSvg />
              </Menu.Arrow>
              <Menu.Item className={itemClass}>Rename</Menu.Item>
              <Menu.Item className={itemClass}>Duplicate</Menu.Item>
              <Menu.Item className={itemClass}>Move to folder</Menu.Item>
              <Menu.Separator className="mx-4 my-1.5 h-px bg-fd-accent" />
              <Menu.Item className={itemClass}>Archive</Menu.Item>
              <Menu.Item className={`${itemClass} text-fd-error`}>Delete</Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </React.Fragment>
  );
}

export function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DotsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </svg>
  );
}
