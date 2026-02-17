function CTASection({ onJoinClick }) {
  return (
    <section className="cta">
      <h2 className="cta__title">Ready to See the Future?</h2>
      <p className="cta__subtitle">
        Join thousands of analysts, traders, and decision-makers already on the waitlist.
      </p>
      <button className="btn-glow" onClick={onJoinClick}>
        Join the Waitlist
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </section>
  );
}

export default CTASection;
