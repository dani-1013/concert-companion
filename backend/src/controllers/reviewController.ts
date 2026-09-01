import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/authMiddleware.js";

export const getReviews = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;
        const concertId = req.params.concertId as string;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const reviews = await prisma.review.findMany({
            where: {
                concertId,
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        res.json(reviews);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const createReview = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;
        const concertId = req.params.concertId as string;
        const { rating, comment } = req.body;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        if (!rating || rating < 1 || rating > 5) {
            return res.status(400).json({
                message: "Rating must be between 1 and 5",
            });
        }

        const concert = await prisma.concert.findFirst({
            where: {
                id: concertId,
                userId,
            },
        });

        if (!concert) {
            return res.status(404).json({
                message: "Concert not found",
            });
        }

        const review = await prisma.review.create({
            data: {
                rating,
                comment,
                userId,
                concertId,
            },
        });

        res.status(201).json(review);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const deleteReview = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;
        const id = req.params.id as string;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const review = await prisma.review.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        await prisma.review.delete({
            where: {
                id,
            },
        });

        res.json({
            message: "Review deleted successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};