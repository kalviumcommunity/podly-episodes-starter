// ===========================================================================
// TODO (central error handler) — Express error middleware has FOUR args.
//
// Handle, in order:
//   err.name === "ValidationError" -> 400, build a { field: message } map
//                                     from err.errors
//   err.name === "CastError"       -> 400, "Invalid ID format" + err.path
//   err.code === 11000             -> 409, name the clashing field from
//                                     err.keyValue
//   anything else                  -> 500 fallback
// ===========================================================================
export function errorHandler(err, req, res, next) {
  // TODO: implement the four branches above
  res.status(500).json({ error: "Internal Server Error" });
}
