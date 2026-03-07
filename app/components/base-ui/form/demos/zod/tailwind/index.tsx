'use client';
import * as React from 'react';
import { z } from 'zod';
import { Field } from '@base-ui/react/field';
import { Form } from '@base-ui/react/form';
import { Button } from '@base-ui/react/button';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number('Age must be a number').positive('Age must be a positive number'),
});

async function submitForm(formValues: Form.Values) {
  const result = schema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  return {
    errors: {},
  };
}

export default function Page() {
  const [errors, setErrors] = React.useState({});

  return (
    <Form className="flex w-full max-w-64 flex-col gap-4"
      errors={errors}
      onFormSubmit={async (formValues) => {
        const response = await submitForm(formValues);
        setErrors(response.errors);
      }}
    >
      <Field.Root name="name" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Name</Field.Label>
        <Field.Control
          placeholder="Enter name" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
        <Field.Error className="text-sm text-fd-error" />
      </Field.Root>
      <Field.Root name="age" className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Age</Field.Label>
        <Field.Control
          placeholder="Enter age" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
        <Field.Error className="text-sm text-fd-error" />
      </Field.Root>
      <Button
        type="submit" className="flex items-center justify-center h-10 px-3.5 m-0 outline-0 border border-fd-border rounded-md bg-fd-background font-inherit text-base font-medium leading-6 text-fd-foreground select-none hover:data-[disabled]:bg-fd-background hover:bg-fd-muted active:data-[disabled]:bg-fd-background active:bg-fd-accent active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] active:border-t-gray-300 active:data-[disabled]:shadow-none active:data-[disabled]:border-t-gray-200 focus-visible:outline-2 focus-visible:outline-fd-primary focus-visible:-outline-offset-1 data-[disabled]:text-fd-muted-foreground"
      >
        Submit
      </Button>
    </Form>
  );
}
