import { AlertDialog } from '@base-ui/react/alert-dialog';

export default function ExampleAlertDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-error select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
        Discard draft
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-fd-foreground opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-fd-background p-6 text-fd-foreground outline-1 outline-fd-border transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
          <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
            Discard draft?
          </AlertDialog.Title>
          <AlertDialog.Description className="mb-6 text-base text-fd-muted-foreground">
            You can't undo this action.
          </AlertDialog.Description>
          <div className="flex justify-end gap-4">
            <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
              Cancel
            </AlertDialog.Close>
            <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-error select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
              Discard
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
