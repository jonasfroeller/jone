'use client';
import * as React from 'react';
import { Combobox } from '@base-ui/react/combobox';

export default function ExampleMultipleCombobox() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  return (
    <Combobox.Root items={langs} multiple>
      <div className="max-w-[28rem] flex flex-col gap-1">
        <label className="text-sm leading-5 font-medium text-fd-foreground" htmlFor={id}>
          Programming languages
        </label>
        <Combobox.Chips className="flex flex-wrap items-center gap-0.5 rounded-md border border-fd-border px-1.5 py-1 w-64 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-1 focus-within:outline-fd-primary min-[500px]:w-[22rem]"
          ref={containerRef}
        >
          <Combobox.Value>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((language) => (
                  <Combobox.Chip
                    key={language.id} className="flex items-center gap-1 rounded-md bg-fd-muted px-1.5 py-[0.2rem] text-sm text-fd-foreground outline-hidden cursor-default [@media(hover:hover)]:[&[data-highlighted]]:bg-fd-primary [@media(hover:hover)]:[&[data-highlighted]]:text-fd-background focus-within:bg-fd-primary focus-within:text-fd-background"
                    aria-label={language.value}
                  >
                    {language.value}
                    <Combobox.ChipRemove className="rounded-md p-1 text-inherit hover:bg-fd-accent"
                      aria-label="Remove"
                    >
                      <XIcon />
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  id={id}
                  placeholder={value.length > 0 ? '' : 'e.g. TypeScript'} className="min-w-12 flex-1 h-8 rounded-md border-0 bg-transparent pl-2 text-base text-fd-foreground outline-hidden"
                />
              </React.Fragment>
            )}
          </Combobox.Value>
        </Combobox.Chips>
      </div>

      <Combobox.Portal>
        <Combobox.Positioner className="z-50 outline-hidden" sideOffset={4} anchor={containerRef}>
          <Combobox.Popup className="w-[var(--anchor-width)] max-h-[min(var(--available-height),23rem)] max-w-[var(--available-width)] origin-[var(--transform-origin)] overflow-y-auto scroll-pt-2 scroll-pb-2 overscroll-contain rounded-md bg-[canvas] py-2 text-fd-foreground shadow-lg shadow-fd-foreground/10 outline-1 outline-fd-border transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
            <Combobox.Empty className="px-4 py-2 text-[0.925rem] leading-4 text-fd-muted-foreground empty:m-0 empty:p-0">
              No languages found.
            </Combobox.Empty>
            <Combobox.List>
              {(language: ProgrammingLanguage) => (
                <Combobox.Item
                  key={language.id} className="grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-4 text-base leading-4 outline-hidden select-none [@media(hover:hover)]:[&[data-highlighted]]:relative [@media(hover:hover)]:[&[data-highlighted]]:z-0 [@media(hover:hover)]:[&[data-highlighted]]:text-fd-background [@media(hover:hover)]:[&[data-highlighted]]:before:absolute [@media(hover:hover)]:[&[data-highlighted]]:before:inset-x-2 [@media(hover:hover)]:[&[data-highlighted]]:before:inset-y-0 [@media(hover:hover)]:[&[data-highlighted]]:before:z-[-1] [@media(hover:hover)]:[&[data-highlighted]]:before:rounded-xs [@media(hover:hover)]:[&[data-highlighted]]:before:bg-fd-foreground"
                  value={language}
                >
                  <Combobox.ItemIndicator className="col-start-1">
                    <CheckIcon className="size-3" />
                  </Combobox.ItemIndicator>
                  <div className="col-start-2">{language.value}</div>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  );
}

function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

interface ProgrammingLanguage {
  id: string;
  value: string;
}

const langs: ProgrammingLanguage[] = [
  { id: 'js', value: 'JavaScript' },
  { id: 'ts', value: 'TypeScript' },
  { id: 'py', value: 'Python' },
  { id: 'java', value: 'Java' },
  { id: 'cpp', value: 'C++' },
  { id: 'cs', value: 'C#' },
  { id: 'php', value: 'PHP' },
  { id: 'ruby', value: 'Ruby' },
  { id: 'go', value: 'Go' },
  { id: 'rust', value: 'Rust' },
  { id: 'swift', value: 'Swift' },
];
