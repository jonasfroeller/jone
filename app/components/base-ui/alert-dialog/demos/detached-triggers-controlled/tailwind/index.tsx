'use client';
import * as React from 'react';
import { AlertDialog } from '@base-ui/react/alert-dialog';

type AlertPayload = { message: string };

const demoAlertDialog = AlertDialog.createHandle<AlertPayload>();

export default function AlertDialogDetachedTriggersControlledDemo() {
  const [open, setOpen] = React.useState(false);
  const [triggerId, setTriggerId] = React.useState<string | null>(null);

  const handleOpenChange = (isOpen: boolean, eventDetails: AlertDialog.Root.ChangeEventDetails) => {
    setOpen(isOpen);
    setTriggerId(eventDetails.trigger?.id ?? null);
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-2 justify-center">
        <AlertDialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-error select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted"
          handle={demoAlertDialog}
          id="alert-trigger-1"
          payload={{ message: 'Discard draft?' }}
        >
          Discard
        </AlertDialog.Trigger>

        <AlertDialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-error select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted"
          handle={demoAlertDialog}
          id="alert-trigger-2"
          payload={{ message: 'Delete project?' }}
        >
          Delete
        </AlertDialog.Trigger>

        <AlertDialog.Trigger className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted"
          handle={demoAlertDialog}
          id="alert-trigger-3"
          payload={{ message: 'Sign out?' }}
        >
          Sign out
        </AlertDialog.Trigger>

        <button
          type="button" className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted"
          onClick={() => {
            setTriggerId('alert-trigger-2');
            setOpen(true);
          }}
        >
          Open programmatically
        </button>
      </div>

      <AlertDialog.Root<AlertPayload>
        handle={demoAlertDialog}
        open={open}
        onOpenChange={handleOpenChange}
        triggerId={triggerId}
      >
        {({ payload }) => (
          <AlertDialog.Portal>
            <AlertDialog.Backdrop className="fixed inset-0 min-h-dvh bg-fd-foreground opacity-20 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
            <AlertDialog.Popup className="fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-fd-background p-6 text-fd-foreground outline-1 outline-fd-border transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0">
              <AlertDialog.Title className="-mt-1.5 mb-1 text-lg font-medium">
                {payload?.message ?? 'Are you sure?'}
              </AlertDialog.Title>
              <AlertDialog.Description className="mb-6 text-base text-fd-muted-foreground">
                This action cannot be undone.
              </AlertDialog.Description>
              <div className="flex justify-end gap-4">
                <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-foreground select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
                  Cancel
                </AlertDialog.Close>
                <AlertDialog.Close className="flex h-10 items-center justify-center rounded-md border border-fd-border bg-fd-background px-3.5 text-base font-medium text-fd-error select-none hover:bg-fd-muted focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-fd-primary active:bg-fd-muted">
                  Confirm
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Portal>
        )}
      </AlertDialog.Root>
    </React.Fragment>
  );
}
