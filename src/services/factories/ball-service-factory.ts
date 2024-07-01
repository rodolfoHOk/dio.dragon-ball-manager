import { BallService } from '../ball-service';

export class BallServiceFactory {
  private static ballService: BallService;

  static getInstance(): BallService {
    if (this.ballService) {
      return this.ballService;
    } else {
      return new BallService();
    }
  }
}
