import { Field } from '@base-ui/react/field';

export default function ExampleField() {
  return (
    <Field.Root className="flex w-full max-w-64 flex-col items-start gap-1">
      <Field.Label className="text-sm font-medium text-fd-foreground">Name</Field.Label>
      <Field.Control
        required
        placeholder="Required" className="h-10 w-full rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
      />
      <Field.Error className="text-sm text-fd-error" match="valueMissing">
        Please enter your name
      </Field.Error>

      <Field.Description className="text-sm text-fd-muted-foreground">
        Visible on your profile
      </Field.Description>
    </Field.Root>
  );
}
