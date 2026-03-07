import { Dialog } from '@base-ui/react/dialog';

export default function ExampleDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
        View notifications
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-fd-foreground opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <Dialog.Popup className="fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-lg bg-fd-background p-6 text-fd-foreground outline-1 outline-fd-border transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[nested-dialog-open]:after:absolute data-[nested-dialog-open]:after:inset-0 data-[nested-dialog-open]:after:rounded-[inherit] data-[nested-dialog-open]:after:bg-fd-foreground/5 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
          <Dialog.Title className="-mt-1.5 mb-1 text-lg font-medium">Notifications</Dialog.Title>
          <Dialog.Description className="mb-6 text-base text-fd-muted-foreground">
            You are all caught up. Good job!
          </Dialog.Description>
          <div className="flex items-center justify-end gap-4">
            <div className="mr-auto flex">
              <Dialog.Root>
                <Dialog.Trigger className="-mx-1.5 -my-0.5 flex items-center justify-center rounded-xs px-1.5 py-0.5 text-base font-medium text-fd-primary hover:bg-fd-primary/5 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-primary/10 :bg-fd-primary/15 :bg-fd-primary/25">
                  Customize
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Popup className="fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] rounded-lg bg-fd-background p-6 text-fd-foreground outline-1 outline-fd-border transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[nested-dialog-open]:after:absolute data-[nested-dialog-open]:after:inset-0 data-[nested-dialog-open]:after:rounded-[inherit] data-[nested-dialog-open]:after:bg-fd-foreground/5 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                    <Dialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
                      Customize notification
                    </Dialog.Title>
                    <Dialog.Description className="mb-6 text-base text-fd-muted-foreground">
                      Review your settings here.
                    </Dialog.Description>
                    <div className="flex items-center justify-end gap-4">
                      <Dialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
                        Close
                      </Dialog.Close>
                    </div>
                  </Dialog.Popup>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            <Dialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
              Close
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
