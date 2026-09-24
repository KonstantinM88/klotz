# Stack baseline

Дата проверки: **24 сентября 2026 года**.

## Решение для демо

Демо KLOTZ.mobi должно запускаться без базы данных и внешних секретов. Контент хранится как типизированные локальные данные/MDX за repository-интерфейсом. Это даёт максимальную скорость демонстрации и не создаёт преждевременную инфраструктуру.

Prisma/Neon учитываются в модели данных и границах модулей, но подключаются только в следующей фазе — вместе с CMS/CRM или реальным сохранением заявок.

## Проверенный baseline

Пакеты проверены через официальный npm registry и разрешение строгих peer dependencies с lockfile:

| Компонент            |                            Версия baseline | Статус                                                                                                         |
| -------------------- | -----------------------------------------: | -------------------------------------------------------------------------------------------------------------- |
| Node.js              | 24 LTS, минимум 24.0 для выбранного Prisma | production runtime                                                                                             |
| Next.js              |                                     16.3.6 | stable `latest`                                                                                                |
| React / React DOM    |                                     19.3.0 | stable                                                                                                         |
| TypeScript           |                                      6.0.3 | последняя совместимая линия для текущей Next.js/ESLint toolchain; TypeScript 7 отклонён strict peer resolution |
| Prisma CLI           |                                     7.10.0 | stable-линия `prev`, так как Prisma 8 ещё RC                                                                   |
| `@prisma/client`     |                                     7.10.0 | stable `latest` на дату проверки                                                                               |
| `@prisma/adapter-pg` |                                     7.10.0 | согласован с Prisma Client                                                                                     |
| `pg`                 |                                     8.16.3 | совместимая stable-линия                                                                                       |
| Tailwind CSS         |                                      4.3.3 | опционально; использовать только с токенами проекта                                                            |
| Zod                  |                                      4.6.5 | формы, env и content validation                                                                                |
| ESLint               |                                     9.39.5 | последняя совместимая линия для `eslint-config-next` 16.3.6; ESLint 10 отклонён strict peer resolution         |

Точные версии должны быть зафиксированы без `^` и `~` в первом production-ready lockfile. Нельзя брать Prisma 8 RC только ради слова «последний».

## Предлагаемые инструменты

- npm с committed `package-lock.json`;
- ESLint flat config и Prettier;
- Vitest + Testing Library;
- Playwright + `@axe-core/playwright`;
- Zod для runtime-валидации контента, параметров и форм;
- `next/font/local` или проверенный `next/font/google` без клиентского запроса к Google;
- `next/image` и локально подготовленные AVIF/WebP variants;
- Prisma 7 + Neon PostgreSQL только после активации database phase;
- `@prisma/adapter-pg` с pooled runtime URL и direct URL для migrations.

Не добавлять Framer Motion, тяжёлую carousel-библиотеку, component mega-library или client-side CMS SDK без доказанной необходимости.

## Политика обновлений

### Уточнение для презентационного QA, 24.09.2026

Полный QA запускается на Node **24.21.0**. Системный Node 22.14 способен собирать демо, но не удовлетворяет Lighthouse 13.5.0 (минимум 22.19). Глобальная установка Node не менялась. Зафиксированы dev dependencies: `@playwright/test` 1.63.0, `@axe-core/playwright` 4.13.0, `lighthouse` 13.5.0. Версии Next/React/Zod не менялись. Prisma, Neon и Tailwind по-прежнему не подключены.

Перед scaffold повторно проверить npm dist-tags и официальные migration notes. Обновление версии допустимо, только если:

1. релиз stable, а не beta/RC/canary;
2. peer dependencies разрешаются строго;
3. Node runtime поддерживается;
4. проходят typecheck, lint, tests и production build;
5. изменение отражено в `docs/DECISIONS.md`.

## Официальные источники

- Next.js production checklist: https://nextjs.org/docs/app/guides/production-checklist
- Next.js 16 upgrade guide: https://nextjs.org/docs/app/guides/upgrading/version-16
- Next.js metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js robots: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Prisma 7 + Next.js: https://www.prisma.io/docs/guides/v7/frameworks/nextjs
- Prisma 7 + PostgreSQL/Neon: https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql
- Prisma release status: https://www.prisma.io/docs/prisma-orm/quickstart/postgresql
