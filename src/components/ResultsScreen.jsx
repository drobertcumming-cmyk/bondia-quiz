import { useEffect } from 'react'
import { segments } from '../data/segments'

export default function ResultsScreen({ segment }) {
  const s = segments[segment]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="results-wrap fade-in">
      <div>
        <div className="result-badge" style={{ color: s.badgeColor, background: s.badgeBg }}>
          {s.badge}
        </div>
        <div className="result-title">{s.title}</div>
        <div className="stat-highlight">{s.stat}</div>
        <div className="stat-label">{s.statLabel}</div>
        <div className="result-body">{s.body}</div>
        <div className="result-insights">
          <div className="result-insights-title">What this means for you</div>
          <ul>
            {s.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </div>
        <div className="result-ctas">
          <a
            className="cta-primary"
            href={s.cta1Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.cta1}
          </a>
          <a
            className="cta-secondary"
            href={s.cta2Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {s.cta2}
          </a>
        </div>
      </div>
    </div>
  )
}
