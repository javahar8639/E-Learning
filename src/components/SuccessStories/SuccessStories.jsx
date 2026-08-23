import { stats, testimonials } from "../../data/testimonials";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./SuccessStories.css";

export default function SuccessStories() {
  return (
    <section className="stories">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Proof, not promises</span>
          <h2 className="section-heading">Learners who moved forward.</h2>
          <p className="section-sub">
            A few honest outcomes from people who started exactly where you
            are now.
          </p>
        </Reveal>

        <div className="stories__grid">
          {testimonials.map((t, i) => (
            <Reveal as="article" delay={(i % 3) + 1} className="story-card" key={t.id}>
              <Icon name="quote" size={26} className="story-card__quote-icon" />
              <span className="story-card__outcome">{t.outcome}</span>
              <p className="story-card__text">&ldquo;{t.quote}&rdquo;</p>
              <div className="story-card__person">
                <img src={t.avatar} alt="" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="stories__stats">
          {stats.map((s) => (
            <div className="stories__stat" key={s.id}>
              <span className="stories__stat-value">{s.value}</span>
              <span className="stories__stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
