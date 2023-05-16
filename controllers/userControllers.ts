
import { Request, Response } from 'express';
import User from '../models/User';
export const getUsers = async (req: Request, res: Response) => {

    const users = await User.findAll();

    return res.json({
        msg: 'get users',
        users
    });

}

export const getUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    return res.json({
        msg: 'get user',
        id
    });

}

export const postUser = async (req: Request, res: Response) => {
    
    const { body } = req;

    const user = await User.create(body);

    return res.json({
        msg: 'post user',
        body
    });

}

export const putUser = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }

    await user.update(body);

    return res.json({
        msg: 'put user',
        id,
        body
    });

}

export const deleteUser = async (req: Request, res: Response) => {
        
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: `User with id ${id} not found`
        });
    }

    await user.update({status: 0});

    return res.json({
        msg: 'delete user',
        id
    });

}