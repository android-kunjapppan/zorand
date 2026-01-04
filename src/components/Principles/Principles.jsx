import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./Principles.scss";

const PrincipleCard = ({ title, desc }) => {
  const [ref, isInView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`principle-card fade-in-section ${isInView ? "in-view" : ""}`}
    >
      <span className="accent-line" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

const Principles = () => {
  return (
    <section className="principles section-padding">
      <div className="principles-inner max-width">
        <h2>
          Proof over <span>Promises</span>
        </h2>
        <p className="subtitle">
          We don’t hype results — we engineer growth with a system that compounds.
        </p>

        <div className="principles-grid">
          <PrincipleCard
            title="Track right"
            desc="GA4, pixels, calls, forms, and WhatsApp attribution — implemented correctly."
          />
          <PrincipleCard
            title="Run smart"
            desc="Google Ads for demand capture, Meta for scale and retargeting."
          />
          <PrincipleCard
            title="Improve weekly"
            desc="Relentless experimentation, optimization, and budget refinement."
          />
          <PrincipleCard
            title="Report clearly"
            desc="Insights, actions, and next steps — no fluff, no confusion."
          />
          <PrincipleCard
            title="Start with a pilot"
            desc="Validate performance first, then scale with confidence."
          />
        </div>

        <h3 className="non-neg-title">Our non-negotiables</h3>

        <div className="non-negotiables">
          <span>No black-box reporting</span>
          <span>Clear KPI ownership (CPL, CVR, lead quality)</span>
          <span>Weekly structured experiments</span>
          <span>Spend only on measurable actions</span>
          <span>Decisions backed by data — not opinions</span>
        </div>
      </div>
    </section>
  );
};

export default Principles;
