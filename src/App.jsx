import { useCallback, useMemo, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CourseDiscovery from "./components/CourseDiscovery/CourseDiscovery";
import LearningPaths from "./components/LearningPaths/LearningPaths";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import LearnByDoing from "./components/LearnByDoing/LearnByDoing";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/ui/LoginModal";
import { courses } from "./data/courses";
import { learningPaths } from "./data/learningPaths";

function matchesQuery(haystackParts, query) {
  const haystack = haystackParts.join(" ").toLowerCase();
  return haystack.includes(query);
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const trimmedQuery = searchQuery.trim();
  const isSearching = trimmedQuery.length > 0;

  const visibleCourses = useMemo(() => {
    if (isSearching) {
      const q = trimmedQuery.toLowerCase();
      return courses.filter((c) =>
        matchesQuery([c.title, c.category, c.instructor, c.level], q)
      );
    }
    if (activeCategory) {
      return courses.filter((c) => c.category === activeCategory);
    }
    return courses;
  }, [activeCategory, isSearching, trimmedQuery]);

  const visiblePaths = useMemo(() => {
    if (!isSearching) return learningPaths;
    const q = trimmedQuery.toLowerCase();
    const filtered = learningPaths.filter((p) =>
      matchesQuery([p.title, p.description, p.category, p.level], q)
    );
    return filtered.length ? filtered : learningPaths;
  }, [isSearching, trimmedQuery]);

  const handleSearch = (term) => {
    setSearchQuery(term);
    setActiveCategory(null);
  };

  const handleSelectCategory = (label) => {
    setActiveCategory(label);
    setSearchQuery("");
  };

  const handleReset = () => {
    setActiveCategory(null);
    setSearchQuery("");
  };

  const openLogin = useCallback(() => setLoginOpen(true), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  return (
    <>
      <Navbar onSearch={handleSearch} onOpenLogin={openLogin} />
      <main>
        <Hero onSearch={handleSearch} />
        <CourseDiscovery
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
        <LearningPaths
          paths={visiblePaths}
          searchQuery={isSearching ? trimmedQuery : ""}
        />
        <FeaturedCourses
          courses={visibleCourses}
          activeCategory={activeCategory}
          searchQuery={isSearching ? trimmedQuery : ""}
          onReset={handleReset}
        />
        <LearnByDoing />
        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer onSelectCategory={handleSelectCategory} />
      <LoginModal open={loginOpen} onClose={closeLogin} />
    </>
  );
}
