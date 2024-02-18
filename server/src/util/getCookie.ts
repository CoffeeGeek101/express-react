import { User } from "@prisma/client";
import { getToken } from "./getToken";
import {Response} from 'express';

export const getCookie = (user: User, res : Response) => {
    const token = getToken(user.id);
    const options = {
        expires : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly : true,
    }
    res.cookie('token', token, options).json({isAuthenticated : true});
}