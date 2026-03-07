import { Dialog } from '@base-ui/react/dialog';

export default function ExampleUncontainedDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
        Open dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-fd-foreground opacity-70 backdrop-blur-[2px] transition-[opacity,backdrop-filter] duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <Dialog.Viewport className="fixed inset-0 grid place-items-center px-4 py-10 xl:py-6">
          <Dialog.Popup className="group/popup flex h-full w-full justify-center pointer-events-none transition-opacity duration-150 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0">
            <Dialog.Close className="absolute right-3 top-2 flex h-7 w-7 items-center justify-center rounded-md border-0 bg-transparent text-fd-background hover:bg-fd-background/10 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-gray-50 xl:right-3 xl:top-3 xl:h-10 xl:w-10 :outline-gray-900 pointer-events-auto"
              aria-label="Close"
            >
              <XIcon className="h-8 w-8" />
            </Dialog.Close>
            <div className="pointer-events-auto box-border h-full w-full max-w-[70rem] rounded-lg bg-fd-background p-6 text-fd-foreground outline-1 outline-fd-border transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[starting-style]/popup:scale-110" />
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function XIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
