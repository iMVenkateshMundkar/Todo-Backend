import TasksController from "@/controllers/task.controller";
import { CreateTaskDto } from "@/dtos/tasks.dto";
import { Routes } from "@/interfaces/routes.interface";
import authMiddleware from "@/middlewares/auth.middleware";
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
        this.router.get(`${this.path}/users/:id`, authMiddleware, this.tasksController.getAllTasksByUserId);
        this.router.get(`${this.path}`, this.tasksController.getAllTasks);
        this.router.get(`${this.path}/:id`, authMiddleware, this.tasksController.getTaskById);
        this.router.post(`${this.path}`, authMiddleware, this.tasksController.createTask);
        this.router.delete(`${this.path}/:id`, authMiddleware, this.tasksController.deleteTask);
        this.router.put(`${this.path}/:id`, authMiddleware, this.tasksController.updateTask);
    }
}

export default TasksRoute;