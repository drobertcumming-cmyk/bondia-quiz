let initialized = false

export function initKlaviyo() {
  const publicKey = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY
  if (!publicKey || initialized) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${publicKey}`
  document.head.appendChild(script)

  initialized = true
}

function getLearnQ() {
  if (typeof window === 'undefined') return { push() {} }
  window._learnq = window._learnq || []
  return window._learnq
}

export function identifyProfile(email, properties = {}) {
  getLearnQ().push([
    'identify',
    {
      $email: email,
      ...properties,
    },
  ])
}

export function trackEvent(eventName, properties = {}) {
  getLearnQ().push(['track', eventName, properties])
}

export function submitQuizToKlaviyo({ email, segment, score, answers, utmParams }) {
  const segmentTag = `bondia-${segment}`

  const profileProps = {
    'Bondia Quiz Segment': segmentTag,
    'Bondia Quiz Score': score,
  }

  if (utmParams.utm_source) profileProps['UTM Source'] = utmParams.utm_source
  if (utmParams.utm_medium) profileProps['UTM Medium'] = utmParams.utm_medium
  if (utmParams.utm_campaign) profileProps['UTM Campaign'] = utmParams.utm_campaign
  if (utmParams.utm_content) profileProps['UTM Content'] = utmParams.utm_content
  if (utmParams.utm_term) profileProps['UTM Term'] = utmParams.utm_term

  identifyProfile(email, profileProps)

  trackEvent('Bondia Quiz Completed', {
    segment: segmentTag,
    score,
    answers,
    ...utmParams,
  })
}
