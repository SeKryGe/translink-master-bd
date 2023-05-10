import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Todo } from "src/todo/todo.schema";



@Schema({
    timestamps: true
})

export class User {

    @Prop()
    name:string

    @Prop({ unique: [true, 'Duplicate email entered']})
    email:string

    @Prop()
    password:string

    @Prop()
    todo: Todo
}   

export const UserSchema = SchemaFactory.createForClass(User)