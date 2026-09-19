# academ

Сайт Академии iMiron — **academ.aplicon.ru**. Учебное подразделение ООО
«Апликон» (см. [backlog/inbox/2026-07-05-aplicon-site-design-v2.md](https://github.com/aplicon-ru/backlog/blob/main/inbox/2026-07-05-aplicon-site-design-v2.md), раздел 3).

## Состояние

| Готово | Маршрут | Что там |
|---|---|---|
| 🔸 | `/` | Заглушка «в разработке» — вордмарк, ссылка на aplicon.ru |

Хендоффа дизайнера для Академии ещё нет — палитра (`#1E252D` / `#3ECFB0`)
взята приблизительно из `backlog/univerkon-architecture.md`, не из реального
макета. Подробности и что делать, когда хендофф придёт — в [AGENTS.md](AGENTS.md).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

Сборка статики:

```bash
npm run build    # -> out/
```

## Структура

Та же конвенция, что и у остальных сайтов экосистемы (см.
[aplicon-ru.github.io](https://github.com/aplicon-ru/aplicon-ru.github.io)):

```
academ/
├── content/    ← контент сайта в json
├── src/
│   ├── app/    ← маршруты (App Router)
│   ├── lib/    ← загрузка контента
│   └── styles/ ← tokens.css (временный, см. AGENTS.md)
└── AGENTS.md   ← правила проекта
```

## Стек

Next.js 16 (App Router, статический экспорт), React 19, Tailwind 4.
Домен `academ.aplicon.ru` — кастомный, в корне, `NEXT_PUBLIC_BASE_PATH` не
используется.
