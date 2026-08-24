# Refilwe Thapelo Trading & Projects

Responsive React, TypeScript and Vite website prepared for Netlify hosting.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production-ready website is generated in `dist`.

## Deploy on Netlify

### Drag-and-drop deployment

1. Run `npm install` and `npm run build` locally.
2. Upload the generated `dist` folder to Netlify Drop.

### Git deployment

1. Upload this project to GitHub.
2. In Netlify, select **Add new site → Import an existing project**.
3. Select the repository.
4. Netlify automatically uses `npm run build` and publishes `dist`.
5. Select **Deploy site**.

The included redirect rule ensures refreshed pages load correctly.
