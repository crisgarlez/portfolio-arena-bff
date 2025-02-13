import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Logger,
} from '@nestjs/common';
import { MonstersService } from './monsters.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateMonsterDto } from './monster.dto';

@Controller('monsters')
@ApiTags('Monsters management')
export class MonstersController {
  private readonly logger = new Logger(MonstersController.name);

  constructor(private readonly monstersService: MonstersService) {}

  @Get()
  @ApiOperation({
    description: 'Get a monsters list',
    summary: 'Monsters list',
  })
  @ApiOkResponse({
    // type: any,
    description: 'A list of all incubated monsters',
  })
  findAll() {
    return this.monstersService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.monstersService.findOne(code);
  }

  @Put(':code')
  @ApiOperation({
    description: 'Update a monster',
    summary: 'Monster update',
  })
  @ApiBody({
    description:
      "Receive an object with the monster's attributes; the code will be ignored as it cannot be modified.",
    type: UpdateMonsterDto,
  })
  @ApiParam({ name: 'code', description: "Monster's code" })
  update(
    @Param('code') code: string,
    @Body() updateMonsterDto: UpdateMonsterDto,
  ) {
    return this.monstersService.update(code, updateMonsterDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.monstersService.remove(code);
  }
}
