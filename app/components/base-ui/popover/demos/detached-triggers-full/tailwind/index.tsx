'use client';
import * as React from 'react';
import { Popover } from '@base-ui/react/popover';
import { Avatar } from '@base-ui/react/avatar';
import { ArrowSvg, BellIcon, ListIcon, UserIcon } from '../../icons-tw';

const demoPopover = Popover.createHandle<React.ComponentType>();

export default function PopoverDetachedTriggersFullDemo() {
  return (
    <div className="flex gap-2">
      <Popover.Trigger
        className={`
          box-border flex
          size-10 items-center justify-center
          rounded-md border border-fd-border
          bg-fd-background
          text-base font-bold text-fd-foreground
          select-none
          hover:bg-fd-muted focus-visible:outline-2
          focus-visible:-outline-offset-1
          focus-visible:outline-blue-600 active:bg-fd-muted data-popup-open:bg-fd-muted`}
        handle={demoPopover}
        payload={NotificationsPanel}
      >
        <BellIcon aria-label="Notifications" className="size-5" />
      </Popover.Trigger>

      <Popover.Trigger
        className={`
          box-border flex
          size-10 items-center justify-center
          rounded-md border border-fd-border
          bg-fd-background
          text-base font-bold text-fd-foreground
          select-none
          hover:bg-fd-muted focus-visible:outline-2
          focus-visible:-outline-offset-1
          focus-visible:outline-blue-600 active:bg-fd-muted data-popup-open:bg-fd-muted`}
        handle={demoPopover}
        payload={ActivityPanel}
      >
        <ListIcon aria-label="Activity" className="size-5" />
      </Popover.Trigger>

      <Popover.Trigger
        className={`
          box-border flex
          size-10 items-center justify-center
          rounded-md border border-fd-border
          bg-fd-background
          text-base font-bold text-fd-foreground
          select-none
          hover:bg-fd-muted focus-visible:outline-2
          focus-visible:-outline-offset-1
          focus-visible:outline-blue-600 active:bg-fd-muted data-popup-open:bg-fd-muted`}
        handle={demoPopover}
        payload={ProfilePanel}
      >
        <UserIcon aria-label="Profile" className="size-5" />
      </Popover.Trigger>

      <Popover.Root handle={demoPopover}>
        {({ payload: Payload }) => (
          <Popover.Portal>
            <Popover.Positioner
              sideOffset={8}
              className={`
                h-(--positioner-height) w-(--positioner-width)
                max-w-(--available-width)
                transition-[top,left,right,bottom,transform]
                duration-[0.35s]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                data-instant:transition-none`}
            >
              <Popover.Popup
                className={`
                  relative h-(--popup-height,auto) w-(--popup-width,auto)
                  max-w-[500px] origin-(--transform-origin)
                  rounded-lg bg-[canvas] text-fd-foreground
                  shadow-lg
                  shadow-fd-foreground/10
                  outline-1
                  outline-fd-border
                  transition-[width,height,opacity,scale]
                  duration-[0.35s]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  data-ending-style:scale-90
                  data-ending-style:opacity-0 data-instant:transition-none
                  data-starting-style:scale-90
                  data-starting-style:opacity-0
                   
                   
                   `}
              >
                <Popover.Arrow
                  className={`
                    flex
                    transition-[left] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)]
                    data-[side=bottom]:top-[-8px]
                    data-[side=left]:right-[-13px]
                    data-[side=left]:rotate-90
                    data-[side=right]:left-[-13px]
                    data-[side=right]:-rotate-90
                    data-[side=top]:bottom-[-8px]
                    data-[side=top]:rotate-180`}
                >
                  <ArrowSvg />
                </Popover.Arrow>

                <Popover.Viewport
                  className={`
                    relative h-full w-full overflow-clip p-[1rem_1.5rem]
                    [&_[data-current]]:w-[calc(var(--popup-width)-3rem)]
                    [&_[data-current]]:translate-x-0
                    [&_[data-current]]:opacity-100
                    [&_[data-current]]:transition-[translate,opacity]
                    [&_[data-current]]:duration-[350ms,175ms]
                    [&_[data-current]]:ease-[cubic-bezier(0.22,1,0.36,1)]
                    data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:-translate-x-1/2
                    data-[activation-direction~='left']:[&_[data-current][data-starting-style]]:opacity-0
                    data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:translate-x-1/2
                    data-[activation-direction~='right']:[&_[data-current][data-starting-style]]:opacity-0
                    [&_[data-previous]]:w-[calc(var(--popup-width)-3rem)]
                    [&_[data-previous]]:translate-x-0
                    [&_[data-previous]]:opacity-100
                    [&_[data-previous]]:transition-[translate,opacity]
                    [&_[data-previous]]:duration-[350ms,175ms]
                    [&_[data-previous]]:ease-[cubic-bezier(0.22,1,0.36,1)]
                    data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:translate-x-1/2
                    data-[activation-direction~='left']:[&_[data-previous][data-ending-style]]:opacity-0
                    data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:-translate-x-1/2
                    data-[activation-direction~='right']:[&_[data-previous][data-ending-style]]:opacity-0`}
                >
                  {Payload !== undefined && <Payload />}
                </Popover.Viewport>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        )}
      </Popover.Root>
    </div>
  );
}

function NotificationsPanel() {
  return (
    <React.Fragment>
      <Popover.Title className="m-0 text-base font-medium">Notifications</Popover.Title>
      <Popover.Description className="m-0 text-base text-fd-muted-foreground">
        You are all caught up. Good job!
      </Popover.Description>
    </React.Fragment>
  );
}

function ProfilePanel() {
  return (
    <div className="-mx-2 grid grid-cols-[auto_auto] gap-x-4">
      <Popover.Title className="col-start-2 col-end-3 row-start-1 row-end-2 m-0 text-base font-medium">
        Jason Eventon
      </Popover.Title>
      <Avatar.Root className="col-start-1 col-end-2 row-start-1 row-end-3 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-fd-muted align-middle text-base leading-none font-medium text-fd-foreground select-none">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48" className="h-full w-full object-cover"
        />
      </Avatar.Root>
      <span className="col-start-2 col-end-3 row-start-2 row-end-3 text-sm text-fd-muted-foreground">
        Pro plan
      </span>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 mt-2 flex flex-col gap-2 border-t border-fd-border pt-2 text-sm">
        <a href="#" className="text-fd-foreground no-underline hover:underline">
          Profile settings
        </a>
        <a href="#" className="text-fd-foreground no-underline hover:underline">
          Log out
        </a>
      </div>
    </div>
  );
}

function ActivityPanel() {
  return (
    <React.Fragment>
      <Popover.Title className="m-0 text-base font-medium">Activity</Popover.Title>
      <Popover.Description className="m-0 text-base text-fd-muted-foreground">
        Nothing interesting happened recently.
      </Popover.Description>
    </React.Fragment>
  );
}
