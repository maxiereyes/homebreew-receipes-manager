import { Module } from "@nestjs/common";
import { ReceipesController } from "./receipes.controller";
import { ReceipesService } from "./receipes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Receipes } from "../entities/receipes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Receipes])],
  controllers: [ReceipesController],
  providers: [ReceipesService],
})
export class ReceipesModule {}
