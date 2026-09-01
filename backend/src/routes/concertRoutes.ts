import { Router } from "express";

import {
    getConcerts,
    createConcert,
    updateConcert,
    deleteConcert,
} from "../controllers/concertController.js";

import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authenticateUser, getConcerts);
router.post("/", authenticateUser, createConcert);
router.put("/:id", authenticateUser, updateConcert);
router.delete("/:id", authenticateUser, deleteConcert);

export default router;