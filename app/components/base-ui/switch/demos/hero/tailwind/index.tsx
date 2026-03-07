import { Switch } from '@base-ui/react/switch';

export default function ExampleSwitch() {
  return (
    <label className="flex items-center gap-2 text-base text-fd-foreground">
      <Switch.Root
        defaultChecked className="relative flex h-6 w-10 rounded-full bg-gradient-to-r from-gray-700 from-35% to-gray-200 to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px shadow-[inset_0_1.5px_2px] shadow-fd-foreground/10 outline-1 -outline-offset-1 outline-fd-border transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full before:outline-offset-2 before:outline-fd-primary focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2 active:bg-fd-muted data-[checked]:bg-[0%_0%] data-[checked]:active:bg-gray-500 ]:shadow-none"
      >
        <Switch.Thumb className="aspect-square h-full rounded-full bg-fd-background shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px] shadow-fd-foreground/5 transition-transform duration-150 data-[checked]:translate-x-4" />
      </Switch.Root>
      Notifications
    </label>
  );
}
