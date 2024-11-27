import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";

const jwtSecret = process.env.JWT_SECRET as string;

interface JwtPayload {
  id: string;
  role?: string;
}

interface CustomRequest extends Request {
  user?: JwtPayload;
}

export const verifyToken = (authorization: string | undefined): JwtPayload => {
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw ApiError.unauthorized("Authorization token missing or malformed");
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    throw ApiError.unauthorized("Token not provided");
  }

  try {
    const decodedToken = jwt.verify(token, jwtSecret) as JwtPayload;
    if (!decodedToken || !decodedToken.id) {
      throw ApiError.unauthorized("Invalid token payload");
    }
    return decodedToken;
  } catch (error) {
    throw ApiError.unauthorized("Invalid or expired token");
  }
};
