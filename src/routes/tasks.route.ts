import TasksController from "@/controllers/task.controller";
import { CreateTaskDto } from "@/dtos/tasks.dto";
import { Routes } from "@/interfaces/routes.interface";
import validationMiddleware from "@/middlewares/validation.middleware";
import { Router } from "express";

class TasksRoute implements Routes {
    public path = '/tasks';
    public router = Router();
    public tasksController = new TasksController();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(`${this.path}/users/:id`, this.tasksController.getAllTasks);
        this.router.get(`${this.path}/:id`, this.tasksController.getTaskById);
        this.router.post(`${this.path}`, this.tasksController.createTask);
        this.router.delete(`${this.path}/:id`, this.tasksController.deleteTask);
        this.router.put(`${this.path}/:id`, this.tasksController.updateTask);
    }
}

export default TasksRoute;