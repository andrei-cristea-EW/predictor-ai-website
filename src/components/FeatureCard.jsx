function FeatureCard({ icon, iconColor, title, description }) {
  return (
    <div className="feature-card">
      <div className={`feature-card__icon feature-card__icon--${iconColor}`}>
        <i className={icon}></i>
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
    </div>
  );
}

export default FeatureCard;
