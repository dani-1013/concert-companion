import { Router } from "express";

import {
    getReviews,
    createReview,
    deleteReview,
} from "../controllers/reviewController.js";

import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.get(
    "/concert/:concertId",
    authenticateUser,
    getReviews
);

router.post(
    "/concert/:concertId",
    authenticateUser,
    createReview
);

router.delete(
    "/:id",
    authenticateUser,
    deleteReview
);

export default router;