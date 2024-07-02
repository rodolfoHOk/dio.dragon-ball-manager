import { FormEvent, useEffect, useState } from 'react';
import { Ball } from '../../models/ball';
import { BallFilterForm } from './BallFilterForm';
import { BallCard } from './BallCard';
import { AppToast } from '../app-toast/AppToast';
import { BallService } from '../../services/ball-service';

type BallCardListProps = {
  profileId: number;
  allBalls: Ball[];
};

export function BallCardList({ profileId, allBalls }: BallCardListProps) {
  const [selected, setSelected] = useState('all');
  const [balls, setBalls] = useState<Ball[]>([]);
  const [showToast, setShowToast] = useState(false);

  function onSelect(value: string) {
    setSelected(value);
  }

  function onShowToast(value: boolean) {
    setShowToast(value);
  }

  function onValidateBall(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ballId = data.get('ballId');
    const ballCode = data.get('ballCode');
    if (ballCode === `esfera-${ballId}-valida`) {
      BallService.foundedBall(profileId, Number(ballId));
      const balls = BallService.getBalls();
      setBalls(balls);
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  }

  useEffect(() => {
    if (selected === 'me') {
      const balls = allBalls.filter((ball) => ball.owner === profileId);
      setBalls(balls);
    } else if (selected === 'not-me') {
      const balls = allBalls.filter((ball) => ball.owner !== profileId);
      setBalls(balls);
    } else {
      setBalls(allBalls);
    }
  }, [selected, allBalls, profileId]);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-black text-2xl">
            Gerenciador de Esferas do Dragão
          </h2>

          <BallFilterForm currentValue={selected} onSelect={onSelect} />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {balls.map((ball) => (
            <BallCard
              key={ball.id}
              ball={ball}
              profileId={1}
              onValidate={onValidateBall}
            />
          ))}
        </div>
      </div>

      <AppToast
        message="Código da esfera do dragão não confere "
        showToast={showToast}
        setShowToast={onShowToast}
      />
    </>
  );
}
