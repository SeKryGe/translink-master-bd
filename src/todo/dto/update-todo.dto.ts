import { IsBoolean, IsEmpty, IsOptional, IsString } from "class-validator";
import { User } from "src/auth/user.schema";

export class UpdateTodoDto {

    @IsOptional()
    @IsString()
    readonly title: string;
    
    @IsOptional()
    @IsBoolean()
    readonly isCompleted: boolean;

    @IsEmpty({ message: "You cannot pass user id "})
    readonly user: User
}