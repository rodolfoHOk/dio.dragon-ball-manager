import { Ball } from '../models/ball';

export class BallService {
  private static balls: Ball[] = [
    {
      id: 1,
      name: '1 estrela',
      owner: 0,
      image: '/images/dragonball-1-star.png',
    },
    {
      id: 2,
      name: '2 estrelas',
      owner: 0,
      image: '/images/dragonball-2-stars.png',
    },
    {
      id: 3,
      name: '3 estrelas',
      owner: 0,
      image: '/images/dragonball-3-stars.png',
    },
    {
      id: 4,
      name: '4 estrelas',
      owner: 1,
      image: '/images/dragonball-4-stars.png',
    },
    {
      id: 5,
      name: '5 estrelas',
      owner: 0,
      image: '/images/dragonball-5-stars.png',
    },
    {
      id: 6,
      name: '6 estrelas',
      owner: 0,
      image: '/images/dragonball-6-stars.png',
    },
    {
      id: 7,
      name: '7 estrelas',
      owner: 0,
      image: '/images/dragonball-7-stars.png',
    },
  ];

  static getBalls(): Ball[] {
    return this.balls;
  }

  static foundedBall(ownerId: number, ballId: number) {
    this.balls = this.balls.map((ball) => {
      if (ball.id === ballId) {
        ball.owner = ownerId;
      }
      return ball;
    });
  }

  static hasAllBalls(ownerId: number) {
    const balls = this.balls.filter((ball) => ball.owner === ownerId);
    return balls.length === 7;
  }
}
