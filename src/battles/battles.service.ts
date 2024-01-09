import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BattlesService {
  constructor(@Inject('BATTLES_MS') private client: ClientProxy) {}

  async startBattle(monseterOneCode: string, monseterTwoCode: string) {
    return this.client.send<any>('start-battle', {
      monseterOneCode,
      monseterTwoCode,
    });
  }
}
