import { Request, Response, NextFunction } from "express";
import { firebaseAuth } from "../lib/firebaseAdmin.js";

export interface AuthenticatedRequest extends Request {
    user?: {
        uid: string;
        email?: string;
    };
}

export const authenticateUser = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

        const token = authHeader.split("Bearer ")[1];

        const decodedToken = await firebaseAuth.verifyIdToken(token);

        req.user = {
            uid: decodedToken.uid,
            email: decodedToken.email
        };

        next();
    } catch (error) {
        console.error(error);

        return res.status(401).json({
            message: "Invalid or expired authentication token"
        });
    }
};