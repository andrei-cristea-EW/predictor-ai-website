function ShowcaseSection() {
  return (
    <section className="showcase" id="showcase">
      <div className="showcase__header">
        <p className="section__label">Showcase</p>
        <h2 className="section__title">See It in Action</h2>
        <p className="section__subtitle">
          From conversational AI to real-time dashboards, The Predictor transforms how you make decisions.
        </p>
      </div>

      {/* Row 1: Conversational Predictions */}
      <div className="showcase__row">
        <div className="showcase__text">
          <h3>Conversational Predictions</h3>
          <p>
            Ask questions in plain language and receive detailed forecasts complete with supporting data, charts, and confidence intervals. No complex queries or code needed.
          </p>
          <ul className="showcase__features-list">
            <li><i className="fa-solid fa-check"></i> Natural language interface</li>
            <li><i className="fa-solid fa-check"></i> Inline charts and visualizations</li>
            <li><i className="fa-solid fa-check"></i> Follow-up question support</li>
            <li><i className="fa-solid fa-check"></i> Export predictions as reports</li>
          </ul>
        </div>
        <div className="showcase__visual">
          <div className="mockup-chat">
            <div className="mockup-chat__messages">
              <div className="mockup-msg mockup-msg--user">
                Will demand for EVs increase in Europe this quarter?
              </div>
              <div className="mockup-msg mockup-msg--ai">
                Based on current regulatory trends, consumer sentiment data, and manufacturing output — yes, I project a <strong>14% increase</strong> in Q2 EV demand across the EU.
                <div className="mockup-msg__prediction">
                  <i className="fa-solid fa-arrow-trend-up"></i> Confidence: 91% &nbsp;|&nbsp; Sources: 2,847 data points
                </div>
              </div>
              <div className="mockup-msg mockup-msg--user">
                Which manufacturers will benefit most?
              </div>
              <div className="mockup-msg mockup-msg--ai">
                Top 3 projected beneficiaries based on market positioning and supply chain readiness:
                <div className="mockup-msg__prediction">
                  1. VW Group (+18%) &nbsp; 2. Stellantis (+12%) &nbsp; 3. BMW (+9%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Dashboard Analytics */}
      <div className="showcase__row showcase__row--reverse">
        <div className="showcase__text">
          <h3>Dashboard Analytics</h3>
          <p>
            Monitor all your predictions in one place with real-time dashboards. Track accuracy over time, compare models, and drill into the data behind every forecast.
          </p>
          <ul className="showcase__features-list">
            <li><i className="fa-solid fa-check"></i> Real-time data streaming</li>
            <li><i className="fa-solid fa-check"></i> Multi-model comparison</li>
            <li><i className="fa-solid fa-check"></i> Historical accuracy tracking</li>
            <li><i className="fa-solid fa-check"></i> Custom alert thresholds</li>
          </ul>
        </div>
        <div className="showcase__visual">
          <div className="mockup-dashboard">
            <div className="mockup-dashboard__stats">
              <div className="mockup-stat">
                <div className="mockup-stat__label">ACCURACY</div>
                <div className="mockup-stat__value mockup-stat__value--green">94.2%</div>
              </div>
              <div className="mockup-stat">
                <div className="mockup-stat__label">PREDICTIONS</div>
                <div className="mockup-stat__value mockup-stat__value--cyan">12,847</div>
              </div>
              <div className="mockup-stat">
                <div className="mockup-stat__label">AVG CONF.</div>
                <div className="mockup-stat__value mockup-stat__value--purple">87.6%</div>
              </div>
            </div>
            <div className="mockup-dashboard__chart">
              <div className="mockup-dashboard__chart-title">WEEKLY PREDICTION VOLUME</div>
              <div className="mockup-bars">
                <div className="mockup-bar mockup-bar--cyan" style={{ height: '45%' }}></div>
                <div className="mockup-bar mockup-bar--purple" style={{ height: '62%' }}></div>
                <div className="mockup-bar mockup-bar--cyan" style={{ height: '38%' }}></div>
                <div className="mockup-bar mockup-bar--green" style={{ height: '80%' }}></div>
                <div className="mockup-bar mockup-bar--cyan" style={{ height: '55%' }}></div>
                <div className="mockup-bar mockup-bar--purple" style={{ height: '72%' }}></div>
                <div className="mockup-bar mockup-bar--green" style={{ height: '90%' }}></div>
                <div className="mockup-bar mockup-bar--cyan" style={{ height: '68%' }}></div>
                <div className="mockup-bar mockup-bar--purple" style={{ height: '85%' }}></div>
                <div className="mockup-bar mockup-bar--green" style={{ height: '95%' }}></div>
                <div className="mockup-bar mockup-bar--cyan" style={{ height: '60%' }}></div>
                <div className="mockup-bar mockup-bar--purple" style={{ height: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
