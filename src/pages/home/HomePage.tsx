import { InvocationAction } from '../../components/action/InvocationAction';
import { BallCardList } from '../../components/ball-card-list/BallCardList';
import { BallService } from '../../services/ball-service';

export function HomePage() {
  const profileId = 1;
  const allBalls = BallService.getBalls();

  return (
    <div className="flex flex-col gap-4 py-3">
      <InvocationAction profileId={profileId} />

      <BallCardList profileId={profileId} allBalls={allBalls} />
    </div>
  );
}
