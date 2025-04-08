import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminController } from "../controllers/Admin.controller";
import { AdminService } from "../services/Admin.service";
import { Admin, AdminSchema } from "../models/Admin.model";


@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
