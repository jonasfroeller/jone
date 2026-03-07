import { Avatar } from '@base-ui/react/avatar';

export default function ExampleAvatar() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-fd-muted align-middle text-base font-medium text-fd-foreground select-none">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48" className="size-full object-cover"
        />
        <Avatar.Fallback className="flex size-full items-center justify-center text-base">
          LT
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-fd-muted align-middle text-base font-medium text-fd-foreground select-none">
        LT
      </Avatar.Root>
    </div>
  );
}
