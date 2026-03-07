'use client';
import * as React from 'react';
import { Popover } from '@base-ui/react/popover';
import { ArrowSvg, BellIcon } from '../../icons-tw';

const demoPopover = Popover.createHandle();

export default function PopoverDetachedTriggersSimpleDemo() {
  return (
    <React.Fragment>
      <Popover.Trigger className="flex size-10 items-center justify-center rounded-md border border-fd-border bg-fd-background text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted data-[popup-open]:bg-fd-muted"
        handle={demoPopover}
      >
        <BellIcon aria-label="Notifications" />
      </Popover.Trigger>

      <Popover.Root handle={demoPopover}>
        <Popover.Portal>
          <Popover.Positioner sideOffset={8}>
            <Popover.Popup className="origin-[var(--transform-origin)] rounded-lg bg-[canvas] px-6 py-4 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
              <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                <ArrowSvg />
              </Popover.Arrow>
              <Popover.Title className="text-base font-medium">Notifications</Popover.Title>
              <Popover.Description className="text-base text-fd-muted-foreground">
                You are all caught up. Good job!
              </Popover.Description>
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </React.Fragment>
  );
}
