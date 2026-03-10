import { useQuiz } from './hooks/useQuiz'
import IntroScreen from './components/IntroScreen'
import QuizScreen from './components/QuizScreen'
import EmailGate from './components/EmailGate'
import ResultsScreen from './components/ResultsScreen'

export default function App() {
  const quiz = useQuiz()

  return (
    <div className="container">
      <div className="brand">
        <div className="brand-name">B&#333;ndia&#8482; by S&#333;laria Bi&#333;</div>
        <div className="brand-tagline">
          Bone Health <em>Risk</em> Profiler
        </div>
      </div>

      <div className="card">
        {quiz.screen === 'intro' && <IntroScreen onStart={quiz.startQuiz} />}
        {quiz.screen === 'quiz' && (
          <QuizScreen
            currentQ={quiz.currentQ}
            answers={quiz.answers}
            onSelect={quiz.selectOption}
            onNext={quiz.nextQuestion}
            onBack={quiz.prevQuestion}
          />
        )}
        {quiz.screen === 'email' && <EmailGate onSubmit={quiz.submitEmail} />}
        {quiz.screen === 'results' && <ResultsScreen segment={quiz.segment} />}
      </div>
    </div>
  )
}
