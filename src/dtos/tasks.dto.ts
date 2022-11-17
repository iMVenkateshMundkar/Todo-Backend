import { IsString, IsDate } from "class-validator";
import { Schema } from "mongoose";

export class CreateTaskDto {
    @IsString()
    public title: string;
    public description: string;
    public startDate: Date;
    public expiryDate: Date;
    public userId: Schema.Types.ObjectId;

    // @IsDate()
    // public startDate: Date;
    // public expiryDate: Date;
}