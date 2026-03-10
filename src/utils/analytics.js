let initialized = false

export function initGA() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (!measurementId || initialized) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  initialized = true
}

function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

export function trackQuizStarted() {
  gtag('event', 'quiz_started', {
    event_category: 'bondia_quiz',
  })
}

export function trackQuestionAnswered(questionNumber, optionIndex) {
  gtag('event', 'question_answered', {
    event_category: 'bondia_quiz',
    question_number: questionNumber,
    option_selected: optionIndex,
  })
}

export function trackEmailSubmitted(segment) {
  gtag('event', 'email_submitted', {
    event_category: 'bondia_quiz',
    segment,
  })
}

export function trackResultViewed(segment) {
  gtag('event', 'result_viewed', {
    event_category: 'bondia_quiz',
    segment,
  })
}
