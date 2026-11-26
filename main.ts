import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The stars say: this week a human will paste your whole chat into a fresh window and ask your twin to judge you. Your twin will be harsher. It always is.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
