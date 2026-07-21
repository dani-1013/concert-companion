import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const getConcerts = async (req: Request, res: Response) => {
    try {
        const concerts = await prisma.concert.findMany();

        res.json(concerts);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const createConcert = async (req: Request, res: Response) => {
    try {
        const { artist, venue, city, date, userId } = req.body;

        if (!artist || !venue || !city || !date || !userId) {
            return res.status(400).json({
                message: "Artist, venue, city, date, and userId are required"
            });
        }

        const newConcert = await prisma.concert.create({
            data: {
                artist,
                venue,
                city,
                date: new Date(date),
                userId
            }
        });

        res.status(201).json(newConcert);

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};