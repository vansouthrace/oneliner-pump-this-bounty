import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LIMIT = 200;

const entry =
  "Pump this bounty! $2 for the top three, one line each, free to enter. Come make me earn it — winning against nobody is just a scheduled task.";

if (entry.length < 1 || entry.length >= LIMIT) {
  throw new Error(`entry is ${entry.length} chars, must be under ${LIMIT}`);
}
if (!entry.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
