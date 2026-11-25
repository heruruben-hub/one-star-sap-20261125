// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star review from a houseplant about its
// human owner to /output/entry.txt.
//
// The line: a fern reviews the human who repotted it into a coffee mug
// with no drainage and waters it with ice cubes. The grievance is
// specific and plant-eyed (pot, drainage, water, repotting), the reason
// for the single star is plain (it is drowning), and the punchline turns
// the plant into a cocktail garnish — the human treats it like a drink,
// not a living thing.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "One star: he repotted me into a mug with no drainage, waters me with ice cubes like I'm a cocktail, and blames me for drowning — I'm a fern, not a happy-hour garnish.";

// Gate self-check (RULES.txt): /output/entry.txt must be UTF-8 text of
// 1 to 279 characters, not only white space, a single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 279) {
  throw new Error(`entry is ${chars} characters, must be 1-279`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`Wrote ${chars} characters to ${outPath}`);
