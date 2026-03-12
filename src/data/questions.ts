import type { Question } from '../types'

export const questions: Question[] = [
  {
    id: 'budget',
    title: "What's your budget?",
    subtitle: 'This helps us narrow down the right tier of machine for you.',
    options: [
      { value: 'low', label: 'Under $100', description: 'Manual brewers & entry-level machines' },
      { value: 'mid', label: '$100 – $500', description: 'Solid semi-automatic espresso machines' },
      { value: 'high', label: '$500 – $1,500', description: 'Prosumer-grade equipment' },
      { value: 'no_limit', label: '$1,500+', description: 'Top-tier, endgame machines' },
    ],
  },
  {
    id: 'cupsPerDay',
    title: 'How many cups do you drink per day?',
    subtitle: 'Higher volume means you need faster recovery and larger boilers.',
    options: [
      { value: '1', label: 'Just one', description: 'A single morning ritual' },
      { value: '2-3', label: '2–3 cups', description: 'Moderate daily intake' },
      { value: '4+', label: '4 or more', description: 'Serious caffeine needs' },
    ],
  },
  {
    id: 'milkDrinks',
    title: 'Do you make milk-based drinks?',
    subtitle: 'Lattes, cappuccinos, and flat whites need good steam power.',
    options: [
      { value: 'yes', label: 'All the time', description: 'Lattes and cappuccinos are my go-to' },
      { value: 'sometimes', label: 'Occasionally', description: 'Nice to have but not essential' },
      { value: 'no', label: 'Black coffee only', description: 'No milk, no frills' },
    ],
  },
  {
    id: 'counterSpace',
    title: 'How much counter space do you have?',
    subtitle: 'Some machines need room for a separate grinder too.',
    options: [
      { value: 'small', label: 'Very limited', description: 'Tiny kitchen or shared space' },
      { value: 'medium', label: 'Some room', description: 'Space for one appliance' },
      { value: 'large', label: 'Plenty of space', description: 'Dedicated coffee station' },
    ],
  },
  {
    id: 'willingnessToLearn',
    title: 'How hands-on do you want to be?',
    subtitle: 'Some machines are push-button simple, others reward technique.',
    options: [
      { value: 'minimal', label: 'Just press a button', description: "I want coffee, not a hobby" },
      { value: 'moderate', label: 'Happy to learn', description: "I'll dial in a shot but keep it simple" },
      { value: 'enthusiast', label: 'Full manual control', description: 'I want to master every variable' },
    ],
  },
]
