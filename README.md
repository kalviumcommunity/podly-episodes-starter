# Podly — Episodes Module (Starter)

Starter scaffold for the practical-exam task "Podly API: Build a Mongoose Module".
You build the **Episode** module in the same shape as the finished **Show** reference model.

## Stack
Node (ESM) · Express 4 · Mongoose 8 · MongoDB (Atlas or local)

## Setup
```bash
npm install
cp .env.example .env     # then edit MONGO_URI (Atlas or local)
npm run dev              # starts on http://localhost:3000
```
Health check: `GET http://localhost:3000/health` → `{ "ok": true }`

## What you implement
| File | Do |
|---|---|
| `src/models/episode.model.js` | Build the `Episode` schema + validators, export as `"Episode"` |
| `src/controllers/episode.controller.js` | `createEpisode` (201), `getEpisode` (200/404), `deleteEpisode` (204/404), `topEpisodes` (aggregation → 200) |
| `src/middleware/errorHandler.js` | `ValidationError` → 400, `CastError` → 400, `11000` → 409, 500 fallback |

**Do NOT edit:** `src/server.js`, `src/db.js`, `src/models/show.model.js`, `src/routes/episode.routes.js`.

## Routes
| Method | Path | Success |
|---|---|---|
| POST | `/episodes` | 201 |
| GET | `/episodes/:id` | 200 / 404 |
| DELETE | `/episodes/:id` | 204 / 404 |
| GET | `/shows/:id/top-episodes` | 200 |

## Verify with curl
```bash
# 400 — ValidationError (empty body)
curl -i -X POST localhost:3000/episodes -H "Content-Type: application/json" -d '{}'

# 201 — valid create (use a real Show _id for showId)
curl -i -X POST localhost:3000/episodes -H "Content-Type: application/json" \
  -d '{"title":"Pilot","showId":"PUT_A_REAL_SHOW_ID","slug":"pilot"}'

# 409 — duplicate slug (run the same create twice)
# 400 — CastError (bad id)
curl -i localhost:3000/episodes/not-an-id

# 200 — top episodes for a show
curl -i localhost:3000/shows/PUT_A_REAL_SHOW_ID/top-episodes
```

## Submit
A ZIP of this project **without** `node_modules/` and **without** `.env`, including a
`screenshots/` folder (or a PDF) showing the **201 / 404 / 400 / 409 / 200** responses.
