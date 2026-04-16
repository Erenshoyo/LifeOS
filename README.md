# Life OS — Your Personal Productivity Operating System

> **"Your mind, unified. Your goals, realized."**

Life OS is a premium, offline-first productivity platform that replaces the chaos of juggling multiple apps with one calm, editorial-grade dashboard. It integrates tasks, habits, journaling, goals, and deep-focus tools into a single intentional system.

---

## ✨ Features

### 🏠 Dashboard — Today at a Glance
Your daily command center. Shows a live-formatted date header, three KPI cards (today's task progress, habit streak, and deep-work focus time), an interactive task + habit checklist, and a Quick Journal form with accessible label and submit handling.

### ✅ Tasks — Manage Your Focus
A prioritized task board with a "Current Focus" hero card, a pending-tasks KPI card, a scannable today's focus list, and secondary categorized cards (Personal Growth, Infrastructure). The "View All" control is accessible and non-navigating until a real route is in place.

### 📓 Journal — Reflect and Capture
A markdown-aware entry editor with accessible label, icon-only toolbar buttons (`Insert image`, `Start recording`, `Add link`) each carrying `aria-label` attributes, and a floating action button for quick new entries. Past entries are displayed in a chronological feed with attachment indicators.

### 🔥 Habits — Build Lasting Consistency
A weekly bar-chart activity overview (Recharts), three KPI cards (streak, longest streak, completion rate), and five individual habit cards each showing a 7-day progress bar with missed-day colouring, streak count, and weekly rate.

### 🎯 Goals — Track Long-Term Objectives
A responsive card grid with stable `id`-keyed items (safe for add/remove/reorder), per-goal progress bars dynamically derived from data, deadline dates, and task completion counts. Includes an "Achieved" archive section and a dashed "New Goal" placeholder card.

### 🧠 Brain Dump — Clear Your Mind
A real-time capture tool backed by React state. Items typed into the input are appended to the **To Process** list on Enter or clicking **Add**, count badges update reactively, and the Processed section maintains its own state array.

### ⏱️ Focus Mode — Deep Work Session
A full Pomodoro timer with an animated SVG progress ring, play/pause/reset controls, and an ambient sound picker (Midnight Rain, Green Forest, Quiet Cafe) with an inline Audio Mixer overlay. The sidebar analytics panel renders live bar charts via Recharts for Daily / Weekly / Monthly views, with stats computed per-period.

### 🗓️ Timeline — Your Journey Today
A vertical chronicle of daily events (journal, habit, task, inspiration) with a view toggle (Daily / Weekly / Monthly) that filters the entries. Habit events render a progress bar dynamically scaled to `event.progress` (0–100). The right sidebar shows a circular focus chart, metric list, and active goals with progress bars.

---

## 🌐 Landing Page

The public-facing marketing site at `/` is composed of six sections:

| Component | Description |
|---|---|
| `NavBar` | Responsive top navigation with animated scroll effects |
| `Hero` | Animated particle field (`Antigravity`), headline, and a CTA button (`Button asChild` + `Link`) navigating to `/dashboard` |
| `SectionExecute` | Feature showcase — task execution, habits |
| `SectionConnect` | Highlights syncing and reflection features |
| `SectionLaunch` | Final CTA section |
| `Footer` | Semantic links, social, and legal |

All sections use **Framer Motion** for staggered scroll-in animations.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) — App Router, Server Components |
| **Runtime** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/joe-bell/tw-animate-css) |
| **UI Primitives** | [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **3D / Particles** | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Inter (body) + Manrope (headings) via `next/font/google` |
| **Language** | TypeScript 5 |

---

## 📂 Project Structure

```text
day-os-web/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page (/)
│   │   ├── layout.tsx            # Root layout — fonts, global metadata
│   │   ├── globals.css           # Tailwind v4 imports, CSS design tokens, dark mode vars
│   │   ├── error.tsx             # Global error boundary
│   │   ├── not-found.tsx         # 404 page
│   │   ├── dashboard/            # /dashboard — Today's overview
│   │   ├── tasks/                # /tasks — Task management
│   │   ├── journal/              # /journal — Daily journal
│   │   ├── habits/               # /habits — Habit tracking
│   │   ├── goals/                # /goals — Long-term goals
│   │   ├── brain-dump/           # /brain-dump — Quick capture
│   │   ├── focus-mode/           # /focus-mode — Pomodoro + analytics
│   │   └── timeline/             # /timeline — Daily chronicle
│   │
│   ├── components/
│   │   ├── AppLayout.tsx         # Shell: fixed sidebar + scrollable main content
│   │   ├── Sidebar.tsx           # Active-link navigation with 8 routes
│   │   ├── Antigravity.tsx       # Custom Three.js interactive particle system
│   │   ├── LandingPageComponents/
│   │   │   ├── NavBar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── SectionExecute.tsx
│   │   │   ├── SectionConnect.tsx
│   │   │   ├── SectionLaunch.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── button.tsx        # Shadcn Button (supports asChild)
│   │       └── card.tsx          # Shadcn Card
│   │
│   └── lib/                      # Shared utilities (cn helpers, etc.)
│
├── public/                       # Static assets (images, favicon)
├── tailwind.config.ts            # Custom brand colours & font tokens
├── components.json               # Shadcn CLI config
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Brand Colour Palette
```
brand-dark     #002D1C   — Primary backgrounds, active states
brand-light    #00452E   — Gradient end, hover states
brand-lightest #00663D   — Accent highlights
```

### Typography
- **Body**: Inter (loaded via `--font-inter` CSS variable)
- **Headings**: Manrope (loaded via `--font-manrope` CSS variable)

### Design Language
- Deep-emerald colour palette with zinc neutral scale
- Subtle `box-shadow` elevation system (no harsh borders)
- `rounded-2xl` card radius throughout
- Micro-animations: `hover:-translate-y-0.5`, `hover:scale-[1.02]`, `transition-all`
- CSS design tokens styled via OKLCH for perceptual consistency

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** ≥ 18 (latest LTS recommended)
- **npm** ≥ 9

### Installation

```bash
git clone https://github.com/your-repo/day-os-web.git
cd day-os-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js dev server with HMR |
| `npm run build` | Compile production bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

---

## ♿ Accessibility

Key accessibility decisions made across the app:

- All icon-only buttons carry descriptive `aria-label` attributes (Journal toolbar, sidebar New Entry button)
- Form inputs are paired with explicit `<label htmlFor>` elements (Quick Journal, Brain Dump capture)
- Save/submit buttons are `disabled` + `aria-disabled` when no content is present
- Dead-link anchors (`href="#"`) replaced with `<button type="button">` to prevent URL mutation
- Interactive nesting (e.g. `<a>` inside `<a>`) resolved using Shadcn's `asChild` pattern

---

## 🪐 Antigravity

The `Antigravity` component is a custom-built Three.js particle system rendered via `@react-three/fiber`. It creates a reactive field of particles that respond to mouse proximity, representing the "weightless clarity" of a perfectly organized life. Used as the animated background in the Hero section of the landing page.

---

Built with ❤️ for those who demand more from their productivity tools.
