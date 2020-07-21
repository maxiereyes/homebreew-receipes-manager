import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsInt,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
} from "class-validator";

export class ReceipesRequestDTO {
  @ApiProperty({ type: "string" })
  @IsString()
  @IsNotEmpty()
  family: string;

  @ApiProperty({ type: "string" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: "number" })
  @IsInt()
  @IsNotEmpty()
  originalGravity: number;

  @ApiProperty({ type: "number" })
  @IsInt()
  @IsOptional()
  finalGravity?: number;

  @ApiProperty({ type: "number" })
  @IsDecimal()
  @IsNotEmpty()
  ibus: number;

  @ApiProperty({ type: "number" })
  @IsDecimal()
  @IsOptional()
  colorSrm?: number;

  @ApiProperty({ type: "number" })
  @IsDecimal()
  @IsOptional()
  porcAlcohol?: number;
}
