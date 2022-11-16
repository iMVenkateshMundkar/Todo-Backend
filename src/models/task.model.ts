import { model, Schema, Document } from "mongoose";
import { Task } from "@/interfaces/task.interface";

const taskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    }
})

const taskModel = model<Task & Document>('Task', taskSchema);

export default taskModel;