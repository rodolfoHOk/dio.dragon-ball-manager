import { FormEvent, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Ball } from '../../models/ball';
import { Badge } from '../badge/Badge';
import { Button } from '../button/Button';
import { BallFormModal } from './BallFormModal';

type BallCardProps = {
  ball: Ball;
  profileId: number;
  onValidate: (event: FormEvent<HTMLFormElement>) => void;
};

export function BallCard({ ball, profileId, onValidate }: BallCardProps) {
  let [openModal, setOpenModel] = useState(false);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModel}>
      <div
        data-testid="card"
        className="w-full p-4 flex flex-col bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 rounded-lg border-2 border-neutral-300 transition-colors duration-300"
      >
        <div>
          <img src={ball.image} alt={ball.name} />
        </div>

        <div className="flex flex-col items-center gap-6 mb-6">
          <p className="font-bold text-lg">{ball.name}</p>

          <div className="w-full flex justify-center">
            {ball.owner === profileId ? (
              <Badge type="success" label="Encontrada" />
            ) : (
              <Badge type="danger" label="Não encontrada" />
            )}
          </div>
        </div>

        <div className="flex justify-center">
          {ball.owner === profileId ? null : (
            <Dialog.Trigger asChild>
              <Button
                data-testid={`card-button-${Array.from(ball.name)[0]}`}
                className="w-full"
              >
                Encontrei
              </Button>
            </Dialog.Trigger>
          )}
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 transition-colors duration-300" />

        <BallFormModal
          ball={ball}
          onValidate={onValidate}
          afterValidate={() => setOpenModel(false)}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
