import { CreateTaskDto } from "@/dtos/tasks.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Task } from "@/interfaces/task.interface";
import TaskService from "@/services/tasks.service";
import { isEmpty } from "class-validator";
import { NextFunction, Request, Response } from "express";


class TasksController {
    public taskService = new TaskService();

    public getAllTasksByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId: string = req.params.id;
            const findAllTasksDataByUserId: Task[] = await this.taskService.findAllTasksByUserId(userId);
            res.status(200).json({data: findAllTasksDataByUserId, message: 'findAllTasksByUserId'});
        } catch (error) {
            next(error);
        }
    }

    public getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllTasksData: Task[] = await this.taskService.findAllTasks();
            res.status(200).json({data: findAllTasksData, message: 'findAllTasks'});
        } catch (error) {
            next(error);
        }
    }

    public getTaskById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const taskId: string = req.params.id;
            console.log(taskId);
            const findOneTaskData: Task = await this.taskService.findTaskById(taskId);
            res.status(200).json({data: findOneTaskData, message: 'findOneTask'});
        } catch (error) {
            next(error);
        }
    }

    public createTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const taskData: CreateTaskDto = req.body;
            const createTaskData: Task = await this.taskService.createTask(taskData);
            res.status(200).json({data: createTaskData, message: 'createTask'});
        } catch (error) {
            next(error);
        }
    }

    public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const taskId: string = req.params.id;
            const deleteTaskData = await this.taskService.deleteTask(taskId);
            res.status(200).json({data: deleteTaskData, message: 'deleteTask'});
        } catch (error) {
            next(error);
        }
    }

    public updateTask = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const taskId: string = req.params.id;
            const taskData: CreateTaskDto = req.body;
            console.log("TaskData for update",taskData);
            const updateTaskData = await this.taskService.updateTask(taskId, taskData);
            res.status(200).json({data: updateTaskData, message: 'updateTask'});
        } catch (error) {
            next(error);
        }
    }
}

export default TasksController