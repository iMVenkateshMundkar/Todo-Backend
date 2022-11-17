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
        type: String,
        required: true,
    },
    expiryDate: {
        type: String,
        required: true
    }
})

const taskModel = model<Task & Document>('Task', taskSchema);

export default taskModel;