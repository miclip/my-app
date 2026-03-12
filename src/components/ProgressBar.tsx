interface Props {
  current: number
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const pct = ((current + 1) / total) * 100

  return (
    <div class="mb-8">
      <div class="flex justify-between text-sm text-stone-500 mb-2">
        <span>Question {current + 1} of {total}</span>
      </div>
      <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
        <div
          class="h-full bg-amber-600 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
