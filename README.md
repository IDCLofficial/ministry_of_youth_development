# Ministry of Finance Web App

This project is a modern, modular web application built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS. It is designed for organizations such as a Ministry of Finance, providing a scalable and maintainable structure for informational and interactive content.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Reusable Components](#reusable-components)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Features
- **Next.js 15** with the App Router for modern routing and layouts
- **TypeScript** for type safety and maintainability
- **Tailwind CSS** for rapid, utility-first styling
- **Custom local fonts** (Satoshi)
- **Responsive, fixed navigation bar**
- **Reusable UI components** for links, navigation, and titles
- **Modular page structure** for easy expansion

## Project Structure
```
/mof
  /src
    /app
      /about-us
      /contact-us
      /events
      /home
      /media
      /news
      /projects
      /units
      layout.tsx
      page.tsx
      globals.css
    /components
      AppLink.tsx
      Navbar.tsx
      NavLinks.tsx
      Title.tsx
    /fonts
      /satoshi-cdnfonts
        ...
```

### Main Pages
- **Home** (`/home`)
- **About Us** (`/about-us`)
- **Projects** (`/projects`)
- **News** (`/news`)
- **Units** (`/units`)
- **Events** (`/events`)
- **Media** (`/media`)
- **Contact Us** (`/contact-us`)

## Reusable Components
- **Navbar**: Fixed header with logo and navigation links.
- **NavLinks**: Navigation links for all main pages.
- **AppLink**: Customizable link component supporting variants and sizes.
- **Title**: Styled title component for headings.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

4. **Edit pages/components:**
   Modify files in `src/app/` or `src/components/` to update content and UI. The app supports hot reloading.

## Available Scripts
- `dev`: Start the development server
- `build`: Build the app for production
- `start`: Start the production server
- `lint`: Run ESLint for code quality

## Deployment
The recommended way to deploy this app is via [Vercel](https://vercel.com/). You can also use any platform that supports Node.js and Next.js.

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

_This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and customized for organizational use._
