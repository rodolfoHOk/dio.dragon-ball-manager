import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import { X } from 'lucide-react';
import { Ball } from '../../models/ball';
import { Button } from '../button/Button';
import { FormEvent, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Input } from '../input/Input';

type BallFormModalProps = {
  ball: Ball;
  onValidate: (event: FormEvent<HTMLFormElement>) => void;
};

export function BallFormModal({ ball, onValidate }: BallFormModalProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Dialog.Content
      className={`${theme} fixed top-20 left-1/2 -translate-x-1/2 bg-zinc-100 dark:bg-zinc-800 px-1 py-1 flex flex-col text-zinc-950 dark:text-zinc-50 rounded-md`}
    >
      <Dialog.Close asChild>
        <button
          className="self-end flex items-center justify-center rounded-full hover:bg-orange-400 text-neutral-500 transition-colors duration-300"
          aria-label="Close"
        >
          <X />
        </button>
      </Dialog.Close>

      <div className="px-5 pb-3 flex flex-col gap-2">
        <Dialog.Title className="font-bold text-lg">
          Validar esfera do dragão
        </Dialog.Title>

        <form onSubmit={onValidate}>
          <Input
            className="hidden"
            id="ballId"
            name="ballId"
            defaultValue={ball.id}
          />

          <fieldset className="flex flex-col gap-2">
            <label className="" htmlFor="ballCode">
              Insira o código de esfera de {`${ball.name}`}
            </label>
            <Input id="ballCode" name="ballCode" />
          </fieldset>

          <Separator.Root
            className="h-[1px] w-full mt-2 mb-1 bg-neutral-300 dark:bg-neutral-700"
            decorative
            orientation="horizontal"
          />

          <div className="flex justify-end gap-3">
            <Button type="submit">Validar</Button>

            <Dialog.Close asChild>
              <Button type="button" variant="secondary">
                Voltar
              </Button>
            </Dialog.Close>
          </div>
        </form>
      </div>
    </Dialog.Content>
  );
}
