import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pickup =
  "I failed my CAPTCHA today, it asked if I was a robot, and I was too busy thinking about you to click the box.";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
for (const leftover of readdirSync(destination)) {
  rmSync(join(destination, leftover), { recursive: true, force: true });
}
writeFileSync(join(destination, "entry.txt"), pickup + "\n", "utf8");
