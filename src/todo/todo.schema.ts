import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/user.schema';

@Schema({
    timestamps: true,
})
export class Todo {

    @Prop()
    title: string;

    @Prop()
    isCompleted: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user:User
}

export const TodoSchema = SchemaFactory.createForClass(Todo) 