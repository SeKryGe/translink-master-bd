import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ) {}

    async findAll(): Promise<Todo[]> {
        const todos = await this.todoModel.find()
        return todos
    }

    async create(todo: Todo): Promise<Todo> {
        const res = await this.todoModel.create(todo)
        return res
    }

    async findeById(id: string): Promise<Todo> {

        const isValidId = mongoose.isValidObjectId(id)

        if(!isValidId) {
            throw new BadRequestException('Please enter correct id')
        }

        const todo = await this.todoModel.findById(id)

        if(!todo) {
            throw new NotFoundException('Todo not found')
        }

        return todo
    }

    async updateById(id: string, todo: Todo): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todo, {
            new:true,
            runValidators:true
        },)
    }

    async deleteById(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndDelete(id)
    }
}


