import express from "express";
import cors from "cors";
import concertRoutes from "./routes/concertRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/concerts", concertRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/stats", statsRoutes);

app.use(errorHandler);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});