import * as Switch from '@radix-ui/react-switch';
import { MoonSvg } from '../svg-icons/MoonSvg';
import { SunSvg } from '../svg-icons/SunSvg';

type ToggleButtonProps = {
  isChecked: boolean;
  onToggle: () => void;
};

export function ToggleButton({ isChecked, onToggle }: ToggleButtonProps) {
  return (
    <Switch.Root
      id="dark-mode-switch"
      className="relative w-16 h-8 px-0.5 flex justify-between items-center rounded-full bg-neutral-100 shadow-toggle-inset transition-all duration-300 data-[state=checked]:bg-neutral-950"
      onCheckedChange={onToggle}
    >
      <SunSvg
        className={`w-5 h-5 z-10 ml-1 transition-colors duration-300 ${
          isChecked ? 'fill-neutral-400' : 'fill-white'
        }`}
      />

      <MoonSvg
        className={`w-5 h-5 z-10 mr-1 transition-colors duration-300 ${
          isChecked ? 'fill-white' : 'fill-neutral-400'
        }`}
      />

      <Switch.Thumb className="absolute w-7 h-7 rounded-full shadow-toggle-peer bg-gradient-to-b from-[#ffcc89] to-[#d8860b] transition-all duration-300 data-[state=checked]:translate-x-[32px] data-[state=checked]:from-[#777777] data-[state=checked]:to-[#3a3a3a]" />
    </Switch.Root>
  );
}
