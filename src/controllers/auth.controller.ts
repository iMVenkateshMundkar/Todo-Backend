import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import userDao from '@/dao/users.dao';
import { HttpException } from '@/exceptions/HttpException';
import userModel from '@/models/users.model';

class AuthController {
  public authService = new AuthService();
  public userDao = new userDao();
  public users = userModel;

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser, tokenData } = await this.authService.login(userData);

      // res.setHeader('Set-Token', [tokenData.token]);
      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: {_id: findUser._id, token: tokenData.token}, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      console.log("In Controller", userId);
      const logOutUserData: User = await this.authService.logout(userId);
      // res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
