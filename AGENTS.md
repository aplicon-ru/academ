<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Хендоффа дизайнера пока нет

В отличие от `aplicon-ru/aplicon-ru.github.io`, для Академии ещё не пришёл
хендофф дизайнера — нет `design-ref/`. Палитра в `src/styles/tokens.css`
(`#1E252D` фон, `#3ECFB0` акцент) взята из `backlog/univerkon-architecture.md`
(снята приблизительно со скриншотов существующих макетов, не пипеткой) —
это временное приближение, не финальный дизайн-код.

Когда хендофф появится: положить архив как пришёл в `InBox/`, распаковать в
`design-ref/` (README + tokens.css + prototype), актуализировать
`src/styles/tokens.css` из него, и уже тогда верстать реальные страницы —
см. `aplicon-ru/aplicon-ru.github.io/AGENTS.md` за примером процесса.

# Контент — через `content/*.json`

Тот же принцип, что и у остальных сайтов экосистемы: тексты не пишутся
литералами в `.tsx`, импортируются из `content/`.
