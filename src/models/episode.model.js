import mongoose from "mongoose";

// ===========================================================================
// TODO (Episode model) — build this in the same style as show.model.js.
//
// Fields required by the brief:
//   title   String, required (with a message), trim, maxlength 120
//   showId  ObjectId, ref "Show", required
//   slug    String, required, unique, lowercase
//   plays   Number, default 0, min 0
//   status  String, enum "draft" | "published", default "draft"
//
// Also: { timestamps: true }, and export the model compiled as "Episode".
// ===========================================================================

const episodeSchema = new mongoose.Schema(
  {
    // TODO: add the fields above
  },
  { timestamps: true }
);

// TODO: export mongoose.model("Episode", episodeSchema)
export default mongoose.model("Episode", episodeSchema);
