import {prisma} from '../../prisma/index';
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import { User } from '@prisma/client';

export const userVerify = async(req: Request, res : Response, next: NextFunction) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message : 'Not Authenticated'});
    }

try{   
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as {userId : string};
    const userId = decoded.userId;
    
    const user : User | null = await prisma.user.findUnique({
        where :{
            id : userId
        }
    });

    if(!user){
        return res.status(404).json({message : 'User not found'});
    }

    req.user = user;
    next();
    }
catch(error){
    console.log(error);
}
}