import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const SECRET = "secret123";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token" });
  }

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const generateToken = (email: string) => {
  return jwt.sign({ email }, SECRET, { expiresIn: "7d" });
};
