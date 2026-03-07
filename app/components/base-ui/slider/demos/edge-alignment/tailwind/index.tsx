import { Slider } from '@base-ui/react/slider';

export default function EdgeAlignedThumb() {
  return (
    <Slider.Root thumbAlignment="edge" defaultValue={25}>
      <Slider.Control className="flex w-56 touch-none items-center py-3 select-none">
        <Slider.Track className="h-1 w-full rounded-sm bg-fd-accent shadow-[inset_0_0_0_1px] shadow-fd-foreground/10 select-none">
          <Slider.Indicator className="rounded-sm bg-gray-700 select-none" />
          <Slider.Thumb className="size-4 rounded-full bg-fd-background outline-1 outline-fd-border select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-fd-primary" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}
