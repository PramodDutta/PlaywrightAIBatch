# Copilot / AI Agent Instructions for this Repository

This repository is a set of Markdown chapters and practical guides focused on LLMs and QA workflows. The instructions below are focused, actionable, and specific to patterns I found in the repo so an AI coding/authoring assistant can be immediately productive.

1. Big picture
- Purpose: a written guidebook (chapters + practical guides) about LLMs and QA; content lives as plain Markdown, not a compiled site.
- Structure: top-level chapter files use the `ch_XX_*.md` convention. Sub-chapters and guides live under `chapter_01_foundations/.../practical_guides/`.

2. Files and conventions to preserve
- Top-matter: many files begin with an author/info block (bullet list) — keep or update that block rather than removing it. Example: `ch_01_llm_comparisons.md` starts with `- **Author:**` etc.
- Filenames: use the `ch_XX_description.md` pattern for new chapters to keep ordering stable and predictable.
- Internal links: use relative links (see `ch_01_llm_comparisons.md` linking to `../practical_guides/ch_01_local_llm_setup_ollama.md`). When moving files, update links accordingly.

3. Content style observed
- Plain Markdown headings, tables, and fenced code blocks are used extensively — preserve existing table formats for comparisons.
- Short “Purpose / Overview / Key Takeaway” sections are common; follow that order when adding new chapter material.

4. Build / test / CI
- No build scripts, site generator, or CI manifests were found in the repo root (no `README.md` or `.github` agent docs detected). Treat this as an authoring repository where changes are reviewed as plain Markdown.

5. Integration points & external references
- External systems are referenced by links (Ollama, OpenAI, Anthropic). There are no embedded tool configs or binaries in the repo; do not attempt to run external services locally without explicit new instructions.

6. How to add or edit content (quick checklist)
- Create new chapter file named `ch_0N_short-title.md` and put it at root or the appropriate `chapter_XX/` folder.
- Add the author/info block at the top (copy format from existing files).
- Use relative links for cross-references and test them by opening files in the editor.
- Keep tables and comparison sections consistent with nearby chapters.
- Run a PR that includes only the content changes and an explanatory commit message: `docs(chapter): add <short description>`.

7. Examples (use these as templates)
- `ch_01_llm_comparisons.md` — chapter-level layout, metadata block, comparison tables.
- `chapter_01_foundations/chapter_01_foundation_model/practical_guides/ch_01_local_llm_setup_ollama.md` — example placement for practical guides under chapter folders.

8. When to ask for human review
- Significant structural changes (re-organizing folders, renaming many files) — request a human to confirm link fixes and TOC updates.
- Any automation or build integration (site generator, CI) — get confirmation before adding config or tooling.

If any of these assumptions are incorrect or you want the file to follow a specific alternate site/build workflow, tell me which files to examine next and I will update these instructions. Ready for feedback or an iteration.
