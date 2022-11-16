import { IsString, IsDate } from "class-validator";

export class CreateTaskDto {
    @IsString()
    public title: string;

    @IsDate()
    public startDate: Date;
    public endDate: Date;
}