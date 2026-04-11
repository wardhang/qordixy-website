# qordixy-website

Marketing site for [QORDIXY](https://qordixy.com) — Next.js (App Router), Tailwind CSS, contact API with SMTP.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` (local only; do not commit secrets).

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_HOST` | Yes (contact form) | SMTP hostname |
| `SMTP_PORT` | Yes | Usually `587` or `465` |
| `SMTP_USER` | Yes | SMTP login |
| `SMTP_PASS` | Yes | SMTP password / app password |
| `CONTACT_TO_EMAIL` | No | Inbox for enquiries (default in code if unset) |

## Deploy on Vercel

1. Push this repository to GitHub (or use **Vercel → Add New → Import** and connect the repo).
2. In the Vercel project **Settings → Environment Variables**, add the SMTP variables above for **Production** (and Preview if you test the form there).
3. Deploy. Vercel runs `next build` automatically; no `vercel.json` is required for a standard Next.js app.

The contact form posts to `/api/contact`; it needs valid SMTP env vars on the server.

## cPanel / self-hosted bundle (optional)

To build a zip for Node.js on traditional hosting:

```bash
npm run build:cpanel
```

See `CPANEL-DEPLOY.txt` and `scripts/cpanel-START-HERE.txt`.

## New GitHub repository (empty remote)

If you copied this project into a new folder and want to push to a fresh repo (e.g. `wardhang/qordixy-website`):

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/wardhang/qordixy-website.git
git push -u origin main
```

Do **not** use `echo "# …" >> README.md` if `README.md` already exists — it would append a second title. This repo already includes a README; commit it as shown above.
