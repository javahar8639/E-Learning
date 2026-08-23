import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { scrollToId } from "../../utils/scroll";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Courses", href: "#featured-courses" },
  { label: "Learning Paths", href: "#learning-paths" },
  { label: "Instructors", href: "#featured-courses" },
];

export default function Navbar({ onSearch, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const submitSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setSearchOpen(false);
    scrollToId("featured-courses");
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 18V6l8 9 8-9v12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          NovaLearn
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__icon-btn"
            aria-label="Search courses"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Icon name="search" size={19} />
          </button>
          <button type="button" className="navbar__login" onClick={onOpenLogin}>
            Login
          </button>
          <a href="#final-cta" className="btn btn-primary btn-sm">
            Start Learning
          </a>
        </div>

        <button
          type="button"
          className="navbar__icon-btn navbar__menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>
      </div>

      {searchOpen && (
        <form className="navbar__search container" role="search" onSubmit={submitSearch}>
          <Icon name="search" size={18} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, paths, instructors…"
            aria-label="Search courses, paths, instructors"
            autoFocus
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Search
          </button>
        </form>
      )}

      <div className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setMenuOpen(false);
              onOpenLogin();
            }}
          >
            Login
          </button>
          <a
            href="#final-cta"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Start Learning
          </a>
        </div>
      </div>
    </header>
  );
}
