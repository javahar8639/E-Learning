import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./LearningPaths.css";

export default function LearningPaths({ paths, searchQuery }) {
  return (
    <section className="paths" id="learning-paths">
      <div className="container">
        <Reveal className="section-head section-head--row">
          <div>
            <span className="eyebrow">Curated journeys</span>
            <h2 className="section-heading">Choose a path, not a catalog.</h2>
            <p className="section-sub">
              Every path strings courses and projects into one sequence:
              learn a concept, practice it, build with it, then master it.
            </p>
            {searchQuery && (
              <p className="paths__filter-note">
                Showing paths related to “{searchQuery}”.
              </p>
            )}
          </div>
          <a href="#final-cta" className="btn btn-ghost">
            Not sure where to start? Find My Learning Path
            <Icon name="arrowRight" size={17} className="btn-arrow" />
          </a>
        </Reveal>

        <div className="paths__list">
          {paths.map((path, i) => (
            <Reveal as="article" delay={(i % 3) + 1} className="path-row" key={path.id}>
              <div className="path-row__media">
                <img src={path.image} alt="" loading="lazy" />
              </div>

              <div className="path-row__body">
                <div className="path-row__meta">
                  <span className="path-row__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="path-row__level">{path.level}</span>
                </div>

                <h3 className="path-row__title">{path.title}</h3>
                <p className="path-row__desc">{path.description}</p>

                <ol className="path-row__stages" aria-label="Path stages">
                  {path.stages.map((stage, si) => (
                    <li key={stage}>
                      <span className="path-row__dot" />
                      {stage}
                      {si < path.stages.length - 1 && (
                        <Icon name="arrowRight" size={14} />
                      )}
                    </li>
                  ))}
                </ol>

                <div className="path-row__stats">
                  <span>
                    <Icon name="clock" size={16} />
                    {path.duration}
                  </span>
                  <span>
                    <Icon name="layers" size={16} />
                    {path.courses} courses
                  </span>
                  <span>
                    <Icon name="checkCircle" size={16} />
                    {path.projects} projects
                  </span>
                </div>

                <a href="#final-cta" className="btn btn-secondary btn-sm path-row__cta">
                  View path
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
