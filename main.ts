// One Star for Monday — make.fun program/v1 entry.
// Writes a one-star review of Monday, as if Monday were a restaurant,
// to /output/entry.txt. Deterministic: fixed text, no network, no clock,
// no randomness. The grader runs the program twice; both runs write the
// same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. Monday sat me by the door, served cold coffee, then billed me for the whole week. Will not be back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
