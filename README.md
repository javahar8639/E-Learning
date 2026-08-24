# 🎓 NovaLearn

**NovaLearn** is a course marketplace landing page built with **React 19** and **Vite**. It lets visitors browse courses by category, search across courses and learning paths, and explore curated learning paths that group multiple courses into one guided sequence.

> Built as a **frontend-only** experience with a focus on **category-driven discovery**, **live search/filtering**, and **scroll-based motion**.

---

## ✨ Features

### 🔍 Course Discovery

A category grid drives the browsing experience.

* **Six categories**: AI & Technology, Design, Coding, Business, Marketing, Creative Skills
* **"All Courses" toggle** alongside the category cards, with a live course count
* Selecting a category filters both the **Learning Paths** and **Featured Courses** sections at once

### 🛣️ Learning Paths

Each path strings several courses into one sequence instead of a flat catalog.

Each path includes:

* **Title, category, and description**
* **Duration, course count, and project count**
* **Stage breakdown** (Learn → Practice → Build → Master)
* A cover image and level tag (e.g. "Beginner friendly", "Intermediate")

### 📚 Featured Courses

A searchable/filterable grid of individual course cards.

* **Instructor info**: name, role, and avatar
* **Rating and review count**
* **Duration, level, project count, and learner count**
* Hover state reveals a **"View course"** call-to-action over the thumbnail

### 🧑‍💻 Search & Filtering

Includes:

* A search bar in the hero that matches against course **title, category, instructor, and level**
* The same query also filters learning paths by **title, description, category, and level**
* Search and category filters are mutually exclusive — picking one clears the other
* An empty-state message and **"View all courses"** reset when nothing matches

### 💬 Success Stories

* Testimonial cards with **name, outcome tag, quote, and current role**
* A platform stats row (learners, courses, instructors, satisfaction)

### 🔐 Login

* A **login modal** with email/password fields and validation on the inputs
* Submitting shows a status message

> **Backend/authentication is not implemented** — the form does not send data anywhere; it only confirms submission in the UI.

### 📱 Responsive Design

Includes:

* Responsive grid layouts across course, path, and testimonial sections
* A **mobile nav drawer** that replaces the desktop nav links below 900px
* A collapsible search bar in the navbar
* Layout reflow for the hero, "Learn by Doing" mockup, and footer at smaller breakpoints

### 🎨 Animations & Accessibility

* Scroll-triggered **reveal animations** via a shared `IntersectionObserver` hook, staggered per grid item
* Respects **`prefers-reduced-motion`** — animations and smooth scrolling are disabled when set
* Hover feedback (color/border/transform transitions) across cards, buttons, and nav elements
* Smooth in-page scrolling to sections via anchor links

---

## 🔄 User Flow

```text
Hero (search or browse)
        ↓
Category selected OR search term entered
        ↓
Learning Paths + Featured Courses filtered
        ↓
Course/path card clicked ("View course" / "View path")
        ↓
Scrolls to Final CTA
```

From anywhere on the page, the navbar or footer links can also jump directly to a filtered section — for example, clicking a category name in the footer scrolls to Featured Courses already filtered by that category. The login modal is a separate flow, opened from the navbar and closed via the close button, backdrop click, or Escape key.

---

## 🧩 Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   │   └── Sticky nav, mobile menu, search toggle
│   │
│   ├── Hero/
│   │   └── Search bar, category chips, floating stat cards
│   │
│   ├── CourseDiscovery/
│   │   └── Category grid and "All Courses" toggle
│   │
│   ├── LearningPaths/
│   │   └── Curated path rows with stage breakdown
│   │
│   ├── FeaturedCourses/
│   │   └── Filtered/searchable course grid
│   │
│   ├── LearnByDoing/
│   │   └── Mock course player preview (lessons, progress, video, task)
│   │
│   ├── SuccessStories/
│   │   └── Testimonials and platform stats
│   │
│   ├── FinalCTA/
│   │   └── Closing call-to-action section
│   │
│   ├── Footer/
│   │   └── Site footer with category shortcuts
│   │
│   └── ui/
│       ├── Icon.jsx (shared inline SVG icon set)
│       ├── LoginModal.jsx (login dialog)
│       └── Reveal.jsx (scroll-reveal wrapper)
│
├── data/
│   ├── categories.js
│   ├── courses.js
│   ├── learningPaths.js
│   └── testimonials.js
│
├── hooks/
│   └── useReveal.js
│
├── utils/
│   └── scroll.js
│
├── App.jsx
├── main.jsx
└── index.css
```

**Note:** this mirrors the actual folder layout in `src/` — no files or folders were added for this document.

---

## 🛠️ Tech Stack

| Technology     | Usage                                          |
| -------------- | ----------------------------------------------- |
| **React 19**   | UI components and state management             |
| **Vite 6**     | Dev server and production build tooling         |
| **CSS**        | Styling via custom properties (design tokens)   |
| **IntersectionObserver** | Scroll-triggered reveal animations   |
| **Netlify**    | Static deployment config (`netlify.toml`)       |

> No CSS framework or animation library was used — styling and reveal animations are hand-written, using CSS custom properties and a small custom hook.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd E-LEARNING
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

```text
http://localhost:5173
```

---

## 📦 Production Build

```bash
npm run build
```

```text
dist/
```

---

## 📌 Current Scope

The current version focuses on the browsing/discovery experience and the visual design system — it's a frontend build with no live backend.

### Implemented

* ✅ Category-based course discovery
* ✅ Live search across courses and learning paths
* ✅ Curated, multi-stage learning paths
* ✅ Featured course grid with instructor/rating/meta info
* ✅ Success stories and platform stats
* ✅ Login modal UI
* ✅ Responsive layout with mobile navigation
* ✅ Scroll-reveal animations with reduced-motion support

### Not Yet Implemented

* ⏳ Backend/API integration
* ⏳ Real authentication (login currently only simulates submission)
* ⏳ Individual course/path detail pages
* ⏳ Persisted user data (progress, enrollments)

---

## 🔮 Future Improvements

* **Wire up a real backend** for authentication and course data
* **Add dedicated course/path detail pages** instead of scrolling to the CTA
* **Persist search/filter state** in the URL for shareable links
* **Add pagination or infinite scroll** to the featured course grid
* **Introduce automated tests** for filtering and search logic

---

## 👩‍💻 What I Worked On

This is a frontend-only build. My work covered:

* **Component architecture** — splitting the page into self-contained section components (Navbar, Hero, CourseDiscovery, LearningPaths, FeaturedCourses, LearnByDoing, SuccessStories, FinalCTA, Footer)
* **State management** — category/search state lifted to `App.jsx`, driving both the Learning Paths and Featured Courses sections from a single source of truth
* **Search/filtering logic** — matching search terms against course and path fields, with fallback behavior when a search returns no path matches
* **Reusable components** — a shared `Icon` component for inline SVGs and a `Reveal` wrapper for scroll animations
* **Responsive design** — breakpoints for the nav, hero, course grid, and path rows
* **Animations** — the `useReveal` hook and its shared `IntersectionObserver`, plus hover transitions across cards and buttons

The current implementation can be extended by connecting the data layer to a real API and adding routed detail pages, without needing to change the section components themselves.
