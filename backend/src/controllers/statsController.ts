import { Response } from "express";
import { prisma } from "../lib/prisma.js";
import { AuthenticatedRequest } from "../middleware/authMiddleware.js";

export const getStats = async (
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
        });

        const totalConcerts = concerts.length;

        const artists = new Set(
            concerts.map((concert) => concert.artist)
        );

        const venues = new Set(
            concerts.map((concert) => concert.venue)
        );

        const cities = new Set(
            concerts.map((concert) => concert.city)
        );

        const artistCounts: Record<string, number> = {};

        for (const concert of concerts) {
            artistCounts[concert.artist] =
                (artistCounts[concert.artist] || 0) + 1;
        }

        const favoriteArtist =
            Object.entries(artistCounts)
                .sort((a, b) => b[1] - a[1])[0] ?? null;

        const ratings = concerts.flatMap((concert) =>
            concert.reviews.map((review) => review.rating)
        );

        const averageRating =
            ratings.length > 0
                ? ratings.reduce((sum, rating) => sum + rating, 0) /
                  ratings.length
                : 0;

        res.json({
            totalConcerts,
            totalArtists: artists.size,
            totalVenues: venues.size,
            totalCities: cities.size,
            favoriteArtist: favoriteArtist
                ? {
                    name: favoriteArtist[0],
                    concerts: favoriteArtist[1],
                }
                : null,
            averageRating: Number(averageRating.toFixed(2)),
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};