import { scrollToId } from "../../utils/scroll";
import "./Footer.css";

const PLATFORM_LINKS = [
  { label: "Courses", href: "#featured-courses" },
  { label: "Learning Paths", href: "#learning-paths" },
  { label: "Instructors", href: "#featured-courses" },
];

const LEARNING_LINKS = [
  "AI & Technology",
  "Design",
  "Coding",
  "Business",
  "Marketing",
];

const COMPANY_LINKS = [
  { label: "About", href: "#top" },
  { label: "Careers", href: "#top" },
  { label: "Contact", href: "#top" },
];

const SOCIALS = ["X", "LinkedIn", "Instagram", "YouTube"];

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            NovaLearn
          </a>
          <p>
            A guided way to learn. Discover a clear path, build real work,
            and become who you're working toward.
          </p>
          <ul className="footer__socials">
            {SOCIALS.map((s) => (
              <li key={s}>
                <a href="#top">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__groups">
          <div className="footer__group">
            <h3>Platform</h3>
            <ul>
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__group">
            <h3>Learning</h3>
            <ul>
              {LEARNING_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#featured-courses"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(label);
                      scrollToId("featured-courses");
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__group">
            <h3>Company</h3>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} NovaLearn. All rights reserved.</span>
        <span className="footer__tagline">
          Learn something. Build something. Become something.
        </span>
      </div>
    </footer>
  );
}
