import { IsString, IsDate } from "class-validator";

export class CreateTaskDto {
    @IsString()
    public title: string;
    public description: string;

    @IsDate()
    public startDate: string;
    public expiryDate: string;

    // @IsDate()
    // public startDate: Date;
    // public expiryDate: Date;
}