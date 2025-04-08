import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAdminDTO } from "../dto/Admin.dto";
import { Admin, AdminDocument } from "../models/Admin.model";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly AdminModel: Model<AdminDocument>
  ) {

  }

  async create(createAdminDto: CreateAdminDTO): Promise<Admin> {
    const createdAdmin = await this.AdminModel.create(createAdminDto);
    return createdAdmin;
  }

  async findAll(): Promise<Admin[]> {
    return this.AdminModel.find().exec();
  }

  async findOne(id: string): Promise<Admin> {
    return this.AdminModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedAdmin = await this.AdminModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedAdmin;
  }
}
