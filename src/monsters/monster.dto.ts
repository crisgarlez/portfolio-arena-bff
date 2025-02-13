import {
  ApiProperty,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsUrl, IsOptional } from 'class-validator';

export class CreateMonsterDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "Monster's name.",
    example: 'Dracula',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Monster's attack.",
    example: 60,
  })
  attack: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Monster's defense.",
    example: 50,
  })
  defense: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Monster's HP.",
    example: 80,
  })
  hp: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: "Monster's speed.",
    example: 70,
  })
  speed: number;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: "Monster's imageUrl.",
    example: 'changemeplease',
  })
  imageUrl: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Monster's code.",
    example: 'changemeplease',
  })
  code: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "Monster's typeCode.",
    example: 'changemeplease',
  })
  typeCode: string;
}

export class UpdatePartialMonsterDto extends PartialType(CreateMonsterDto) {}

export class ExcludeCodeDto extends OmitType(CreateMonsterDto, [
  'code',
] as const) {
  @Exclude()
  code?: string;
}

export class UpdateMonsterDto extends IntersectionType(
  UpdatePartialMonsterDto,
  ExcludeCodeDto,
) {}

export class FindByCodeDto extends PickType(CreateMonsterDto, [
  'code',
] as const) {
  @IsNotEmpty()
  code: string;
}
