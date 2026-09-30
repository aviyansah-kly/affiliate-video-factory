import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
if (!dir) throw new Error("Usage: node src/lint.mjs <productDir>");

const product = JSON.parse(fs.readFileSync(path.join(dir, "product.json"), "utf8"));
const script = JSON.parse(fs.readFileSync(path.join(dir, "script.json"), "utf8"));
const plan = JSON.parse(fs.readFileSync(path.join(dir, "beats.json"), "utf8"));

const errors = [];
const warnings = [];
const beats = plan.beats || [];
const textBody = (script.scenes || []).map(function (s) { return s.text; }).join(" ");
const lower = textBody.toLowerCase();

if (!textBody.trim()) errors.push("script is empty");
if (!beats.length) errors.push("beat plan is empty");

for (let i = 0; i < beats.length; i++) {
  const b = beats[i];
  if (!b.job) errors.push(b.id + ": missing job");
  if (!b.hero) errors.push(b.id + ": missing hero");
  if (!b.framing) errors.push(b.id + ": missing framing");
  if (!b.register) errors.push(b.id + ": missing register");
  if (!b.zones) errors.push(b.id + ": missing zones");

  if (i > 0 && beats[i - 1].framing === b.framing) {
    errors.push(b.id + ": same framing as previous beat (" + b.framing + ")");
  }

  if (product.mode === "zero-budget" && b.register === "photoreal-generated") {
    errors.push(b.id + ": generated photoreal footage is forbidden in zero-budget mode");
  }

  if (b.fromCue && !lower.includes(String(b.fromCue).toLowerCase())) {
    errors.push(b.id + ": fromCue not found in script: " + b.fromCue);
  }

  if (b.toCue && b.toCue !== "end" && !lower.includes(String(b.toCue).toLowerCase())) {
    errors.push(b.id + ": toCue not found in script: " + b.toCue);
  }
}

for (const claim of product.claims || []) {
  if (!claim.source) errors.push("claim has no provenance: " + claim.label);
  if (claim.status === "unverified") warnings.push("listing-only/unverified claim: " + claim.label);
}

if (!script.cta || !script.cta.trim()) errors.push("one CTA is required");

console.log("Affiliate Video Factory lint:", product.id);
warnings.forEach(function (w) { console.warn("WARN", w); });
errors.forEach(function (e) { console.error("FAIL", e); });

if (errors.length) process.exit(1);
console.log("PASS", beats.length, "beats checked");
