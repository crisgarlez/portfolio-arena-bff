import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonstersModule } from './monsters/monsters.module';
import { BattlesModule } from './battles/battles.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [ConfigurationModule, MonstersModule, BattlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
