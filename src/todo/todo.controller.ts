import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    async getAllTodos(): Promise<Todo[]> {
        return this.todoService.findAll()
    }

    @Get(':id')
    async getTodo(
        @Param('id')
        id: string
    ): Promise<Todo> {
        return this.todoService.findeById(id)
    }

    @Post()
    async createTodo(
        @Body()
        todo: CreateTodoDto
        ): Promise<Todo> {
        return this.todoService.create(todo)
    }

    @Put(':id')
    async updateTodo(
        @Param('id')
        id: string,

        @Body()
        todo: UpdateTodoDto
        ): Promise<Todo> {
        return this.todoService.updateById(id, todo)
    }

    @Delete(':id')
    async deletTodo(
        @Param('id')
        id: string,
        ): Promise<Todo> {
        return this.todoService.deleteById(id)
    }
}


