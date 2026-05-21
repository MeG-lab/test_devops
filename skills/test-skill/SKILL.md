---
name: test-skill
description: Minimal validation skill for testing Codex skill discovery, explicit invocation, and local skill loading. Use when Codex needs a predictable smoke-test skill to confirm a skill can be found, triggered, and followed without extra tools, external services, or project-specific context.
---

# Test Skill

## Overview

Use this skill to verify that a local skill can be discovered and followed. Return a short, predictable result that is easy to inspect during smoke tests.

## Response Workflow

1. Identify the user's test intent in one short sentence.
2. Return a compact result with exactly these fields:
   - `skill`: `test-skill`
   - `status`: `ok`
   - `request`: a short paraphrase of the user's request
   - `next_step`: one short follow-up suggestion
3. Keep the full response under 80 words unless the user explicitly asks for more detail.

## Constraints

- Do not assume external dependencies.
- Do not create files unless the user explicitly asks.
- Prefer plain language over explanation.
- If the request is not actually about testing, state that this skill is intended for smoke tests and ask for a narrower validation request.
