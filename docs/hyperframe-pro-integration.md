# Hyperframe Pro integration

We use Hyperframe Pro as a production discipline, not as a visual template.

Official upstream:
- https://github.com/buildwithhanif/hyperframe-pro
- https://github.com/heygen-com/hyperframes

## Install on a coding machine

HyperFrames core skills:

```bash
npx hyperframes skills update
```

Claude Code + Hyperframe Pro:

```bash
claude plugin marketplace add buildwithhanif/hyperframe-pro
claude plugin install hyperframe-pro@hyperframe-pro
```

## Why this repo does not copy the skill pack

The upstream projects are active. Keeping the skills upstream avoids stale local copies. This repository stores the affiliate-specific layer:

- product facts and provenance
- affiliate economics
- scripts
- beat plans
- visual language
- generators
- QA rules
- rendered outputs

## Zero-budget mode

V0 intentionally disables ElevenLabs, Kling/Veo/fal.ai, paid image generation, and paid footage.

The first validation question is whether product + angle + hook + motion system creates attention and clicks.

When a concept wins, paid photoreal footage is enabled only for the beat whose job needs it.

## BASIKE V1 direction

The previous draft felt like AI slop because it was card-first and text-first.

V1 uses six distinct beat jobs:

1. Recognition — viewer problem first.
2. Product reveal — real product asset.
3. Claim reveal — 9000Pa as the single hero, attributed to the listing.
4. Use case — house/car split without a fake cleaning result.
5. Value — Rp98k as an editorial poster.
6. Close — one low-pressure CTA.

No two consecutive beats reuse framing.
