import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./LearnByDoing.css";

const LESSONS = [
  { id: 1, label: "Understanding user needs", state: "done" },
  { id: 2, label: "Wireframing the flow", state: "done" },
  { id: 3, label: "Building the prototype", state: "active" },
  { id: 4, label: "Usability testing", state: "todo" },
  { id: 5, label: "Final case study", state: "todo" },
];

const OUTCOMES = [
  { id: "projects", icon: "layers", label: "Real projects", desc: "Ship work you can put in a portfolio" },
  { id: "challenges", icon: "target", label: "Weekly challenges", desc: "Apply each lesson right after you learn it" },
  { id: "practice", icon: "code", label: "Guided practice", desc: "Feedback loops, not just video playback" },
  { id: "certificates", icon: "badge", label: "Certificates", desc: "Verified proof of what you can now do" },
];

export default function LearnByDoing() {
  return (
    <section className="doing" id="learn-by-doing">
      <div className="container doing__inner">
        <Reveal className="doing__copy">
          <span className="eyebrow">Learning by doing</span>
          <h2 className="section-heading">Don't just watch. Build.</h2>
          <p className="section-sub">
            Every lesson leads somewhere: a prototype, a working feature, a
            campaign brief. You leave with proof of what you can do, not
            just a list of videos you finished.
          </p>

          <ul className="doing__outcomes">
            {OUTCOMES.map((o) => (
              <li key={o.id}>
                <span className="doing__outcome-icon">
                  <Icon name={o.icon} size={18} />
                </span>
                <div>
                  <strong>{o.label}</strong>
                  <p>{o.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={2} className="doing__mockup">
          <div className="mockup">
            <div className="mockup__titlebar">
              <span className="mockup__dot" />
              <span className="mockup__dot" />
              <span className="mockup__dot" />
              <span className="mockup__crumb">Product Designer Path / Prototyping</span>
            </div>

            <div className="mockup__body">
              <aside className="mockup__lessons">
                <div className="mockup__progress-label">
                  <span>Module progress</span>
                  <span>3 / 5</span>
                </div>
                <div className="mockup__progress-track">
                  <div className="mockup__progress-fill" />
                </div>

                <ol>
                  {LESSONS.map((lesson) => (
                    <li key={lesson.id} className={`mockup__lesson mockup__lesson--${lesson.state}`}>
                      <span className="mockup__lesson-icon">
                        {lesson.state === "done" ? (
                          <Icon name="check" size={12} strokeWidth={2.4} />
                        ) : lesson.state === "active" ? (
                          <Icon name="play" size={10} />
                        ) : (
                          lesson.id
                        )}
                      </span>
                      {lesson.label}
                    </li>
                  ))}
                </ol>
              </aside>

              <div className="mockup__preview">
                <div className="mockup__video">
                  <img
                    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80"
                    alt="Prototype lesson preview showing a design workspace"
                    loading="lazy"
                  />
                  <span className="mockup__play">
                    <Icon name="play" size={18} />
                  </span>
                </div>

                <div className="mockup__task">
                  <div className="mockup__task-head">
                    <Icon name="target" size={16} />
                    <strong>Project checkpoint</strong>
                  </div>
                  <p>Ship a clickable prototype for the onboarding flow.</p>
                  <div className="mockup__badges">
                    <span className="mockup__badge">
                      <Icon name="checkCircle" size={13} /> Reviewed by mentor
                    </span>
                    <span className="mockup__badge mockup__badge--gold">
                      <Icon name="badge" size={13} /> Certificate on completion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
