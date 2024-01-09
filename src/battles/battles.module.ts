import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BattlesController } from './battles.controller';
import { BattlesService } from './battles.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BATTLES_MS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'battles_ms_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [BattlesController],
  providers: [BattlesService],
})
export class BattlesModule {}
