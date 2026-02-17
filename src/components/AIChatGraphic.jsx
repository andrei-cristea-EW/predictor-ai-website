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
          Should I go long on AAPL this week?
        </div>
        {/* Reasoning/Research panel */}
        <div className="chat-graphic__thinking">
          <div className="thinking__header">
            <i className="fa-solid fa-brain"></i>
            <span className="thinking__title">Reasoning</span>
            <span className="thinking__status"><i className="fa-solid fa-circle-check"></i> Complete</span>
            <i className="fa-solid fa-chevron-down thinking__chevron"></i>
          </div>
          <div className="thinking__body">
            <div className="thinking__sources">
              <div className="thinking__sources-header">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
                <span>Analyzing sources</span>
                <span className="thinking__counter">2,847</span>
              </div>
              <div className="thinking__source-list">
                <div className="thinking__source-item">
                  <span className="thinking__source-dot thinking__source-dot--done"></span>
                  SEC 10-Q filings (AAPL)
                </div>
                <div className="thinking__source-item">
                  <span className="thinking__source-dot thinking__source-dot--done"></span>
                  Reuters market sentiment feed
                </div>
                <div className="thinking__source-item">
                  <span className="thinking__source-dot thinking__source-dot--done"></span>
                  Options chain data (CBOE)
                </div>
                <div className="thinking__source-item">
                  <span className="thinking__source-dot thinking__source-dot--done"></span>
                  Technical indicators (RSI, MACD, BB)
                </div>
                <div className="thinking__source-item thinking__source-item--faded">
                  <span className="thinking__source-dot thinking__source-dot--done"></span>
                  +12 more sources
                </div>
              </div>
            </div>
            <div className="thinking__math">
              <div className="thinking__math-label">
                <i className="fa-solid fa-square-root-variable"></i>
                <span>Bayesian inference</span>
              </div>
              <div className="thinking__formula">
                P(↑ | D) = <span className="formula__frac"><span className="formula__num">P(D | ↑) · P(↑)</span><span className="formula__den">P(D)</span></span> = <span className="formula__frac"><span className="formula__num">0.82 × 0.61</span><span className="formula__den">0.58</span></span> = <span className="formula__result">0.862</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-bubble chat-bubble--ai">
          <div className="chat-bubble__label">Predictor</div>
          Yes — go long. Momentum is bullish with strong upside probability:
        </div>
      </div>

      {/* Main chart */}
      <div className="chat-graphic__chart-container">
        <div className="chat-graphic__chart-wrapper">
          <svg viewBox="0 0 440 100" className="chat-graphic__chart" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="25" x2="440" y2="25" className="chart-grid" />
            <line x1="0" y1="50" x2="440" y2="50" className="chart-grid" />
            <line x1="0" y1="75" x2="440" y2="75" className="chart-grid" />

            {/* Y-axis labels */}
            <text x="4" y="23" className="chart-label">$245</text>
            <text x="4" y="48" className="chart-label">$230</text>
            <text x="4" y="73" className="chart-label">$215</text>

            {/* Confidence band */}
            <polygon
              points="280,42 310,36 340,30 370,26 400,22 430,18 430,40 400,38 370,35 340,42 310,46 280,42"
              className="chart-confidence"
            />

            {/* Historical line */}
            <polyline
              points="30,88 60,76 90,80 120,66 150,70 180,58 210,62 240,50 270,47 280,42"
              className="chart-line-history"
            />

            {/* Prediction line */}
            <polyline
              points="280,42 310,40 340,35 370,30 400,28 430,22"
              className="chart-line-prediction"
              style={{
                strokeDasharray: 200,
                strokeDashoffset: 200,
                animation: 'drawLine 1.5s ease forwards 1.2s',
              }}
            />

            {/* Current point */}
            <circle cx="280" cy="42" r="3" fill="#00c8ff" />

            {/* Prediction end point */}
            <circle cx="430" cy="22" r="2.5" className="chart-pulse-dot" />

            {/* X-axis labels */}
            <text x="30" y="96" className="chart-label">Mon</text>
            <text x="150" y="96" className="chart-label">Wed</text>
            <text x="270" y="96" className="chart-label">Fri</text>
            <text x="390" y="96" className="chart-label">Next</text>
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
