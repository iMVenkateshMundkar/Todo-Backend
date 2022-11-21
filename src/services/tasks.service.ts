import TasksController from "@/controllers/task.controller";
import TaskDao from "@/dao/tasks.dao";
import UserDao from "@/dao/users.dao";
import { CreateTaskDto } from "@/dtos/tasks.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Task } from "@/interfaces/task.interface";
import { User } from "@/interfaces/users.interface";
import taskModel from "@/models/task.model";
import userModel from "@/models/users.model";
import { isEmpty } from "class-validator";


class TaskService {
    public tasks = taskModel;
    public taskDao = new TaskDao();
    public users = userModel;
    public userDao = new UserDao();

    public async findAllTasksByUserId(userId: string): Promise<Task[]> {
        if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");
        const findUser: User = await this.userDao.findOneUserById(userId);
        if (!findUser) throw new HttpException(409, "User doesn't exist");
        const tasks: Task[] = await this.taskDao.findAllTasksByUserId(userId);
        return tasks;
    }

    public async findAllTasks(): Promise<Task[]> {
        const tasks: Task[] = await this.taskDao.findAllTasks();
        return tasks;
    }

    public async findTaskById(taskId: string): Promise<Task> {
        if (isEmpty(taskId)) throw new HttpException(400, "TaskId is empty");

        const findTask: Task = await this.taskDao.findOneTask(taskId);
        if (!findTask) throw new HttpException(409, "Task doesn't exist");
        return findTask;
    }

    public async createTask(taskData: CreateTaskDto): Promise<Task> {
        if (isEmpty(taskData)) throw new HttpException(400, "TaskData is empty");
        const createTaskData: Task = await this.tasks.create(taskData);
        return createTaskData;
    }

    public async deleteTask(taskId: string): Promise<Task> {
        const deleteTaskById: Task = await this.tasks.findByIdAndUpdate(taskId, {deleted: true});
        if (!deleteTaskById) throw new HttpException(409, "Task doesn't exist");
        return deleteTaskById;
    }

    public async updateTask(taskId: string, taskData: CreateTaskDto): Promise<Task> {
        if(isEmpty(taskData)) throw new HttpException(400, "TaskData is empty");

        // if (taskData.startDate) throw new HttpException(409, "Start Date can not updated");

        const updateTaskById: Task = await this.tasks.findByIdAndUpdate(taskId, taskData);
        if (!updateTaskById) throw new HttpException(409, "Task doesn't exist");

        return updateTaskById;
    }
}

export default TaskService;