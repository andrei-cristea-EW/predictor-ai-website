function AIChatGraphic() {
  return (
    <div className="chat-graphic">
      {/* Title bar */}
      <div className="chat-graphic__titlebar">
        <span className="chat-graphic__dot chat-graphic__dot--red"></span>
        <span className="chat-graphic__dot chat-graphic__dot--yellow"></span>
        <span className="chat-graphic__dot chat-graphic__dot--green"></span>
        <span className="chat-graphic__titlebar-text">the-predictor v2.4</span>
      </div>

      {/* Chat messages */}
      <div className="chat-graphic__body">
        <div className="chat-bubble chat-bubble--user">
          <div className="chat-bubble__label">You</div>
          What will AAPL stock do next week?
        </div>
        <div className="chat-bubble chat-bubble--ai">
          <div className="chat-bubble__label">Predictor</div>
          Based on current momentum indicators, earnings sentiment, and market structure analysis — here is my forecast:
        </div>
      </div>

      {/* Main chart */}
      <div className="chat-graphic__chart-container">
        <div className="chat-graphic__chart-wrapper">
          <svg viewBox="0 0 440 130" className="chat-graphic__chart" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="32" x2="440" y2="32" className="chart-grid" />
            <line x1="0" y1="65" x2="440" y2="65" className="chart-grid" />
            <line x1="0" y1="98" x2="440" y2="98" className="chart-grid" />

            {/* Y-axis labels */}
            <text x="4" y="30" className="chart-label">$245</text>
            <text x="4" y="63" className="chart-label">$230</text>
            <text x="4" y="96" className="chart-label">$215</text>

            {/* Confidence band */}
            <polygon
              points="280,50 310,42 340,35 370,30 400,25 430,22 430,48 400,45 370,42 340,50 310,55 280,50"
              className="chart-confidence"
            />

            {/* Historical line */}
            <polyline
              points="30,110 60,95 90,100 120,82 150,88 180,72 210,78 240,62 270,58 280,50"
              className="chart-line-history"
            />

            {/* Prediction line */}
            <polyline
              points="280,50 310,48 340,42 370,35 400,34 430,28"
              className="chart-line-prediction"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 200,
                animation: 'drawLine 1.5s ease forwards 1.2s',
              }}
            />

            {/* Current point */}
            <circle cx="280" cy="50" r="3.5" fill="#00c8ff" />

            {/* Prediction end point */}
            <circle cx="430" cy="28" r="3" className="chart-pulse-dot" />

            {/* X-axis labels */}
            <text x="30" y="125" className="chart-label">Mon</text>
            <text x="120" y="125" className="chart-label">Wed</text>
            <text x="210" y="125" className="chart-label">Fri</text>
            <text x="300" y="125" className="chart-label">Mon</text>
            <text x="390" y="125" className="chart-label">Fri</text>
          </svg>
        </div>
      </div>

      {/* Stat badges */}
      <div className="chat-graphic__badges">
        <span className="chat-graphic__badge chat-graphic__badge--confidence">
          <i className="fa-solid fa-circle-check"></i>
          87% confidence
        </span>
        <span className="chat-graphic__badge chat-graphic__badge--rsi">
          <i className="fa-solid fa-arrow-trend-up"></i>
          RSI: 64
        </span>
        <span className="chat-graphic__badge chat-graphic__badge--vol">
          <i className="fa-solid fa-chart-bar"></i>
          Vol: +12%
        </span>
      </div>

      {/* Sparkline mini charts */}
      <div className="chat-graphic__sparklines">
        <div className="sparkline-card">
          <div className="sparkline-card__header">
            <span className="sparkline-card__label">GOOGL</span>
            <span className="sparkline-card__value sparkline-card__value--up">+2.4%</span>
          </div>
          <svg viewBox="0 0 100 24" preserveAspectRatio="none">
            <polyline
              points="0,18 12,16 24,14 36,17 48,12 60,10 72,8 84,6 100,4"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="sparkline-card">
          <div className="sparkline-card__header">
            <span className="sparkline-card__label">MSFT</span>
            <span className="sparkline-card__value sparkline-card__value--down">-0.8%</span>
          </div>
          <svg viewBox="0 0 100 24" preserveAspectRatio="none">
            <polyline
              points="0,8 12,10 24,6 36,12 48,14 60,11 72,16 84,18 100,15"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="sparkline-card">
          <div className="sparkline-card__header">
            <span className="sparkline-card__label">BTC</span>
            <span className="sparkline-card__value sparkline-card__value--up">+5.1%</span>
          </div>
          <svg viewBox="0 0 100 24" preserveAspectRatio="none">
            <polyline
              points="0,20 12,18 24,22 36,16 48,14 60,18 72,10 84,8 100,3"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AIChatGraphic;
