import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import userModel from '@models/users.model';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log("In Auth", req.headers);
    let authorization = req.headers.authorization;
    console.log(req.headers);
    if (authorization) {
      const token = req.headers.authorization.split(" ");
      const findUser = await userModel.findOne({token: token[3]});
      if (findUser){
        next();
      }
      else{
        next(new HttpException(401, "Wrong authentication token"));
      }
    }
    else{
      next(new HttpException(404, "Authentication token is missing"));
    }
    
  } catch (error) {
    next(new HttpException(401, "Wrong authentication token"));
  }
}

export default authMiddleware;
