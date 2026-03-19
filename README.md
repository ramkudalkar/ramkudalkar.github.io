# Ramchandra Kudalkar - AWS DevOps Engineer Portfolio

Welcome to the source code for my interactive, high-performance "Scrollytelling" personal portfolio website!

## 🚀 Overview

This website is a premium, Awwwards-style experience built to showcase my career history, technical expertise, and AWS certifications. It features a stunning cinematic background mechanism using an HTML5 Canvas sequence meticulously mapped to the user's scroll position, accompanied by fluid, dark-mode glassmorphic UI components.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering Strategy**: HTML5 Canvas (for 60fps scroll-linked Image Sequencing)
- **Deployment**: Configured for Static HTML Export (GitHub Pages)

## 📂 Project Structure

- `src/components/ScrollyCanvas.tsx`: Core engine that intelligently preloads 120 high-res WebP image frames and maps them to the user's scroll-progress using Framer Motion's `useScroll`.
- `src/components/Overlay.tsx`: Parallax typography and messaging synchronized perfectly with the canvas scroll positions.
- `src/components/Projects.tsx`: A robust glassmorphic resume layout detailing my AWS Cloud skills, Certifications, and professional timeline.

## ⚙️ Running Locally

First, ensure you have Node.js installed on your machine.
Install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio in real-time.

## 🌐 Deploying to GitHub Pages

This project is already properly configured for **Static HTML Export** inside `next.config.mjs`.

To generate a purely static website that GitHub Pages can natively host:

1. Run the Next.js compiler:
   ```bash
   npm run build
   ```
2. Next.js will automatically generate a new **`out/`** directory in your root folder.
3. Push the **contents** of this `out/` directory to the `main` branch of your `ramkudalkar.github.io` repository. GitHub Pages will instantly see the `index.html` file and your site will be live on the web!
# ramkudalkar.github.io
