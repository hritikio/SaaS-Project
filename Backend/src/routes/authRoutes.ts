import { Router } from "express";
import { signup, login } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

export default router;
