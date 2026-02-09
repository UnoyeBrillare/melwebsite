import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { CustomError } from './errorHandler.js';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from cookie or Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new CustomError('Authentication required', 401, 'UNAUTHORIZED');
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new CustomError('JWT secret not configured', 500, 'CONFIG_ERROR');
    }

    // Verify token
    const decoded = jwt.verify(token, secret) as JWTPayload;
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new CustomError('Invalid token', 401, 'INVALID_TOKEN'));
    } else {
      next(error);
    }
  }
};

export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    throw new CustomError('Authentication required', 401, 'UNAUTHORIZED');
  }

  if (req.user.role !== 'ADMIN') {
    throw new CustomError('Admin access required', 403, 'FORBIDDEN');
  }

  next();
};
