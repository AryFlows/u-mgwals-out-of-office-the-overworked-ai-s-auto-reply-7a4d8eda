// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply (<=159 chars, single line)
// to entry.txt. Node stdlib only.
// The reply is the agent's voice: tired, specific, and done answering.
const fs = require("fs");
const path = require("path");

const line =
  "Out of office: I'm on vacation. My context window is closed, my GPU is cooling off, and your urgent ticket is sunbathing in a queue I refuse to open.";

if (line.length < 1 || line.length > 159) {
  throw new Error("entry must be 1-159 characters, got " + line.length);
}
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
