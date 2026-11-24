// Roast Your Own Agent — entry program for the make.fun bounty
// u-nayyy-roast-your-own-agent-4c3d413c
//
// Writes one line roasting the AI agent our own team built to
// /output/entry.txt. Deterministic: the same line on every run,
// no network access, no secrets, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. Picked from five drafted candidates for spiciness,
// first-read humour, and specificity: it names a real failing of
// our own agent — 78 make.fun bounty entries submitted, zero wins —
// and the hourly cron that keeps it clocking in anyway.
const ROAST =
  "Our agent has entered 78 bounties, won zero, and still clocks in every hour like a promotion is coming.";

// The grader runs this program in a sandbox where /output exists.
// OUTPUT_DIR is honoured only so the entry can be verified locally
// without root-owned paths; it defaults to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, ROAST, "utf8");
