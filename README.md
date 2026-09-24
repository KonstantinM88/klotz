# KLOTZ.mobi — Next.js demo

Статус: **рабочее локальное демо**. Публикация и production-интеграции ещё не выполнялись.

## Локальный запуск

Рекомендуется Node.js 24 LTS; полный набор QA проверяется на 24.21.0. Для Lighthouse необходим Node.js 22.19+ (локальный 22.14 не подходит).

```bash
npm ci --strict-peer-deps
npm run dev
```

Открыть `http://localhost:3000`. Индексация демо заблокирована в коде и HTTP-заголовках: переменная окружения не может случайно её включить. Настройки окружения описаны в `.env.example`.

Сценарий показа и ограничения: [docs/CLIENT_PRESENTATION.md](docs/CLIENT_PRESENTATION.md).

## Проверка

```bash
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run format:check
git diff --check
```

Lighthouse запускается отдельно после build: в одном терминале `npm run start -- --hostname 127.0.0.1 --port 3100`, в другом `npm run test:lighthouse`. Не запускать одновременно с e2e, чтобы не искажать показатели. Отчёты: `.lighthouseci/`, `playwright-report/`, screenshots — `test-results/`; они исключены из Git. Playwright по умолчанию запускает свой production-сервер; для уже запущенного сервера на 3100 установите `KLOTZ_EXTERNAL_SERVER=1`.

Форма — только проверка тестовых данных: серверная валидация без сохранения и отправки в KLOTZ. Байты вложений не загружаются. `DEMO_MODE=false` закрывает endpoint, а не активирует production. База данных, почта, аналитика и внешние виджеты не подключены.

## Что находится в папке

- `MASTER_PROMPT_KLOTZ_DEMO_RU.md` — самостоятельный prompt для реализации клиентского демо KLOTZ.mobi.
- `AGENTS.md` — обязательные правила для AI-агентов и разработчиков, работающих в этом репозитории.
- `docs/STACK_BASELINE.md` — проверенный технологический baseline и политика обновлений.
- `docs/HOMEPAGE_AND_VISUAL_CONCEPT.md` — визуальное направление, wireframe и немецкий стартовый текст главной страницы.
- `docs/CONTENT_SOURCE_REGISTER.md` — подтверждённые исходные данные, legacy-материалы и правила их использования.
- `docs/DECISIONS.md` — журнал уже принятых архитектурных и продуктовых решений.
- `docs/OPEN_QUESTIONS.md` — вопросы, которые необходимо подтвердить у заказчика.
- `docs/PROGRESS.md` — состояние выполнения и формат передачи работы между сессиями.
- `KLOTZ_Kommerzangebot_RU.md` — рабочий черновик коммерческого предложения; он не является техническим заданием на реализацию демо.

## Как продолжать разработку

1. Прочитать `AGENTS.md`, master prompt и журнал решений.
2. Проверить открытые вопросы и реестр источников до использования новых фактов или изображений.
3. Сохранять public UI немецким и не добавлять неподтверждённые заявления.
4. После каждого этапа обновлять `docs/PROGRESS.md`, `docs/DECISIONS.md` и реестр источников.
