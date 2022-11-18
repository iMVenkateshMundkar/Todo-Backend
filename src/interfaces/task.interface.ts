import { Schema } from "mongoose";

export interface Task {
    _id: string;
    title: string;
    description: string;
    startDate: Date;
    expiryDate: Date;
    userId: Schema.Types.ObjectId;
    deleted: boolean;
}