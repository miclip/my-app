import type { UserProfile, Category } from '../types'

type ScoreMap = Record<Category, number>

function emptyScores(): ScoreMap {
  return {
    pour_over: 0,
    single_boiler: 0,
    double_boiler: 0,
    built_in_grinder: 0,
    manual_lever: 0,
  }
}

export function recommend(profile: UserProfile): Category[] {
  const scores = emptyScores()

  // Budget
  switch (profile.budget) {
    case 'low':
      scores.pour_over += 3
      scores.manual_lever += 1
      break
    case 'mid':
      scores.single_boiler += 3
      scores.manual_lever += 2
      scores.pour_over += 1
      break
    case 'high':
      scores.double_boiler += 3
      scores.built_in_grinder += 2
      scores.single_boiler += 1
      break
    case 'no_limit':
      scores.double_boiler += 3
      scores.built_in_grinder += 3
      scores.manual_lever += 1
      break
  }

  // Cups per day
  switch (profile.cupsPerDay) {
    case '1':
      scores.pour_over += 2
      scores.manual_lever += 2
      break
    case '2-3':
      scores.single_boiler += 2
      scores.built_in_grinder += 2
      scores.double_boiler += 1
      break
    case '4+':
      scores.double_boiler += 3
      scores.built_in_grinder += 3
      break
  }

  // Milk drinks
  switch (profile.milkDrinks) {
    case 'yes':
      scores.double_boiler += 3
      scores.built_in_grinder += 2
      scores.single_boiler += 1
      break
    case 'sometimes':
      scores.single_boiler += 2
      scores.double_boiler += 1
      scores.built_in_grinder += 1
      break
    case 'no':
      scores.pour_over += 2
      scores.manual_lever += 2
      break
  }

  // Counter space
  switch (profile.counterSpace) {
    case 'small':
      scores.pour_over += 3
      scores.manual_lever += 2
      break
    case 'medium':
      scores.single_boiler += 1
      scores.built_in_grinder += 1
      break
    case 'large':
      scores.double_boiler += 2
      scores.built_in_grinder += 1
      break
  }

  // Willingness to learn
  switch (profile.willingnessToLearn) {
    case 'minimal':
      scores.built_in_grinder += 3
      scores.pour_over += 1
      break
    case 'moderate':
      scores.single_boiler += 2
      scores.double_boiler += 2
      break
    case 'enthusiast':
      scores.manual_lever += 3
      scores.single_boiler += 1
      scores.pour_over += 1
      break
  }

  return (Object.entries(scores) as [Category, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([cat]) => cat)
}
