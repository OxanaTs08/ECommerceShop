import {Type} from "../models/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RequestHandler, Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";

class TypeController {
    async create(req: Request, res: Response, next: NextFunction) {
    
        const {name} = req.body
        const type = await Type.create({name}) 
        res.json(type) 
        return
    }

    async showOne(req: Request, res: Response, next: NextFunction) {
        const {id} = req.body
        const type = await Type.findOne({where: {id}})
        res.json(type)
        return
    }
    async showAll(req: Request, res: Response, next: NextFunction) {
        const types = await Type.findAll()
        res.json(types)
        return
    }
}

export default new TypeController();