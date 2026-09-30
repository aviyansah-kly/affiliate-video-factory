# Affiliate Video Factory

Programmatic affiliate-video pipeline built around **HyperFrames + Hyperframe Pro discipline**.

The goal is not to generate every pixel with AI. We spend generation budget only on moments that need photoreal emotion; type, product cards, comparisons, screenshots, counters, transitions, and layout stay deterministic code.

## V0 — zero-budget validation

- Benchmark product: BASIKE handheld vacuum
- Render: HTML/GSAP → HyperFrames → MP4
- Paid AI footage: **off**
- Paid TTS: **off**
- QA: lint → check → render → contact sheet

## Production loop

```
product → script → beat plan → register check → generator → lint → check → render → contact-sheet QA
```

## Setup

Requirements: Node.js 22+, FFmpeg/ffprobe, Git.

Install/update the official HyperFrames core skills:

```bash
npx hyperframes skills update
```

For Claude Code, install Hyperframe Pro from its official marketplace:

```bash
claude plugin marketplace add buildwithhanif/hyperframe-pro
claude plugin install hyperframe-pro@hyperframe-pro
```

This repo does not vendor either upstream project. It stores our affiliate-specific data, scripts, beat plans, visual language, generators, and QA rules.

## Principles

1. Hook complete inside the first two seconds.
2. One hero visual per beat.
3. Never use the same framing twice in a row.
4. Photoreal only when the beat needs a real-life feeling.
5. Product/spec/UI facts use real assets, not invented AI imagery.
6. Every claim needs provenance.
7. Paid generation is reserved for winning concepts.
8. Never call a video done until the contact sheet has been reviewed.

Upstream:
- HyperFrames: https://github.com/heygen-com/hyperframes
- Hyperframe Pro: https://github.com/buildwithhanif/hyperframe-pro
