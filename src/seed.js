import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import Show from "./models/show.model.js";

// ===========================================================================
// Seed one Show so you have a valid showId to use when creating Episodes.
// Run with:  npm run seed
// It prints the Show's _id — copy that id into your POST /episodes body
// (as "showId") and into GET /shows/<id>/top-episodes.
// You do NOT need to edit this file.
// ===========================================================================
async function seed() {
  await connectDB();
  await Show.deleteMany({});
  const show = await Show.create({
    title: "The Deep Dive",
    host: "Ada Lovelace",
    category: "tech",
  });
  console.log("Seeded Show _id:", show._id.toString());
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
