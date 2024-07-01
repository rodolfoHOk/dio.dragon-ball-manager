import { BallCard } from '../../components/ball-card/BallCard';
import { BallServiceFactory } from '../../services/factories/ball-service-factory';

export function HomePage() {
  const ballService = BallServiceFactory.getInstance();
  const balls = ballService.getBalls();

  return (
    <div>
      <h1>Gerenciador de Esferas do Dragão</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {balls.map((ball) => (
          <BallCard key={ball.id} ball={ball} profileId={1} />
        ))}
      </div>
    </div>
  );
}
