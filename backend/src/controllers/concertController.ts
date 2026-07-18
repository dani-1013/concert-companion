import { Request, Response } from "express";
import { concerts } from "../data/concertData.js";

export const getConcerts = (req: Request, res: Response) => {
    res.json(concerts);
};

export const createConcert = (req: Request, res: Response) => {
    const newConcert = {
        id: concerts.length + 1,
        artist: req.body.artist,
        venue: req.body.venue,
        date: req.body.date
    };

    concerts.push(newConcert);

    res.status(201).json(newConcert);
};