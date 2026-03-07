import { Separator } from '@base-ui/react/separator';

export default function ExampleSeparator() {
  return (
    <div className="flex gap-4 text-nowrap">
      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Home
      </a>
      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Pricing
      </a>
      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Blog
      </a>
      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Support
      </a>

      <Separator orientation="vertical" className="w-px bg-fd-accent" />

      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Log in
      </a>
      <a
        href="#" className="text-sm text-fd-foreground decoration-gray-400 decoration-1 underline-offset-2 outline-hidden hover:underline focus-visible:rounded-xs focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-fd-primary"
      >
        Sign up
      </a>
    </div>
  );
}
