import { Injectable, Inject } from "@nestjs/common";
import { ReceipesInterface } from "../interfaces/receipes.interfaces";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Receipes } from "../entities/receipes.entity";

@Injectable()
export class ReceipesService {
  constructor(
    @InjectRepository(Receipes)
    private receipesRepository: Repository<ReceipesInterface>
  ) {}

  async createReceipes(payload: ReceipesInterface): Promise<any> {
    try {
      return await this.receipesRepository.save(payload);
    } catch (error) {
      throw new Error(
        `Error save payload receipes with stack: ${error.message}`
      );
    }
  }

  async updateReceipes(id: number, payload: ReceipesInterface): Promise<any> {
    return {
      id,
      payload,
    };
  }

  async removeReceipes(id: number): Promise<any> {
    return id;
  }

  async patchReceipes(id: number, payload: ReceipesInterface): Promise<any> {
    return {
      id,
      payload,
    };
  }
}
