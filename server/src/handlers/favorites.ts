import { User } from '@prisma/client';
import {prisma} from '../../prisma/index';
import {Request, Response} from 'express';

export const favorite = async(req : Request, res : Response) => {
    const userId = req.user.id;
    const {anime_id} = req.body;

    if(!anime_id || (typeof anime_id !== 'string')){
        return res.status(400).json({'error':'Please provide a valid anime id'});
    }

    try{    
        const user : User | null = await prisma.user.update({
            where : {
                id : userId
            },
            data : {
                favorites : {
                    push : anime_id
                }
            }
        });
        if(!user){
            return res.status(404).json({'error':'User not found'});
        }
        res.status(200).json(user.favorites);
    }catch(error){
        console.log(error);
    }
}

export const unfavorite = async(req : Request, res : Response) => {
    const userId = req.user.id;
    const {anime_id} = req.body;

    if(!anime_id || (typeof anime_id !== 'string')){
        return res.status(400).json({'error':'Please provide a valid anime id'});
    }

    try{    
        const user : User | null = await prisma.user.update({
            where : {
                id : userId
            },
            data : {
                favorites : {
                    set : req.user.favorites.filter((id : string) => id !== anime_id)
                }
            }
        });
        if(!user){
            return res.status(404).json({'error':'User not found'});
        }
        res.status(200).json(user.favorites);
    }catch(error){
        console.log(error);
    }
}