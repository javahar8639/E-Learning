import { categories } from "../../data/categories";
import { courses } from "../../data/courses";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import { scrollToId } from "../../utils/scroll";
import "./CourseDiscovery.css";

export default function CourseDiscovery({ activeCategory, onSelectCategory }) {
  const showResults = () => scrollToId("featured-courses");

  const handleSelect = (label) => {
    onSelectCategory(activeCategory === label ? null : label);
    showResults();
  };

  return (
    <section className="discovery" id="discovery">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div>
            <span className="eyebrow">Start with a question</span>
            <h2 className="section-heading">What do you want to learn?</h2>
            <p className="section-sub">
              Six starting points, not six thousand courses. Pick the one
              closest to your goal and we'll narrow things down from there.
            </p>
          </div>

          <button
            type="button"
            className={`discovery__all ${activeCategory === null ? "is-active" : ""}`}
            onClick={() => {
              onSelectCategory(null);
              showResults();
            }}
            aria-pressed={activeCategory === null}
          >
            <Icon name="layers" size={16} />
            All Courses
            <span className="discovery__all-count">{courses.length}</span>
          </button>
        </Reveal>

        <div className="discovery__grid">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.id}
              as="button"
              type="button"
              delay={(i % 3) + 1}
              className={`discovery__card ${activeCategory === cat.label ? "is-active" : ""}`}
              onClick={() => handleSelect(cat.label)}
              aria-pressed={activeCategory === cat.label}
            >
              <span className="discovery__icon">
                <Icon name={cat.icon} size={22} />
              </span>
              <span className="discovery__label">{cat.label}</span>
              <span className="discovery__blurb">{cat.blurb}</span>
              <span className="discovery__count">{cat.count}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
