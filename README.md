# Enterprise Next.js 16 + Redux Toolkit Starter Template

A production-ready, feature-driven starter template built with **Next.js 16 (App Router)**, **Redux Toolkit**, **RTK Query**, **Tailwind CSS v4**, **TypeScript**, **shadcn/ui**, **React Hook Form**, **Zod**, and **Sonner**.

---

## 🚀 Features

- **Next.js 16 App Router**: Route groups `(auth)`, `(dashboard)`, custom `not-found`, and `error` boundaries.
- **Redux Toolkit & RTK Query**: Scalable state management with lazy initialization for React 19, automatic token handling, and modular service endpoints.
- **Feature-Driven Architecture**: Modular domain organization (`src/features/`) keeping components, slices, and types together.
- **Validation**: Type-safe Zod validation schemas (`src/lib/validators/`).
- **Custom Utility Hooks**: `useDebounce`, `useLocalStorage` (SSR-safe).
- **Toast Notifications**: Built-in `sonner` toast provider in root layout.
- **Styling**: Tailwind CSS v4, Lucide Icons, and `@/` path alias support.

---

## 📁 Project Directory Structure

```text
invictus_labs/
├── public/                     # Static assets (images, icons)
├── src/
│   ├── app/                    # Next.js App Router (Routing & Layouts)
│   │   ├── (auth-layout)/      # Auth route group (/login, /register)
│   │   │   ├── layout.tsx      # Auth centered layout
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard-layout)/ # Dashboard route group (/dashboard)
│   │   │   ├── layout.tsx      # Dashboard header layout
│   │   │   └── dashboard/
│   │   ├── (main-layout)/      # Main public site route group (/)
│   │   │   ├── layout.tsx      # Main site Header/Footer layout
│   │   │   └── page.tsx        # Home Page
│   │   ├── layout.tsx          # Root Layout (StoreProvider + Sonner Toaster)
│   │   ├── error.tsx           # Global error boundary
│   │   └── not-found.tsx       # Custom 404 page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Atomic design primitives (shadcn/ui)
│   │   └── layouts/            # Layout components (Navbar, Footer, Sidebar, DashboardHeader)
│   │
│   ├── config/                 # Site configuration & metadata
│   │   └── site.ts
│   │
│   ├── features/               # Feature-based domain modules
│   │   └── auth/               # Auth feature (authSlice, components, types)
│   │
│   ├── hooks/                  # Utility custom React hooks
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── lib/                    # Helpers and Validators
│   │   ├── utils.ts            # shadcn cn helper
│   │   └── validators/         # Zod schemas (auth.schema.ts)
│   │
│   ├── providers/              # Global React Context & State Wrappers
│   │   └── StoreProvider.tsx   # React-Redux Store Provider
│   │
│   ├── services/               # RTK Query API Services
│   │   ├── baseApi.ts          # Central RTK Query base instance with Auth header interceptor
│   │   └── authApi.ts          # Auth endpoints & auto-generated hooks
│   │
│   └── store/                  # Redux Toolkit Setup
│       ├── store.ts            # Store configuration & factory
│       ├── rootReducer.ts      # Combined root reducer
│       └── hooks.ts            # Typed hooks (useAppDispatch, useAppSelector)
│
├── .env.example                # Template for environment variables
├── .gitignore                  # Git ignore rules
└── package.json
```

---

## 🛠️ Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/ramjan-devs/frontend-next.js-redux.git
cd frontend-next.js-redux
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles production build.
- `npm run start`: Starts production server.
- `npm run lint`: Runs ESLint checks.

---

## 📝 How to Use for New Projects

To use this repository as a template for a new project:

1. Clone or click **"Use this template"** on GitHub.
2. Update `package.json` with your new project name.
3. Add new feature modules under `src/features/<feature-name>`.
4. Inject new RTK Query endpoints using `baseApi.injectEndpoints()` under `src/services/`.
