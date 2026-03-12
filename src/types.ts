export type Budget = 'low' | 'mid' | 'high' | 'no_limit'
export type CupsPerDay = '1' | '2-3' | '4+'
export type MilkDrinks = 'yes' | 'no' | 'sometimes'
export type CounterSpace = 'small' | 'medium' | 'large'
export type WillingnessToLearn = 'minimal' | 'moderate' | 'enthusiast'

export interface UserProfile {
  budget: Budget
  cupsPerDay: CupsPerDay
  milkDrinks: MilkDrinks
  counterSpace: CounterSpace
  willingnessToLearn: WillingnessToLearn
}

export type Category =
  | 'pour_over'
  | 'single_boiler'
  | 'double_boiler'
  | 'built_in_grinder'
  | 'manual_lever'

export interface Machine {
  name: string
  category: Category
  priceRange: string
  pros: string[]
  cons: string[]
}

export interface Question {
  id: keyof UserProfile
  title: string
  subtitle: string
  options: { value: string; label: string; description: string }[]
}

export interface CategoryInfo {
  name: string
  tagline: string
  description: string
}
