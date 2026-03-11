# ALI EISSA Cybersecurity Portfolio

Professional portfolio showcasing the skills, projects and services of ALI EISSA, a penetration tester specializing in web and network security. The site is built with Next.js, Tailwind CSS, and Framer Motion, and is optimized for mobile devices with a dark, hacker‑style aesthetic.

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react (icon library)

## Getting Started

### Prerequisites

- Node.js 18+ or equivalent environment
- Git

### Local Setup

1. Clone the repository (after pushing to GitHub):

   ```bash
   git clone https://github.com/ali-cybersec-sudo/ali-eissa-portfolio.git
   cd ali-eissa-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Vercel Deployment

1. Push the repository to GitHub (see commands below).
2. Sign in to [Vercel](https://vercel.com) and create a new project by importing the GitHub repository `ali-cybersec-sudo/ali-eissa-portfolio`.
3. Use the default settings; no environment variables are required for this static portfolio.
4. Vercel automatically builds and deploys on each push to the `main` branch.

The site will be available at `https://<your-vercel-subdomain>.vercel.app`.

## Additional Notes

- Replace `public/ALI_EISSA.pdf` with your actual CV file.
- Update `metadataBase` in `app/layout.tsx` to your production domain if different.
- Provide a proper `favicon.svg` or change the icons as needed.
