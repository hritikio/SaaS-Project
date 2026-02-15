import { Request, Response } from "express";
import { authSchema } from "../validators/authValidator";
import { generateToken } from "../middleware/auth";

// In-memory user storage
const users = new Map<string, { password: string; name?: string }>();

export const signup = (req: Request, res: Response) => {
  try {
    const { email, password, name } = authSchema.parse(req.body);

    if (users.has(email)) {
      return res.status(400).json({ error: "User exists" });
    }

    users.set(email, { password, name });
    const token = generateToken(email);

    res.json({ token, user: { email, name } });
  } catch (err: any) {
    res.status(400).json({ error: err.errors?.[0]?.message || "Invalid data" });
  }
};

export const login = (req: Request, res: Response) => {
  try {
    const { email, password } = authSchema.parse(req.body);

    const user = users.get(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(email);

    res.json({ token, user: { email, name: user.name } });
  } catch (err: any) {
    res.status(400).json({ error: err.errors?.[0]?.message || "Invalid data" });
  }
};
