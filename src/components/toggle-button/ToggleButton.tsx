import { MoonSvg } from '../svg-icons/MoonSvg';
import { SunSvg } from '../svg-icons/SunSvg';

type ToggleButtonProps = {
  onToggle: () => void;
};

export function ToggleButton({ onToggle }: ToggleButtonProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onToggle}
      />

      <div className="relative w-16 h-8 px-0.5 flex justify-between items-center rounded-full bg-neutral-100 shadow-toggle-inset transition-all duration-300 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:h-7 after:w-7 after:rounded-full after:shadow-toggle-peer after:bg-gradient-to-b after:from-[#ffcc89] after:to-[#d8860b] after:transition-all after:duration-300 peer peer-checked:bg-neutral-950 peer-checked:after:translate-x-[32px] peer-checked:after:from-[#777777] peer-checked:after:to-[#3a3a3a]">
        <SunSvg className="w-5 h-5 z-10 ml-1 fill-white dark:fill-neutral-400 transition-colors duration-300" />

        <MoonSvg className="w-5 h-5 z-10 mr-1 fill-neutral-400 dark:fill-white transition-colors duration-300" />
      </div>
    </label>
  );
}
