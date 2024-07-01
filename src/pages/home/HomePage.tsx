import { InvocationAction } from '../../components/action/InvocationAction';
import { BallCardList } from '../../components/ball-card-list/BallCardList';
import { BallServiceFactory } from '../../services/factories/ball-service-factory';

export function HomePage() {
  const profileId = 1;
  const ballService = BallServiceFactory.getInstance();
  const allBalls = ballService.getBalls();

  return (
    <div className="flex flex-col gap-4">
      <InvocationAction profileId={profileId} />

      <BallCardList profileId={profileId} allBalls={allBalls} />
    </div>
  );
}
