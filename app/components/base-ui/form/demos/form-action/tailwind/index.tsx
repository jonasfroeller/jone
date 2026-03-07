'use client';
import * as React from 'react';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Button } from '@base-ui/react/button';

interface FormState {
  serverErrors?: Form.Props['errors'];
}

export default function ActionStateForm() {
  const [state, formAction, loading] = React.useActionState<FormState, FormData>(submitForm, {});

  return (
    <Form
      action={formAction}
      errors={state.serverErrors} className="flex w-full max-w-64 flex-col gap-4"
    >
      <Field.Root name="username" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Username</Field.Label>
        <Field.Control
          type="username"
          required
          defaultValue="admin"
          placeholder="e.g. alice132" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
        <Field.Error className="text-sm text-fd-error" />
      </Field.Root>
      <Button
        type="submit"
        disabled={loading}
        focusableWhenDisabled className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-fd-border rounded-md bg-fd-background font-inherit text-base font-medium leading-6 text-fd-foreground select-none hover:data-[disabled]:bg-fd-background hover:bg-fd-muted active:data-[disabled]:bg-fd-background active:bg-fd-accent active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-fd-primary focus-visible:-outline-offset-1 data-[disabled]:text-fd-muted-foreground"
      >
        Submit
      </Button>
    </Form>
  );
}

// Mark this as a Server Function with `'use server'` in a supporting framework like Next.js
async function submitForm(_previousState: FormState, formData: FormData) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const username = formData.get('username') as string | null;

    if (username === 'admin') {
      return { success: false, serverErrors: { username: "'admin' is reserved for system use" } };
    }

    // 50% chance the username is taken
    const success = Math.random() > 0.5;

    if (!success) {
      return {
        serverErrors: { username: `${username} is unavailable` },
      };
    }
  } catch {
    return { serverErrors: { username: 'A server error has occurred' } };
  }

  return {};
}
