import { User } from '@prisma/client';
import{ Request, Response } from 'express';

export const currentUser = async(req: Request, res : Response) => {
    try{
        const user : User = req.user;
        res.json(user);
    }catch(error){
        console.log(error);
    }
}