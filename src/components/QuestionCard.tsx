import type { Question } from '../types'

interface Props {
  question: Question
  selected?: string
  onSelect: (value: string) => void
  onBack: () => void
  isFirst: boolean
}

export function QuestionCard({ question, selected, onSelect, onBack, isFirst }: Props) {
  return (
    <div class="transition-opacity duration-200">
      <h2 class="text-2xl font-bold text-stone-800 mb-2">{question.title}</h2>
      <p class="text-stone-500 mb-6">{question.subtitle}</p>

      <div class="space-y-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            class={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 cursor-pointer ${
              selected === opt.value
                ? 'border-amber-600 bg-amber-50'
                : 'border-stone-200 hover:border-amber-300 bg-white'
            }`}
          >
            <div class="font-semibold text-stone-800">{opt.label}</div>
            <div class="text-sm text-stone-500 mt-0.5">{opt.description}</div>
          </button>
        ))}
      </div>

      {!isFirst && (
        <button
          onClick={onBack}
          class="mt-6 text-stone-400 hover:text-stone-600 text-sm cursor-pointer transition-colors"
        >
          &larr; Back
        </button>
      )}
    </div>
  )
}
