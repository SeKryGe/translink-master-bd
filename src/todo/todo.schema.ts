import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})
export class Todo {
    
    @Prop()
    title: string;

    @Prop()
    isComplite: boolean;

}

export const TodoSchema = SchemaFactory.createForClass(Todo) 