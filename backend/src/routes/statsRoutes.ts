import { Router } from "express";
import { getStats } from "../controllers/statsController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticateUser, getStats);

export default router;