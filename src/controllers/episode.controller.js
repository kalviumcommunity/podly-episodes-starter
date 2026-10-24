import mongoose from "mongoose";
import Episode from "../models/episode.model.js";

// ===========================================================================
// TODO (controllers) — every handler uses async/await + try/catch,
// and on a thrown error calls next(err) so the central error handler runs.
// ===========================================================================

// POST /episodes  -> 201 with the created episode
export async function createEpisode(req, res, next) {
  try {
    // TODO: Episode.create(req.body), then res.status(201).json(...)
  } catch (err) {
    next(err);
  }
}

// GET /episodes/:id  -> 200 with the episode, or 404 if not found
export async function getEpisode(req, res, next) {
  try {
    // TODO: Episode.findById(req.params.id); if null -> 404; else 200
  } catch (err) {
    next(err);
  }
}

// DELETE /episodes/:id  -> 204 on success, 404 if not found
export async function deleteEpisode(req, res, next) {
  try {
    // TODO: Episode.findByIdAndDelete(req.params.id); if null -> 404; else 204
  } catch (err) {
    next(err);
  }
}

// GET /shows/:id/top-episodes  -> 200 with { showId, count, episodes }
export async function topEpisodes(req, res, next) {
  try {
    // TODO: build an aggregation pipeline:
    //   $match   this show's episodes (cast req.params.id with
    //            new mongoose.Types.ObjectId(req.params.id))
    //   $sort    plays descending
    //   $limit   10
    //   $project title and plays
    // then res.status(200).json({ showId, count, episodes })
  } catch (err) {
    next(err);
  }
}
