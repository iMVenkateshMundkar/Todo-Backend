import { Task } from "@/interfaces/task.interface";
import taskModel from "@/models/task.model";


class TaskDao{
    public tasks = taskModel;

    public async findAllTasksByUserId(userId: string): Promise<Task[]>{
        return await this.tasks.find({userId: userId, deleted: false});
    }

    public async findAllTasks(): Promise<Task[]>{
        return await this.tasks.find({});
    }

    public async deleteTask(taskId: string): Promise<Task>{
        return await this.tasks.findByIdAndDelete(taskId);
    }

    public async updateTask(taskId: string, taskData: Task): Promise<Task>{
        return await this.tasks.findByIdAndUpdate(taskId, taskData);
    }

    public async findOneTask(taskId: string): Promise<Task>{
        return await this.tasks.findOne({_id: taskId});
    }
}

export default TaskDao