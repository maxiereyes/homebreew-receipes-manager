import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
} from "@nestjs/common";
import { ReceipesService } from "./receipes.service";
import { ReceipesRequestDTO } from "../dto/receipes.request.dto";

@Controller("/receipes")
export class ReceipesController {
  constructor(private readonly receipesService: ReceipesService) {}

  @Post()
  async createReceipes(@Body() payload: ReceipesRequestDTO): Promise<any> {
    return await this.receipesService.createReceipes(payload);
  }

  @Put("/:id")
  async updateReceipes(
    @Param("id") id: number,
    @Body() payload: ReceipesRequestDTO
  ): Promise<any> {
    return await this.receipesService.updateReceipes(id, payload);
  }

  @Delete("/:id")
  async removeReceipes(@Param("id") id: number): Promise<any> {
    return await this.receipesService.removeReceipes(id);
  }

  @Patch("/:id")
  async patchReceipes(
    @Param("id") id: number,
    @Body() payload: ReceipesRequestDTO
  ): Promise<any> {
    return await this.receipesService.patchReceipes(id, payload);
  }
}
