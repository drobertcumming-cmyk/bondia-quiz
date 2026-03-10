const STORAGE_KEY = 'bondia-quiz-state'

export function saveQuizState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (_) {
    /* storage unavailable */
  }
}

export function loadQuizState() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (_) {
    return null
  }
}

export function clearQuizState() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (_) {
    /* storage unavailable */
  }
}

export function captureUtmParams() {
  const params = new URLSearchParams(window.location.search)
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  const utm = {}
  keys.forEach((key) => {
    const value = params.get(key)
    if (value) utm[key] = value
  })
  return utm
}
