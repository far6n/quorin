# Quorin — Landing Page

Marketing site for **Quorin**, a learning app powered by cognitive science. Built with React + Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
cd quorin-landing
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## Deploy to Vercel

**Option A — via CLI (fastest):**

```bash
npm i -g vercel
vercel            # follow prompts; accept defaults
vercel --prod     # deploy production
```

**Option B — via GitHub:**

1. Push the `quorin-landing` folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — keep the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

That's it — every push to `main` will redeploy automatically.
