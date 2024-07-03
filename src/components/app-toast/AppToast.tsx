import * as Toast from '@radix-ui/react-toast';
import * as Separator from '@radix-ui/react-separator';
import { Button } from '../button/Button';

type AppToastProps = {
  message: string;
  showToast: boolean;
  setShowToast: (value: boolean) => void;
};

export function AppToast({ message, showToast, setShowToast }: AppToastProps) {
  return (
    <Toast.Root
      open={showToast}
      onOpenChange={setShowToast}
      className="relative w-fit px-6 py-4 flex flex-col gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg"
    >
      <Toast.Title className="font-bold text-lg">
        Gerenciador de Esferas do Dragão
      </Toast.Title>

      <Toast.Description
        className="font-normal text-base"
        data-testid="toast-message"
      >
        {message}
      </Toast.Description>

      <Separator.Root
        className="h-[1px] w-full mt-2 mb-1 bg-neutral-300 dark:bg-neutral-700"
        decorative
        orientation="horizontal"
      />

      <div className="flex justify-end">
        <Toast.Action asChild altText="voltar">
          <Button variant="secondary" data-testid="toast-back-button">
            Voltar
          </Button>
        </Toast.Action>
      </div>
    </Toast.Root>
  );
}
