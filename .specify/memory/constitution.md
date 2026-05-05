<!-- Sync Impact Report:
  Version change: N/A → 1.0.0 (initial ratification)
  Modified principles: N/A (initial creation)
  Added sections: Core Principles (Static-First, GitHub Pages Native, Simplicity),
                  Deployment, Development Workflow, Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md: ✅ updated (Constitution Check gates aligned)
    - .specify/templates/spec-template.md: ✅ no changes needed (generic, constitution-agnostic)
    - .specify/templates/tasks-template.md: ✅ no changes needed (tests already optional)
  Follow-up TODOs: None
-->

# pcosel.github.io Constitution

## Core Principles

### I. Static-First

All content is pre-rendered as static files (HTML, CSS, JS, assets). No server-side
rendering, no runtime database queries, no dynamic request handling. Every page must be
fully buildable offline into static output.

**Rationale**: GitHub Pages serves only static content. Static sites are faster, cheaper,
more secure, and simpler to maintain.

### II. GitHub Pages Native

Deployment targets GitHub Pages exclusively. The project structure, build process, and
output directory must align with GitHub Pages conventions. If using a static site generator,
the build output must go to the expected directory.

**Rationale**: The repository name `pcosel.github.io` indicates a GitHub Pages user site.
The entire workflow is optimized for this platform.

### III. Simplicity

Start simple and stay simple. No build step unless absolutely necessary. No framework
unless it provides clear value over vanilla HTML/CSS/JS. Every dependency MUST have a
justified purpose. YAGNI applies strictly.

**Rationale**: Static sites should leverage their inherent simplicity. Added complexity
without proportional benefit is a net loss.

## Deployment

**Primary**: GitHub Pages (built-in, via `main` branch or GitHub Actions)
**Output**: Static files only
**CI/CD**: Minimal — GitHub Pages handles deployment automatically
**Tests**: Not required for this project

## Development Workflow

**Content changes**: Direct Markdown/HTML edits, committed to `main`
**Structural changes**: Brief note if affecting site architecture
**No PR requirements**: Direct commits to `main` are acceptable

## Governance

This constitution supersedes all other development practices for this project. Amendments require:

1. Documentation of the change and rationale
2. Version increment per semantic versioning policy below

**Versioning Policy**:
- MAJOR: Backward-incompatible governance changes or principle removals
- MINOR: New principles added or materially expanded guidance
- PATCH: Clarifications, wording fixes, non-semantic refinements

**Compliance**: All changes MUST produce valid static output deployable to GitHub Pages.
Complexity additions MUST be justified against Principle III (Simplicity).

**Version**: 1.0.0 | **Ratified**: 2026-05-05 | **Last Amended**: 2026-05-05
