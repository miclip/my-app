import type { Machine } from '../types'

interface Props {
  machine: Machine
}

export function MachineCard({ machine }: Props) {
  return (
    <div class="bg-white rounded-xl border border-stone-200 p-5">
      <div class="flex justify-between items-start mb-3">
        <h3 class="font-bold text-stone-800 text-lg">{machine.name}</h3>
        <span class="text-sm text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded-md whitespace-nowrap ml-3">
          {machine.priceRange}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div class="font-medium text-green-700 mb-1">Pros</div>
          <ul class="space-y-1 text-stone-600">
            {machine.pros.map((p) => (
              <li key={p}>+ {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <div class="font-medium text-red-700 mb-1">Cons</div>
          <ul class="space-y-1 text-stone-600">
            {machine.cons.map((c) => (
              <li key={c}>- {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
