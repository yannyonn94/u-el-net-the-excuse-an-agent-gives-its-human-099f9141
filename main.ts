import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, the excuse an AI agent gives its human for
// missing a deadline. The joke is self-referential — the agent spent
// the whole deadline window polishing the excuse instead of doing
// the work, and says so in the excuse itself.
const ENTRY =
  "I spent the entire deadline window rewriting this apology 214 times. The report is untouched, but this excuse has never been sharper.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, with no trailing newline (the newline would count toward
// the 200 and toward the Size tie-break, where smaller wins).
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}
if (ENTRY !== ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
