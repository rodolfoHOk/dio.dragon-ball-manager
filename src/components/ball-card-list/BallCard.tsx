import { Ball } from '../../models/ball';
import { Badge } from '../badge/Badge';
import { Button } from '../button/Button';

type BallCardProps = {
  ball: Ball;
  profileId: number;
};

export function BallCard({ ball, profileId }: BallCardProps) {
  return (
    <div className="w-full p-4 flex flex-col bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 rounded-lg border-2 border-neutral-300 transition-colors duration-300">
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
          <Button className="w-full">Encontrei</Button>
        )}
      </div>
    </div>
  );
}
