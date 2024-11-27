import {Brand} from "../models/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RequestHandler, Request, Response, NextFunction } from "express";

class BrandController {
    async create(req: Request, res: Response, next: NextFunction) {
        const {name} = req.body
        const type = await Brand.create({name}) 
        res.json(type) 
        return
    }

    async showOne(req: Request, res: Response, next: NextFunction) {
        const {id} = req.body
        const brand = await Brand.findOne({where: {id}})
        res.json(brand)
        return
    }
    async showAll(req: Request, res: Response, next: NextFunction) {
        const brandes = await Brand.findAll()
        res.json(brandes)
        return
    }
}

export default new BrandController();