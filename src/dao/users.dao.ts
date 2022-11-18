import { User } from "@/interfaces/users.interface";
import userModel from "@/models/users.model";
import { NextFunction, Request, Response } from "express";

class UserDao {
    public users = userModel;

    public async findAllUsers(): Promise<User[]>{
        return await this.users.find({});
    }

    public async findOneUserByEmail(email: string): Promise<User>{
        return await this.users.findOne({email: email});
    }

    public async findOneUserById(userId: string): Promise<User>{
        return await this.users.findById(userId);
    }

}

export default UserDao;