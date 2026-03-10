import { questions } from '../data/questions'

export default function QuizScreen({ currentQ, answers, onSelect, onNext, onBack }) {
  const q = questions[currentQ]
  const selected = answers[currentQ]
  const progress = ((currentQ + 1) / questions.length) * 100
  const isLast = currentQ === questions.length - 1

  return (
    <div className="fade-in">
      <div className="progress-wrap">
        <div className="progress-meta">
          <span className="progress-label">Your Assessment</span>
          <span className="progress-label">
            Question {currentQ + 1} of {questions.length}
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="question-wrap" key={currentQ}>
        <div className="question-number">Question {q.number}</div>
        <div className="question-text">{q.text}</div>
        {q.sub && <div className="question-subtext">{q.sub}</div>}
        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${selected === i ? 'selected' : ''}`}
              onClick={() => onSelect(i)}
            >
              <div className="option-indicator" />
              <div className="option-text">{opt.text}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="nav">
        <button className="btn-back" onClick={onBack} disabled={currentQ === 0}>
          &larr; Back
        </button>
        <button
          className={`btn-next ${selected != null ? 'active' : ''}`}
          onClick={onNext}
        >
          {isLast ? 'See My Results \u2192' : 'Continue \u2192'}
        </button>
      </div>
    </div>
  )
}
