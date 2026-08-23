import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./FeaturedCourses.css";

function getHeading({ courses, activeCategory, searchQuery }) {
  const count = courses.length;
  const plural = count === 1 ? "course" : "courses";

  if (searchQuery) {
    return {
      eyebrow: "Search results",
      title: `Results for “${searchQuery}”`,
      sub: count
        ? `${count} ${plural} matched your search.`
        : "No courses matched your search.",
    };
  }

  if (activeCategory) {
    return {
      eyebrow: "Filtered by category",
      title: `${activeCategory} courses`,
      sub: `${count} ${plural} in ${activeCategory}.`,
    };
  }

  return {
    eyebrow: "Hand-picked",
    title: "A closer look at a few favorites.",
    sub: "A small, curated selection, taught by people who do this work for a living, not just teach it.",
  };
}

export default function FeaturedCourses({
  courses,
  activeCategory,
  searchQuery,
  onReset,
}) {
  const heading = getHeading({ courses, activeCategory, searchQuery });
  const isFiltered = Boolean(activeCategory || searchQuery);

  return (
    <section className="featured" id="featured-courses">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div>
            <span className="eyebrow">{heading.eyebrow}</span>
            <h2 className="section-heading">{heading.title}</h2>
            <p className="section-sub">{heading.sub}</p>
          </div>

          {isFiltered && (
            <button type="button" className="btn btn-ghost" onClick={onReset}>
              View all courses
              <Icon name="arrowRight" size={17} className="btn-arrow" />
            </button>
          )}
        </Reveal>

        {courses.length === 0 ? (
          <Reveal className="featured__empty">
            <span className="featured__empty-icon">
              <Icon name="search" size={22} />
            </span>
            <p>No courses found. Try another skill.</p>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onReset}>
              View all courses
            </button>
          </Reveal>
        ) : (
          <div className="featured__grid">
            {courses.map((course, i) => (
              <Reveal
                as="article"
                delay={(i % 3) + 1}
                className="course-card"
                key={course.id}
              >
                <div className="course-card__media">
                  <img src={course.image} alt="" loading="lazy" />
                  <span className="course-card__category">{course.category}</span>
                  <div className="course-card__hover">
                    <a href="#final-cta" className="btn btn-primary btn-sm">
                      View course
                      <Icon name="arrowUpRight" size={16} />
                    </a>
                  </div>
                </div>

                <div className="course-card__body">
                  <h3 className="course-card__title">{course.title}</h3>

                  <div className="course-card__instructor">
                    <img src={course.instructorAvatar} alt="" />
                    <div>
                      <strong>{course.instructor}</strong>
                      <span>{course.instructorRole}</span>
                    </div>
                  </div>

                  <div className="course-card__rating">
                    <span className="course-card__stars">
                      <Icon name="star" size={14} />
                      {course.rating}
                    </span>
                    <span className="course-card__rating-count">
                      ({course.ratingCount.toLocaleString()})
                    </span>
                  </div>

                  <ul className="course-card__meta">
                    <li>
                      <Icon name="clock" size={15} />
                      {course.duration}
                    </li>
                    <li>
                      <Icon name="layers" size={15} />
                      {course.level}
                    </li>
                    <li>
                      <Icon name="checkCircle" size={15} />
                      {course.projects} projects
                    </li>
                    <li>
                      <Icon name="users" size={15} />
                      {course.learners}
                    </li>
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
