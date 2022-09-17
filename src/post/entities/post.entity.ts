import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type PostDocument = Post & Document;

@Schema()
export class Post {

    id: mongoose.Types.ObjectId;

    @Prop({unique:true})
    title: string;

    @Prop()
    content: string;

    @Prop({type:()=> Date})
    createOn: Date;

    @Prop({type:()=> Date})
    modifiedOn: Date;

    @Prop()
    mainImageUrl: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);