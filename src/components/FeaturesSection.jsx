import FeatureCard from './FeatureCard';

const features = [
  {
    icon: 'fa-solid fa-eye',
    iconColor: 'cyan',
    title: 'Predictive Intelligence',
    description:
      'Ask any question about markets, trends, or outcomes. The Predictor runs Bayesian models across millions of data points to forecast what comes next.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    iconColor: 'purple',
    title: 'Real-Time Analytics',
    description:
      'Live dashboards with AI-generated insights. Watch predictions update in real time as new data flows in.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    iconColor: 'green',
    title: 'Confidence Scoring',
    description:
      'Every prediction comes with a statistically-calibrated confidence score derived from Monte Carlo simulations, so you know exactly how much weight to give each forecast.',
  },
  {
    icon: 'fa-solid fa-microscope',
    iconColor: 'amber',
    title: 'Deep Research',
    description:
      'Every prediction is backed by exhaustive research — cross-referencing thousands of sources, academic papers, and live data feeds before generating a forecast.',
  },
];

function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="features__header">
        <p className="section__label">Features</p>
        <h2 className="section__title">Built for the Future</h2>
        <p className="section__subtitle">
          Powerful AI capabilities designed to give you an edge in understanding what comes next.
        </p>
      </div>
      <div className="features__grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
