import { useState } from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { scrollToId } from "../../utils/scroll";
import "./Hero.css";

const SUGGESTIONS = ["AI", "Design", "Coding", "Business", "Marketing"];

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState("");

  const runSearch = (term) => {
    onSearch(term);
    scrollToId("featured-courses");
  };

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <Reveal className="eyebrow">A guided way to learn</Reveal>

          <Reveal as="h1" delay={1} className="hero__title">
            Learn skills that
            <br />
            move you <em>forward</em>.
          </Reveal>

          <Reveal delay={2} as="p" className="hero__lede">
            NovaLearn turns thousands of courses into one clear path,
            matched to your goal, built around real projects, and paced for
            the skill you actually want to become.
          </Reveal>

          <Reveal delay={3} className="hero__actions">
            <a href="#final-cta" className="btn btn-primary">
              Start Learning
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#featured-courses" className="btn btn-secondary">
              Explore Courses
            </a>
          </Reveal>

          <Reveal delay={4} className="hero__search">
            <form
              className="hero__search-bar"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                runSearch(query);
              }}
            >
              <Icon name="search" size={19} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What do you want to build? Try “AI” or “Design”"
                aria-label="Search courses"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Find a path
              </button>
            </form>
            <div className="hero__suggestions">
              <span>Popular:</span>
              {SUGGESTIONS.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => {
                    setQuery(s);
                    runSearch(s);
                  }}
                  className="hero__chip"
                >
                  {s}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="hero__visual">
          <div className="hero__frame">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="A learner focused at a laptop, working through a course lesson"
              loading="eager"
            />
            <div className="hero__card hero__card--path">
              <span className="hero__card-icon">
                <Icon name="target" size={16} />
              </span>
              <div>
                <strong>Your path</strong>
                <p>Product Designer · Stage 2 of 4</p>
              </div>
            </div>
            <div className="hero__card hero__card--stat">
              <div className="hero__ring" style={{ "--pct": "72%" }}>
                <span>72%</span>
              </div>
              <div>
                <strong>On track</strong>
                <p>3 projects shipped</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
