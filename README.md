# Marius Obreja — Portfolio

Personal portfolio site built with **React + TypeScript + Vite**, deployed on **Vercel** with a serverless contact form API.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, TypeScript, Vite |
| Animations | Framer Motion |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Contact API | Vercel Serverless Function (Node.js) + Nodemailer |
| Hosting | Vercel |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
gh repo create marius-portfolio --public --push
```

### 2. Import on Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repo
- Framework: **Vite** (auto-detected)
- Build command: `npm run build`
- Output directory: `dist`

### 3. Set environment variables

In the Vercel dashboard → Settings → Environment Variables, add:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Usually `587` |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (not your regular password) |
| `CONTACT_TO` | Where form submissions are delivered |

#### Gmail quick setup
1. Enable 2FA on your Google account
2. Go to Google Account → Security → App Passwords
3. Generate an app password for "Mail"
4. Use that 16-char password as `SMTP_PASS`

### 4. Deploy
Click **Deploy** — that's it. Every push to `main` auto-deploys.

---

## Customisation

All content lives in **`src/data/siteData.ts`** — edit your name, bio, skills, experience, and projects there. No need to touch component files.

```
src/
  data/
    siteData.ts       ← All your content here
  components/
    Nav.tsx / .css
    Hero.tsx / .css
    About.tsx / .css
    Skills.tsx / .css
    Experience.tsx / .css
    Projects.tsx / .css
    Contact.tsx / .css
    Footer.tsx / .css
  App.tsx
  main.tsx
  index.css           ← Global CSS variables & base styles
api/
  contact.ts          ← Vercel serverless contact form
```

---

## Adding your CV download

Drop your CV PDF into `public/cv.pdf` and update the hero CTA in `Hero.tsx`:

```tsx
<a href="/cv.pdf" download className="btn-outline">Download CV</a>
```
