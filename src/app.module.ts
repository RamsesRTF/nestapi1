import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./modules/User.module";
import { AdminModule } from "./modules/Admin.module";
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/FDB"),
    UserModule,
    AdminModule
  ],
})
export class AppModule {}
