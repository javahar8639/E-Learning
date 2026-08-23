import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import "./LoginModal.css";

export default function LoginModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const close = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="login-modal__backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <button
          type="button"
          className="login-modal__close"
          aria-label="Close login dialog"
          onClick={close}
        >
          <Icon name="close" size={18} />
        </button>

        <span className="eyebrow">Welcome back</span>
        <h2 id="login-modal-title" className="login-modal__title">
          Log in to NovaLearn
        </h2>
        <p className="login-modal__sub">
          Pick up your learning path right where you left off.
        </p>

        <form
          className="login-modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="login-modal__field">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label className="login-modal__field">
            <span>Password</span>
            <input type="password" placeholder="••••••••" required />
          </label>

          <button type="submit" className="btn btn-primary login-modal__submit">
            Log in
          </button>

          {submitted && (
            <p className="login-modal__note" role="status">
              This is a design preview. Accounts aren't enabled yet.
            </p>
          )}
        </form>

        <p className="login-modal__footer">
          New to NovaLearn?{" "}
          <a href="#final-cta" onClick={close}>
            Start learning free
          </a>
        </p>
      </div>
    </div>
  );
}
