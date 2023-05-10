import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isCompleted: boolean;
}