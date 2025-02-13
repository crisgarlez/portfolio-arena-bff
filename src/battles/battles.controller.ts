import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BattlesService } from './battles.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('battles')
@ApiTags('Battle')
export class BattlesController {
  constructor(private readonly battlesService: BattlesService) {}

  @Post()
  create(@Body() createMonsterDto: any) {
    const { monseterOneCode, monseterTwoCode } = createMonsterDto;
    return this.battlesService.startBattle(monseterOneCode, monseterTwoCode);
  }
}
