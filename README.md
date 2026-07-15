# Pawan Sharma - Creative Developer Portfolio

High-end "Scrollytelling" Personal Portfolio Website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Scroll-linked animation that scrubs through an image sequence as the user scrolls
- Canvas-based rendering for high performance
- Parallax text overlay with dynamic content at different scroll positions
- Glassmorphism design with subtle hover effects
- Responsive design for all device sizes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas

## Components

1. **ScrollyCanvas.tsx** - 500vh parent + sticky h-screen canvas
   - Preloads images in useEffect
   - Maps useScroll → frame index for animation scrubbing

2. **Overlay.tsx** - Parallax text over canvas (z-10)
   - 0% → "My Name. Creative Developer." (center)
   - 30% → "I build digital experiences." (left)
   - 60% → "Bridging design and engineering." (right)

3. **Projects.tsx** - Glassmorphism grid with subtle hover glow

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ScrollyCanvas.tsx
│   ├── Overlay.tsx
│   └── Projects.tsx
├── public/
│   └── sequence/
└── ...
```

## Image Sequence

Place your WebP frames in the `public/sequence/` directory named sequentially (e.g., frame-000.webp, frame-001.webp, etc.)

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)