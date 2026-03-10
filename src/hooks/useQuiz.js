import { useState, useEffect, useMemo, useCallback } from 'react'
import { questions } from '../data/questions'
import { saveQuizState, loadQuizState, clearQuizState, captureUtmParams } from '../utils/storage'
import { trackQuizStarted, trackQuestionAnswered, trackEmailSubmitted, trackResultViewed } from '../utils/analytics'
import { submitQuizToKlaviyo } from '../utils/klaviyo'

function getSegment(score) {
  if (score <= 5) return 'proactive'
  if (score <= 11) return 'atrisk'
  if (score <= 17) return 'concerned'
  return 'acting'
}

export function useQuiz() {
  const [screen, setScreen] = useState('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState(() => new Array(questions.length).fill(undefined))
  const [utmParams] = useState(() => captureUtmParams())

  // Restore saved progress on mount
  useEffect(() => {
    const saved = loadQuizState()
    if (saved && saved.answers && saved.answers.some((a) => a != null)) {
      // JSON converts undefined → null, so normalise back
      const restored = saved.answers.map((a) => (a != null ? a : undefined))
      setAnswers(restored)
      setCurrentQ(saved.currentQ || 0)
      setScreen('quiz')
    }
  }, [])

  // Persist quiz progress
  useEffect(() => {
    if (screen === 'quiz') {
      saveQuizState({ currentQ, answers })
    }
  }, [currentQ, answers, screen])

  const totalScore = useMemo(() => {
    return answers.reduce((sum, ansIdx, qIdx) => {
      if (ansIdx == null) return sum
      return sum + questions[qIdx].options[ansIdx].score
    }, 0)
  }, [answers])

  const segment = useMemo(() => getSegment(totalScore), [totalScore])

  const startQuiz = useCallback(() => {
    setScreen('quiz')
    trackQuizStarted()
  }, [])

  const selectOption = useCallback(
    (optionIndex) => {
      setAnswers((prev) => {
        const next = [...prev]
        next[currentQ] = optionIndex
        return next
      })
      trackQuestionAnswered(currentQ + 1, optionIndex)
    },
    [currentQ]
  )

  const nextQuestion = useCallback(() => {
    if (answers[currentQ] == null) return
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1)
    } else {
      setScreen('email')
    }
  }, [currentQ, answers])

  const prevQuestion = useCallback(() => {
    if (currentQ > 0) {
      setCurrentQ((q) => q - 1)
    }
  }, [currentQ])

  const submitEmail = useCallback(
    (email) => {
      const segmentTag = `bondia-${segment}`
      submitQuizToKlaviyo({ email, segment, score: totalScore, answers, utmParams })
      trackEmailSubmitted(segmentTag)
      clearQuizState()
      setScreen('results')
      trackResultViewed(segmentTag)
    },
    [segment, totalScore, answers, utmParams]
  )

  const resetQuiz = useCallback(() => {
    setScreen('intro')
    setCurrentQ(0)
    setAnswers(new Array(questions.length).fill(undefined))
    clearQuizState()
  }, [])

  return {
    screen,
    currentQ,
    answers,
    totalScore,
    segment,
    utmParams,
    startQuiz,
    selectOption,
    nextQuestion,
    prevQuestion,
    submitEmail,
    resetQuiz,
  }
}
