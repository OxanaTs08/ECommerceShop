import { verifyToken } from "./verifyToken";
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";

interface JwtPayload {
    id: string;
    role?: string;
}

interface CustomRequest extends Request {
    user?: JwtPayload;
}

export const checkRoleMiddleware = (requiredRole: string) => {
  return (req: CustomRequest, res: Response, next: NextFunction): void => {
    if (req.method === "OPTIONS") {
      next();
      return;
    }

    try {
      const { authorization } = req.headers;
      const decodedToken = verifyToken(authorization); 

      if (decodedToken.role !== requiredRole) {
        throw ApiError.forbidden("Insufficient permissions");
      }

      req.user = decodedToken;
      next();
    } catch (error) {
      next(error);
    }
  };
};
