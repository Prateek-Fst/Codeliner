# N7 — Next-Gen Cloud Banking Platform

A high-performance, beautifully designed marketing landing page and showcase for the **N7/CB7** cloud-native banking platform. This application features rich aesthetics, sleek glassmorphism panels, deep blue gradients, and responsive layouts powered by **React**, **Vite**, **Material UI**, and **Tailwind CSS**.

---

## 🚀 Key Improvements & Deploy Settings

We've recently optimized the project configuration for seamless local development and production hosting:

1. **Vercel Deployment Integration** (`vercel.json`):
   * Fixed the missing output directory error on Vercel by mapping Vercel's target directory to `build/` (matching the custom build setup in `vite.config.mjs`).
2. **Environment Configuration** (`.env` & `.env.example`):
   * Introduced modular environment settings with variable prefixing support (`VITE_`).
3. **Git Security Update** (`.gitignore`):
   * Ensured local environment secrets in `.env` are secure by ignoring them in version control while providing `.env.example` as a starting template.

---

## 🛠️ Tech Stack & Core Libraries

* **Core Framework**: [React 19](https://react.dev/) — Component-driven reactive UI.
* **Build System**: [Vite 6](https://vitejs.dev/) — Lightning-fast local development and highly efficient production bundling.
* **Styling**:
  * [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling framework for rapid responsive layouts.
  * [Material UI 7](https://mui.com/) — Clean, responsive, accessible enterprise component components (`@mui/material`).
  * [Emotion](https://emotion.sh/) — Powerful styled-components engine (`@emotion/react`, `@emotion/styled`).
* **Routing**: [React Router DOM 7](https://reactrouter.com/) — Fluid declarative client-side routing.

---

## 📂 Project Structure

Below is the directory structure detailing how the project modules are organized:

```bash
locofy/
├── .env                  # [NEW] Local environment configuration (API endpoints, ports)
├── .env.example          # [NEW] Environment template (safe to commit)
├── vercel.json           # [NEW] Configures Vercel to serve builds from the "/build" folder
├── vite.config.mjs       # Custom Vite config (specifies "build/" as the build output directory)
├── package.json          # Script definitions and library dependencies
├── tailwind.config.js    # Tailwind layout and theme configuration
├── postcss.config.js     # PostCSS setup compiling Tailwind rules
├── public/               # Static public assets (icons, images)
└── src/                  # Main frontend source code
    ├── index.jsx         # React application mounting point
    ├── App.jsx           # Declares routes and dynamic page titles/metadata
    ├── global.css        # Directives for Tailwind utilities and custom CSS resets
    ├── pages/            # Top-level view layouts
    │   └── HomePage.jsx  # Primary landing page linking sections
    └── components/       # Highly reuseable visual components
        ├── Desktop.jsx             # Interactive hero dashboard showcase
        ├── PhoneMockup.jsx         # Mobile banking layout container
        ├── CoreBankingFeatures.jsx # Features overview panel
        ├── DigitalBankingSection.jsx# Interactive screen highlight
        ├── SolutionsSection.jsx    # Target audience solutions list
        ├── InsightsSection.jsx     # Dynamic blog feed grid
        ├── CaseStudiesSection.jsx  # Client success story highlight cards
        └── Footer.jsx              # Navigation and footer layout with Glow effects
```

---

## ⚙️ Setting Up Locally

Ensure you have **Node.js** (v20 or higher) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm start
```
Your app will be available locally at `http://localhost:3000` (or the next available port).

### 4. Build for Production
To bundle the application for production deployment into the `build/` directory:
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

Since the project uses a custom output directory, it is pre-configured to build flawlessly on Vercel using the added `vercel.json` configuration. Simply link your repository to Vercel, select **Vite** as the framework preset, and trigger a build!