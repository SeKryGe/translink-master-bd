import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';

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
    @UseGuards(AuthGuard())
    async createTodo(
        @Body()
        todo: CreateTodoDto,
        @Req() req
        ): Promise<Todo> {
            return this.todoService.create(todo, req.user)
    }

    @Put(':id')
    @UseGuards(AuthGuard())
    async updateTodo(
        @Param('id')
        id: string,

        @Body()
        todo: UpdateTodoDto
        ): Promise<Todo> {
        return this.todoService.updateById(id, todo)
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deletTodo(
        @Param('id')
        id: string,
        ): Promise<Todo> {
        return this.todoService.deleteById(id)
    }
}


