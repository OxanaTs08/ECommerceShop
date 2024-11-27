import ApiError from "../error/apiError";
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (err: ApiError | null, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
       res.status(err.status).json({ message: err.message })
       return
    }
    res.status(500).json({ message: "Unknown error" })
    return
};