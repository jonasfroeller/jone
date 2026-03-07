'use client';
import * as React from 'react';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Button } from '@base-ui/react/button';

export default function ExampleForm() {
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  return (
    <Form className="flex w-full max-w-64 flex-col gap-4"
      errors={errors}
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('url') as string;

        setLoading(true);
        const response = await submitForm(value);
        const serverErrors = {
          url: response.error,
        };

        setErrors(serverErrors);
        setLoading(false);
      }}
    >
      <Field.Root name="url" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Homepage</Field.Label>
        <Field.Control
          type="url"
          required
          defaultValue="https://example.com"
          placeholder="https://example.com"
          pattern="https?://.*" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
        <Field.Error className="text-sm text-fd-error" />
      </Field.Root>
      <Button
        disabled={loading}
        focusableWhenDisabled
        type="submit" className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-fd-border rounded-md bg-fd-background font-inherit text-base font-medium leading-6 text-fd-foreground select-none hover:data-[disabled]:bg-fd-background hover:bg-fd-muted active:data-[disabled]:bg-fd-background active:bg-fd-accent active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-fd-primary focus-visible:-outline-offset-1 data-[disabled]:text-fd-muted-foreground"
      >
        Submit
      </Button>
    </Form>
  );
}

async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith('example.com')) {
      return { error: 'The example domain is not allowed' };
    }
  } catch {
    return { error: 'This is not a valid URL' };
  }

  return { success: true };
}
