import { Profile } from '../models/profile';

export class ProfileService {
  private static profiles: Profile[] = [
    {
      id: 1,
      name: 'Rudy HiOk',
      image:
        'https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/avatar/pedro.jpg',
      balls: [1, 2, 4, 6, 7],
    },
    {
      id: 2,
      name: 'Jao Pones',
      image:
        'https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/avatar/joao.jpg',
      balls: [3, 5],
    },
  ];

  static getProfile(id: number): Profile | undefined {
    return this.profiles.find((profile) => profile.id === id);
  }

  static addBall(profileId: number, ballId: number) {
    this.profiles = this.profiles.map((profile) => {
      if (profile.id === profileId) {
        profile.balls.push(ballId);
      } else {
        if (profile.balls.includes(ballId)) {
          profile.balls = profile.balls.filter((ball) => ball !== ballId);
        }
      }
      return profile;
    });
  }
}
