import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";
import episodeRoutes from "./routes/episode.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

// Episode + top-episodes routes live here.
app.use("/", episodeRoutes);

// Central error handler must be registered LAST, after all routes.
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Podly API listening on :${PORT}`)))
  .catch((err) => {
    console.error("Failed to start:", err.message);
    process.exit(1);
  });
