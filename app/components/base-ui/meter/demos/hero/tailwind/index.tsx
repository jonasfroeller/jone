import { Meter } from '@base-ui/react/meter';

export default function ExampleMeter() {
  return (
    <Meter.Root className="box-border grid w-48 grid-cols-2 gap-y-2" value={24}>
      <Meter.Label className="text-sm font-medium text-fd-foreground">Storage Used</Meter.Label>
      <Meter.Value className="col-start-2 m-0 text-right text-sm leading-5 text-fd-foreground" />
      <Meter.Track className="col-span-2 block h-2 w-48 overflow-hidden bg-fd-muted shadow-[inset_0_0_0_1px] shadow-fd-foreground/10">
        <Meter.Indicator className="block bg-gray-500 transition-all duration-500" />
      </Meter.Track>
    </Meter.Root>
  );
}
