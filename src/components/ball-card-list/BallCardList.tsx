import { useEffect, useState } from 'react';
import { Ball } from '../../models/ball';
import { BallFilterForm } from './BallFilterForm';
import { BallCard } from './BallCard';

type BallCardListProps = {
  profileId: number;
  allBalls: Ball[];
};

export function BallCardList({ profileId, allBalls }: BallCardListProps) {
  const [selected, setSelected] = useState('all');
  const [balls, setBalls] = useState<Ball[]>([]);

  function onSelect(value: string) {
    setSelected(value);
  }

  useEffect(() => {
    console.log(selected);
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
      <div className="flex justify-between items-center">
        <h1 className="font-black text-2xl">
          Gerenciador de Esferas do Dragão
        </h1>

        <BallFilterForm currentValue={selected} onSelect={onSelect} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {balls.map((ball) => (
          <BallCard key={ball.id} ball={ball} profileId={1} />
        ))}
      </div>
    </>
  );
}
