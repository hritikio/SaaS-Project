import { Router } from "express";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/dashboard", authMiddleware, (req: any, res) => {
  res.json({ message: "Welcome to dashboard", user: req.user });
});

export default router;
