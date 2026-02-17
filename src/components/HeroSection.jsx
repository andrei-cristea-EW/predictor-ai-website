import AIChatGraphic from './AIChatGraphic';

function HeroSection({ onJoinClick }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__badge">
          <i className="fa-solid fa-bolt"></i>
          AI-Powered Predictions
        </div>
        <h1 className="hero__title">
          See Tomorrow,<br />
          <span>Today.</span>
        </h1>
        <p className="hero__subtitle">
          The Predictor is your AI-powered analytics companion. Ask questions about any market, trend, or outcome — and get data-driven forecasts you can trust.
        </p>
        <button className="btn-glow" onClick={onJoinClick}>
          Get Early Access
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="hero__graphic">
        <AIChatGraphic />
      </div>
    </section>
  );
}

export default HeroSection;
