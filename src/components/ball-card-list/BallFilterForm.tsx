import * as Label from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

type BallFilterFormProps = {
  currentValue: string;
  onSelect: (value: string) => void;
};

export function BallFilterForm({
  currentValue,
  onSelect,
}: BallFilterFormProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <form className="flex flex-col gap-2">
      <Label.Root className="font-bold text-lg">Filtrar</Label.Root>

      <Select.Root defaultValue={currentValue} onValueChange={onSelect}>
        <Select.Trigger className="w-44 h-10 px-2 inline-flex items-center justify-between gap-1 bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 hover:bg-zinc-100 border border-neutral-500 rounded shadow transition-colors duration-300">
          <Select.Value />

          <Select.Icon>
            <ChevronsUpDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={`${theme} w-48 p-2 flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-neutral-500 rounded-md shadow-md`}
          >
            <Select.Viewport className="flex flex-col">
              <Select.Group className="flex flex-col">
                <Select.Item
                  className="h-10 px-2 flex items-center justify-between focus:outline-none focus:bg-zinc-200 focus:dark:bg-zinc-700 rounded-md transition-colors duration-300"
                  value="all"
                >
                  <Select.ItemText>Todas as esferas</Select.ItemText>

                  <Select.ItemIndicator>
                    <CheckIcon size={18} />
                  </Select.ItemIndicator>
                </Select.Item>

                <Select.Item
                  className="h-10 px-2 flex items-center justify-between focus:outline-none focus:bg-zinc-200 focus:dark:bg-zinc-700 rounded-md transition-colors duration-300"
                  value="me"
                >
                  <Select.ItemText>Minhas esferas</Select.ItemText>

                  <Select.ItemIndicator>
                    <CheckIcon size={18} />
                  </Select.ItemIndicator>
                </Select.Item>

                <Select.Item
                  className="h-10 px-2 flex items-center justify-between focus:outline-none focus:bg-zinc-200 focus:dark:bg-zinc-700 rounded-md transition-colors duration-300"
                  value="not-me"
                >
                  <Select.ItemText>Não tenho</Select.ItemText>

                  <Select.ItemIndicator>
                    <CheckIcon size={18} />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </form>
  );
}
