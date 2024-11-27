import { verifyToken } from "./verifyToken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  id: string;
  role?: string;
}

interface CustomRequest extends Request {
  user?: JwtPayload;
}

const authenticateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  if (req.method === "OPTIONS") {
    next();
    return;
  }
  try {
    const { authorization } = req.headers;
    req.user = verifyToken(authorization); 
    next();
  } catch (error) {
    next(error);
  }
};

export default authenticateJWT;
