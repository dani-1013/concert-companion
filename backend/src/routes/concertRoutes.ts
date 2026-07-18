import { Router } from "express";
import { getConcerts, createConcert } from "../controllers/concertController.js";

const router = Router();

router.get("/", getConcerts);
router.post("/", createConcert);

export default router;