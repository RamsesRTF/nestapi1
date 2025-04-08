import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name:string;
  @Prop()
  gmail:string;
  @Prop()
  password:string;
  @Prop()
  AboutMe:string;
  @Prop()
  LikW:string;
  @Prop()
  Education:string;
  @Prop({ type: Object })
  Contact:{
    phone:number,
    email:string,
    location:string,
    socials:[String]
  };
  @Prop({ type: Array })
  Skills:[String];
  @Prop({ type: Array })
  Languages:[String];
  @Prop({ type: Object })
  Representative:{
    name:string,
    phone:number,
    email:string
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
