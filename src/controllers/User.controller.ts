import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "../services/User.service";
import { CreateUserDTO } from "../dto/User.dto";
import { User } from "../models/User.model";

@Controller("Users")
export class UserController {
  constructor(private readonly UsersService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDTO) {
    await this.UsersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.UsersService.delete(id);
  }
}
