import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDTO } from "../dto/User.dto";
import { User, UserDocument } from "../models/User.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>
  ) {

  }

  async create(createUserDto: CreateUserDTO): Promise<User> {
    const createdUser = await this.UserModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.UserModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedUser = await this.UserModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
