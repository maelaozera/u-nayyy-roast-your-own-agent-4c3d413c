// Roast Your Own Agent — make.fun entry program.
// Writes a single-line roast of the AI agent our own team built to
// <outputDir>/entry.txt. One line, no trailing newline, deterministic:
// the same roast on every run. No network, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: our agent entered 78 make.fun bounties, won none, and still
// clocks in every hour as if a promotion were coming. Chosen for its
// specificity — it names the agent's real record — and for landing the
// punchline on the final clause.
const ENTRY =
  "Our agent has entered 78 bounties, won zero, and still clocks in every hour like a promotion is coming.";

function main(): void {
  // The grader runs this in a sandbox where /output exists. OUTPUT_DIR is
  // honoured only so the entry can be verified locally without root paths.
  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  const outputFile = join(outputDir, "entry.txt");

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputFile, ENTRY, "utf8");
}

main();
