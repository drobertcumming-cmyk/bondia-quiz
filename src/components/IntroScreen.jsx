export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-wrap fade-in">
      <span className="intro-icon">🦴</span>
      <div className="intro-title">What's your true bone health risk?</div>
      <div className="divider"></div>
      <p className="intro-body">
        Most women don't think about bone health until a fracture happens. But bone loss begins as
        early as 35 — decades before standard screening at 65. This assessment reveals your personal
        risk profile and what you can do about it now.
      </p>
      <div className="intro-meta">
        <div className="intro-meta-item">
          <span className="intro-meta-value">8</span>
          <span className="intro-meta-label">Questions</span>
        </div>
        <div className="intro-meta-item">
          <span className="intro-meta-value">3 min</span>
          <span className="intro-meta-label">To complete</span>
        </div>
        <div className="intro-meta-item">
          <span className="intro-meta-value">Free</span>
          <span className="intro-meta-label">Personalised report</span>
        </div>
      </div>
      <button
        className="btn-next active"
        onClick={onStart}
        style={{ display: 'block', margin: '0 auto' }}
      >
        Begin Assessment
      </button>
    </div>
  )
}
