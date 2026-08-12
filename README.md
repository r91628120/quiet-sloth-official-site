# Quiet Sloth Official Site

《靜靜樹懶靜坐日記 Quiet Sloth Meditation Journal》正式官方網站原始碼。

## Architecture

- Vite + React + TypeScript
- Static multi-page build for GitHub Pages
- Mobile-first responsive CSS
- Traditional Chinese V1 content
- i18n registry prepared for `zh-TW`, `en`, `ja`, `ko`, and `th`
- No server runtime, database, analytics, tracking, account system, or API routes

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm test
npm run build
npm run preview
```

## Pages deployment

`.github/workflows/deploy-pages.yml` builds and deploys `dist/` when `main` is pushed. Production deployment must not be enabled until source review, legal-copy review, link configuration, repository settings, and user approval are complete.

## Release configuration

Store, support, LINE sticker, and Miracle Mind URLs are centralized in `src/config/links.ts`. Empty values render as unavailable or “即將推出” and must not navigate.

## Content status

- `zh-TW`: V1 source prototype complete
- `en`, `ja`, `ko`, `th`: intentionally not translated; language options display “Coming soon”
- Privacy and terms source contain `LEGAL COPY REVIEW REQUIRED` markers and require formal review before production publication
