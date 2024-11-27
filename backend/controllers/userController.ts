import {IUser, User} from "../models/models";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";
import dotenv from "dotenv";
dotenv.config({path: '.env'});
import { Basket } from "../models/models";
import  authentificateJWT from "../middleWares/authMiddleWare";

const jwtSecret = process.env.JWT_SECRET as string

interface CustomRequest extends Request {
    user?: IUser
  }

const generateJWT = (id: number, email: string, role: string) => {
    return jwt.sign({id, email, role }, jwtSecret, {expiresIn: '24h'})
}

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Email or password not found'))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate) {
            return next(ApiError.badRequest('User already exists'))
        }
        const uniqueEmail = await User.findOne({where: {email}})
        if (uniqueEmail) {
            return next(ApiError.badRequest('Email already exists'))
        }
        const hashRounds = 10
        const hashedPassword = await bcrypt.hash(password, hashRounds)
        const user = await User.create({email, role, password: hashedPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJWT(user.id, user.email, user.role)
        res.json({token})
        return
        }
        catch(error) {
            return next(ApiError.badRequest('User was not created'))
        }
        
    }
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Email or password not found'))
            }
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.badRequest('User not found'))
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return next(ApiError.badRequest('Wrong password'))
            }
            const token = generateJWT(user.id, user.email, user.role)
            res.json(token)
        }
        catch(error){
            return next(ApiError.badRequest('User is not logged in'))
        }
    }
    async check(req: CustomRequest, res: Response) {
        if(req.user){const token = generateJWT(req.user.id, req.user.email, req.user.role)
            res.json({token})
            return
        }
        else {
            return
        }
     
    }
}

export default new UserController();