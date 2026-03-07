import { Input } from '@base-ui/react/input';

export default function ExampleInput() {
  return (
    <label className="flex flex-col items-start gap-1">
      <span className="text-sm font-medium text-fd-foreground">Name</span>
      <Input
        placeholder="Enter your name" className="h-10 w-56 rounded-md border border-fd-border pl-3.5 text-base text-fd-foreground focus:outline-2 focus:-outline-offset-1 focus:outline-fd-primary"
      />
    </label>
  );
}
