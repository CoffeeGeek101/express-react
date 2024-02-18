import { User } from '@prisma/client';
import {prisma} from '../../prisma/index';
import {Request, Response} from 'express';
import { getCookie } from '../util/getCookie';
import bcrypt from 'bcryptjs';

export const signup = async(req : Request, res : Response) => {
   try{
    const {email, password, name} = req.body;
    if(!email || !password || !name){
       return res.status(400).json({'error':'Please provide all the details'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user : User = await prisma.user.create({
        data : {
            email,
            password : hashedPassword,
            name
        }
    });
    getCookie(user, res);
    
   }
   catch(e){
       console.log(e);
   }
}

export const login = async(req : Request, res : Response) => {
    try{

        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({'error':'Please provide all the details'});
        }
        const user : User | null = await prisma.user.findUnique({
            where : {
                email
            }
        });
        if(!user){
            throw new Error('User not found');
        }
        const decodedPassword = bcrypt.compare(password, user.password);
        if(!decodedPassword){
            return res.status(401).json({'error':'Invalid credentials'});
        }
        getCookie(user, res);
        
    }catch(error){
        console.log(error);
    }
}

export const logout = async(req : Request, res : Response) => {
    try{
        res.clearCookie('token');
        res.status(200).json({'msg':'Logged out successfully'});
    }catch(error){
        console.log(error);
    }
}