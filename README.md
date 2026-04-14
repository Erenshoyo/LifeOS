# DayOS: The High-End Life OS

DayOS is a premium, editorial-grade productivity platform designed to help you organize your life with clarity and intention. Built with a stunning glassmorphic aesthetic, DayOS bridges the gap between daily execution and long-term ambitions.

![Hero Banner](public/favicon.ico) *<!-- Placeholder for a real banner if available -->*

## ✨ Key Features

### 🧠 The Brain Dump
Capture thoughts instantly as they come. DayOS uses intelligent processing to convert raw thoughts into actionable tasks with assigned priorities and due dates.

### ✅ Daily Execution
A streamlined task management system that removes clutter and focus on what matters today.
- **Priority Badging**: High, Medium, and Low priority labels.
- **Interactive Checklists**: Smooth, responsive task completion.

### 🔥 Habit Heatmaps
Build streaks that last. Visualize your consistency over time with intuitive heatmap grids, inspired by GitHub's contribution graph but tailored for personal growth.

### ⏱️ Focus Mode
A distraction-free Pomodoro timer integrated directly into your workflow. Features a sleek, minimal interface to keep you in the zone.

### 🎯 Goal Tracking
Connect today's tasks to tomorrow's goals. See a direct line from your daily actions to your life-changing outcomes with progress visualization and goal-aligned task linking.

### 📊 Weekly Reviews
A dedicated space to reflect on your progress, celebrate wins, and refine your approach for the coming week.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Visuals**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) for high-performance 3D animations
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── app/                # Next.js App Router (Dashboard, Tasks, Habits, etc.)
├── components/         # Reusable UI components
│   ├── LandingPage/    # Marketing and intro sections
│   ├── ui/             # Atomic Shadcn components
│   └── Antigravity.tsx # Interactive 3D particle system
├── lib/                # Utility functions and shared logic
└── public/             # Static assets
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (latest stable version recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/day-os-web.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🪐 Antigravity Visuals
One of the unique features of DayOS is the **Antigravity** component—a custom-built 3D particle field that responds to mouse movements. It symbolizes the "weightless" feeling of a perfectly organized life.

---

Built with ❤️ for those who demand more from their productivity tools.
