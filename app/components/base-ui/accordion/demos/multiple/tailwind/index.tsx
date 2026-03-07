import * as React from 'react';
import { Accordion } from '@base-ui/react/accordion';

export default function ExampleAccordion() {
  return (
    <Accordion.Root
      multiple className="flex w-96 max-w-[calc(100vw-8rem)] flex-col justify-center text-fd-foreground"
    >
      <Accordion.Item className="border-b border-fd-border">
        <Accordion.Header>
          <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-fd-background py-2 pr-1 pl-3 text-left font-medium hover:bg-fd-muted focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-fd-primary">
            What is Base UI?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-panel-open:scale-110 group-data-panel-open:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-base text-fd-muted-foreground transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0">
          <div className="p-3">
            Base UI is a library of high-quality unstyled React components for design systems and
            web apps.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className="border-b border-fd-border">
        <Accordion.Header>
          <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-fd-background py-2 pr-1 pl-3 text-left font-medium hover:bg-fd-muted focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-fd-primary">
            How do I get started?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-panel-open:scale-110 group-data-panel-open:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-base text-fd-muted-foreground transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0">
          <div className="p-3">
            Head to the “Quick start” guide in the docs. If you've used unstyled libraries before,
            you'll feel at home.
          </div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item className="border-b border-fd-border">
        <Accordion.Header>
          <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-fd-background py-2 pr-1 pl-3 text-left font-medium hover:bg-fd-muted focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-fd-primary">
            Can I use it for my project?
            <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-panel-open:scale-110 group-data-panel-open:rotate-45" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-base text-fd-muted-foreground transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0">
          <div className="p-3">Of course! Base UI is free and open source.</div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion.Root>
  );
}

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
