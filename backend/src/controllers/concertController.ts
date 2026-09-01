import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/authMiddleware.js";

export const getConcerts = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const concerts = await prisma.concert.findMany({
            where: {
                userId,
            },
            include: {
                reviews: true,
            },
            orderBy: {
                date: "desc",
            },
        });

        res.json(concerts);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const createConcert = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;
        const email = req.user?.email;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const { artist, venue, city, date } = req.body;

        if (!artist || !venue || !city || !date) {
            return res.status(400).json({
                message: "Artist, venue, city, and date are required",
            });
        }

        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({
                message: "Invalid date",
            });
        }

        await prisma.user.upsert({
            where: {
                id: userId,
            },
            update: {},
            create: {
                id: userId,
                email: email ?? `${userId}@firebase.local`,
            },
        });

        const concert = await prisma.concert.create({
            data: {
                artist,
                venue,
                city,
                date: parsedDate,
                userId,
            },
        });

        res.status(201).json(concert);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const updateConcert = async (
    req: AuthenticatedRequest,
    res: Response
) => {
    try {
        const userId = req.user?.uid;
        const id = req.params.id as string;
        const { artist, venue, city, date } = req.body;

        if (!userId) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }

        const concert = await prisma.concert.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!concert) {
            return res.status(404).json({
                message: "Concert not found",
            });
        }

        const updatedConcert = await prisma.concert.update({
            where: {
                id,
            },
            data: {
                artist,
                venue,
                city,
                date: new Date(date),
            },
        });

        res.json(updatedConcert);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const deleteConcert = async (
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

        const concert = await prisma.concert.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!concert) {
            return res.status(404).json({
                message: "Concert not found",
            });
        }

        await prisma.concert.delete({
            where: {
                id,
            },
        });

        res.json({
            message: "Concert deleted successfully",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};