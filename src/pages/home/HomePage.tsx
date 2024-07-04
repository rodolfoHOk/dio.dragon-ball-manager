import { InvocationAction } from '../../components/invocation-action/InvocationAction';
import { BallCardList } from '../../components/ball-card-list/BallCardList';
import { BallService } from '../../services/ball-service';
import { ProfileService } from '../../services/profile-service';

export function HomePage() {
  const profile = ProfileService.getProfile(1);
  const allBalls = BallService.getBalls();

  if (!profile) {
    return (
      <div className="flex flex-col gap-4 py-3 items-center justify-center">
        <h3 className="font-black text-2xl text-red-700 dark:text-red-500">
          Usuário não existe no sistema
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-3">
      <InvocationAction profile={profile} />

      <BallCardList profileId={profile.id} allBalls={allBalls} />
    </div>
  );
}
