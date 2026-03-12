import type { Category } from '../types'
import { categoryInfo } from '../data/machines'
import { machines } from '../data/machines'
import { MachineCard } from './MachineCard'

interface Props {
  categories: Category[]
  onStartOver: () => void
}

export function ResultsPage({ categories, onStartOver }: Props) {
  const top = categories[0]
  const also = categories[1]
  const topInfo = categoryInfo[top]
  const alsoInfo = categoryInfo[also]
  const topMachines = machines.filter((m) => m.category === top)
  const alsoMachines = machines.filter((m) => m.category === also)

  return (
    <div class="transition-opacity duration-200">
      <h2 class="text-2xl font-bold text-stone-800 mb-1">Your Recommendation</h2>
      <p class="text-stone-500 mb-8">Based on your preferences, here's what we suggest.</p>

      {/* Top pick */}
      <div class="mb-10">
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
          <div class="text-xs uppercase tracking-wide text-amber-700 font-semibold mb-1">
            Best Match
          </div>
          <h3 class="text-xl font-bold text-stone-800">{topInfo.name}</h3>
          <p class="text-amber-700 italic mt-1">{topInfo.tagline}</p>
          <p class="text-stone-600 mt-3 text-sm leading-relaxed">{topInfo.description}</p>
        </div>

        <div class="space-y-4">
          {topMachines.map((m) => (
            <MachineCard key={m.name} machine={m} />
          ))}
        </div>
      </div>

      {/* Also consider */}
      <div class="mb-10">
        <div class="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-5">
          <div class="text-xs uppercase tracking-wide text-stone-500 font-semibold mb-1">
            Also Consider
          </div>
          <h3 class="text-lg font-bold text-stone-800">{alsoInfo.name}</h3>
          <p class="text-stone-500 italic mt-1">{alsoInfo.tagline}</p>
          <p class="text-stone-600 mt-3 text-sm leading-relaxed">{alsoInfo.description}</p>
        </div>

        <div class="space-y-4">
          {alsoMachines.map((m) => (
            <MachineCard key={m.name} machine={m} />
          ))}
        </div>
      </div>

      <button
        onClick={onStartOver}
        class="w-full py-3 rounded-xl bg-stone-800 text-white font-semibold hover:bg-stone-700 transition-colors cursor-pointer"
      >
        Start Over
      </button>
    </div>
  )
}
