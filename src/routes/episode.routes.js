import { Router } from "express";
import {
  createEpisode,
  getEpisode,
  deleteEpisode,
  topEpisodes,
} from "../controllers/episode.controller.js";

// Routes are wired for you — they call the controller functions you implement.
const router = Router();

router.post("/episodes", createEpisode);
router.get("/episodes/:id", getEpisode);
router.delete("/episodes/:id", deleteEpisode);
router.get("/shows/:id/top-episodes", topEpisodes);

export default router;
