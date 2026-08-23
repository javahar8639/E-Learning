import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="container final-cta__inner">
        <Reveal className="final-cta__content">
          <h2 className="final-cta__title">Your next skill starts here.</h2>
          <p className="final-cta__sub">
            Tell us where you want to go. We'll help you find the path,
            build the projects, and become who you're working toward.
          </p>
          <div className="final-cta__actions">
            <a href="#top" className="btn btn-primary">
              Start Learning Free
              <Icon name="arrowRight" size={18} />
            </a>
            <span className="final-cta__note">No credit card required</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
