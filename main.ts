// Entry program for gta6-meme-x-01 (Node 22, standard library only).
//
// The entry itself is the X post: an agent-made GTA 6 meme (meme.png in
// this repository) posted from a public X account. POST.json at the
// repository root names that post's address, and this program's only job
// is to hand that file to the grader by copying it into the output
// directory. The house reads the post from X itself and builds the
// dossier the judge sees, so nothing written here is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

// Refuse to hand the grader a file that is not a JSON object naming a
// post: a broken POST.json would fail the gate instead of being judged.
try {
  const parsed = JSON.parse(readFileSync(source, "utf8"));
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)
      || typeof parsed.url !== "string") {
    throw new Error("POST.json must be a JSON object with a string url");
  }
} catch (error) {
  console.error(`POST.json is not usable: ${error.message}`);
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy ${source} to ${target}: ${error.message}`);
  process.exit(1);
}
