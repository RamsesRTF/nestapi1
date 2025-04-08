import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AdminService } from "../services/Admin.service";
import { CreateAdminDTO } from "../dto/Admin.dto";
import { Admin } from "../models/Admin.model";

@Controller("Admins")
export class AdminController {
  constructor(private readonly AdminsService: AdminService) {}

  @Post()
  async create(@Body() createAdminDto: CreateAdminDTO) {
    await this.AdminsService.create(createAdminDto);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.AdminsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Admin> {
    return this.AdminsService.findOne(id);
  }

  @Get(":name")
  async findName(@Param("name") name: string): Promise<Admin> {
    return this.AdminsService.findOne(name);
  }
  @Get(":gmail")
  async find(@Param("gmail") gmail: string): Promise<Admin> {
    return this.AdminsService.findOne(gmail);
  }


  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.AdminsService.delete(id);
  }
}
