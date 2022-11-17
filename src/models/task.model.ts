import { model, Schema, Document } from "mongoose";
import { Task } from "@/interfaces/task.interface";

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    expiryDate: {
        type: Date,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
})

const taskModel = model<Task & Document>('Task', taskSchema);

export default taskModel;