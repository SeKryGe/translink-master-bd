import { IsBoolean, IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/user.schema";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsBoolean()
    readonly isCompleted: boolean;

    @IsEmpty({ message: "You cannot pass user id "})
    readonly user: User
}