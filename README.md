# NovaLearn

A course marketplace landing page built with React and Vite. Browse courses by category, search across courses and learning paths, and view curated learning paths that string multiple courses into one sequence.

## Main Features

- Category-based course discovery with six starting categories (AI & Technology, Design, Coding, Business, Marketing, Creative Skills)
- Live search across course titles, categories, instructors, and levels
- Search also filters learning paths by title, description, category, and level
- Curated learning paths, each broken into stages with duration, course count, and project count
- Featured course grid with instructor info, ratings, duration, level, and project count per card
- "Learn by doing" section with a mock course player preview (lesson list, progress bar, video preview, task checklist)
- Learner success stories with outcome tags and platform stats
- Login modal (UI only, no backend wired up yet)
- Responsive layout with a mobile nav drawer and collapsible search bar
- Scroll-triggered reveal animations, respecting `prefers-reduced-motion`

## User Flow

1. Visitor lands on the hero section and either searches directly or browses by category
2. Selecting a category or search term filters the Learning Paths and Featured Courses sections below
3. Visitor can clear the filter from a "View all courses" button in either section
4. Clicking "View course" or "View path" on a card scrolls to the final call-to-action
5. Visitor can open the login modal from the navbar to log in, or use "Start Learning" to reach the sign-up call-to-action
6. Footer links jump to the relevant filtered section (e.g. clicking "Design" in the footer filters courses by that category)

## Technology Used

- React 19
- Vite 6 (dev server and build tooling)
- Plain CSS with custom properties for theming (no CSS framework)
- IntersectionObserver-based scroll reveal (custom hook, no animation library)
- Netlify config included for static deployment

## Project Structure

```
src/
  components/
    Navbar/            Sticky nav, mobile menu, search toggle
    Hero/               Landing section with search bar and category chips
    CourseDiscovery/    Category grid and "All Courses" toggle
    LearningPaths/      Curated path rows with stage breakdown
    FeaturedCourses/    Filtered/searchable course grid
    LearnByDoing/       Mock course player preview section
    SuccessStories/     Testimonials and platform stats
    FinalCTA/           Closing call-to-action section
    Footer/             Site footer with category shortcuts
    ui/                 Shared pieces: Icon, LoginModal, Reveal wrapper
  data/
    categories.js       Category list (id, label, count, icon, blurb)
    courses.js          Course records used by discovery and featured sections
    learningPaths.js    Learning path records with stages and stats
    testimonials.js     Success story quotes and platform stats
  hooks/
    useReveal.js        Shared IntersectionObserver hook for scroll animations
  utils/
    scroll.js           Scroll-to-section helper (reduced-motion aware)
  App.jsx               Top-level state: active category, search query, login modal
  main.jsx              React root
  index.css             Design tokens, base styles, buttons, reveal animation
```

## Running Locally

```
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Building for Production

```
npm run build
```

Output is written to `dist/`.
