import { Field } from '@base-ui/react/field';
import { Fieldset } from '@base-ui/react/fieldset';

export default function ExampleField() {
  return (
    <Fieldset.Root className="flex w-full max-w-64 flex-col gap-4">
      <Fieldset.Legend className="border-b border-fd-border pb-3 text-lg font-medium text-fd-foreground">
        Billing details
      </Fieldset.Legend>

      <Field.Root className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Company</Field.Label>
        <Field.Control
          placeholder="Enter company name" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
      </Field.Root>

      <Field.Root className="flex flex-col items-start gap-1">
        <Field.Label className="text-sm font-medium text-fd-foreground">Tax ID</Field.Label>
        <Field.Control
          placeholder="Enter fiscal number" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
        />
      </Field.Root>
    </Fieldset.Root>
  );
}
