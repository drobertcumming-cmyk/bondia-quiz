import { useState } from 'react'

export default function EmailGate({ onSubmit }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit() {
    if (!email || !email.includes('@')) {
      setError(true)
      return
    }
    onSubmit(email)
  }

  return (
    <div className="email-gate fade-in">
      <div className="gate-eyebrow">Your results are ready</div>
      <div className="gate-title">
        Where should we send
        <br />
        your bone health report?
      </div>
      <p className="gate-subtitle">
        Your personalised risk profile — including what your gut health signals mean for your bones
        — delivered instantly to your inbox.
      </p>
      <div className={`email-input-wrap ${error ? 'email-input-error' : ''}`}>
        <input
          type="email"
          className="email-input"
          placeholder={error ? 'Please enter a valid email' : 'your@email.com'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError(false)
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button className="btn-submit" onClick={handleSubmit}>
          View Results
        </button>
      </div>
      <p className="gate-disclaimer">No spam. Unsubscribe any time. Your data is never sold.</p>
    </div>
  )
}
