import { useState } from 'preact/hooks'
import type { UserProfile, Category } from './types'
import { questions } from './data/questions'
import { QuestionCard } from './components/QuestionCard'
import { ProgressBar } from './components/ProgressBar'
import { ResultsPage } from './components/ResultsPage'
import { recommend } from './engine/recommend'

type Phase = 'quiz' | 'results'

export function App() {
  const [phase, setPhase] = useState<Phase>('quiz')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<UserProfile>>({})
  const [results, setResults] = useState<Category[]>([])

  const question = questions[step]

  function handleSelect(value: string) {
    const updated = { ...answers, [question.id]: value }
    setAnswers(updated)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setResults(recommend(updated as UserProfile))
      setPhase('results')
    }
  }

  function handleBack() {
    if (step > 0) setStep(step - 1)
  }

  function handleStartOver() {
    setPhase('quiz')
    setStep(0)
    setAnswers({})
    setResults([])
  }

  return (
    <div class="min-h-screen bg-stone-100 px-4 py-8 sm:py-12">
      <div class="max-w-lg mx-auto">
        <header class="mb-8 text-center">
          <h1 class="text-3xl font-bold text-stone-800">Coffee Machine Guide</h1>
          <p class="text-stone-500 mt-1">Find your perfect brew setup</p>
        </header>

        {phase === 'quiz' ? (
          <>
            <ProgressBar current={step} total={questions.length} />
            <QuestionCard
              question={question}
              selected={answers[question.id]}
              onSelect={handleSelect}
              onBack={handleBack}
              isFirst={step === 0}
            />
          </>
        ) : (
          <ResultsPage categories={results} onStartOver={handleStartOver} />
        )}
      </div>
    </div>
  )
}
