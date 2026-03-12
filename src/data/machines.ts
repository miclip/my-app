import type { Machine, Category, CategoryInfo } from '../types'

export const categoryInfo: Record<Category, CategoryInfo> = {
  pour_over: {
    name: 'Pour Over / Manual Brewing',
    tagline: 'Simple, clean, and endlessly rewarding',
    description:
      'Manual brewers give you full control over extraction with minimal equipment. They produce clean, nuanced cups that highlight single-origin beans. Perfect for those who enjoy the ritual of brewing.',
  },
  single_boiler: {
    name: 'Single Boiler Espresso',
    tagline: 'The classic entry into real espresso',
    description:
      'Single boiler machines make excellent espresso at an accessible price. You can steam milk too — just not at the same time as pulling a shot. Ideal for learning the craft without breaking the bank.',
  },
  double_boiler: {
    name: 'Double Boiler Espresso',
    tagline: 'Prosumer power for serious home baristas',
    description:
      'With separate boilers for brewing and steaming, these machines let you pull shots and steam milk simultaneously. Temperature stability is excellent, and back-to-back drinks are no problem.',
  },
  built_in_grinder: {
    name: 'All-in-One / Built-in Grinder',
    tagline: 'Convenience without compromise',
    description:
      'These machines integrate a grinder, boiler, and often automatic milk frothing into one unit. Great for busy mornings when you want quality coffee with minimal effort and counter clutter.',
  },
  manual_lever: {
    name: 'Manual Lever Espresso',
    tagline: "The purist's path to espresso perfection",
    description:
      'Lever machines put you in direct control of pressure profiling. No pumps, no electronics — just you and the shot. They produce uniquely textured espresso and are built to last a lifetime.',
  },
}

export const machines: Machine[] = [
  // Pour Over
  {
    name: 'Hario V60',
    category: 'pour_over',
    priceRange: '$25 – $40',
    pros: ['Incredibly cheap', 'Portable and easy to clean', 'Highlights delicate flavors'],
    cons: ['Requires a gooseneck kettle', 'Technique-sensitive pour'],
  },
  {
    name: 'AeroPress',
    category: 'pour_over',
    priceRange: '$30 – $40',
    pros: ['Nearly indestructible', 'Travel-friendly', 'Versatile brew styles'],
    cons: ['Single cup only', 'Plastic body (not for everyone)'],
  },
  {
    name: 'Chemex 6-Cup',
    category: 'pour_over',
    priceRange: '$45 – $55',
    pros: ['Beautiful design', 'Clean, bright cup', 'Brews multiple servings'],
    cons: ['Fragile glass', 'Proprietary filters cost more'],
  },

  // Single Boiler
  {
    name: 'Rancilio Silvia',
    category: 'single_boiler',
    priceRange: '$400 – $500',
    pros: ['Commercial group head', 'Extremely durable', 'Huge modding community'],
    cons: ['No PID by default', 'Steep learning curve'],
  },
  {
    name: 'Gaggia Classic Pro',
    category: 'single_boiler',
    priceRange: '$350 – $450',
    pros: ['Great starter espresso', 'Easy to mod (OPV, PID)', 'Commercial 58mm portafilter'],
    cons: ['Small drip tray', 'Steam takes practice'],
  },
  {
    name: 'Breville Bambino',
    category: 'single_boiler',
    priceRange: '$250 – $350',
    pros: ['3-second heat-up', 'Auto steam wand', 'Compact footprint'],
    cons: ['54mm portafilter (fewer accessories)', 'Plastic build in places'],
  },

  // Double Boiler
  {
    name: 'Breville Dual Boiler',
    category: 'double_boiler',
    priceRange: '$1,200 – $1,500',
    pros: ['PID on both boilers', 'Shot timer built in', 'Great value for dual boiler'],
    cons: ['Large footprint', 'Breville repair availability varies'],
  },
  {
    name: 'Lelit Elizabeth',
    category: 'double_boiler',
    priceRange: '$1,100 – $1,400',
    pros: ['Compact for a dual boiler', 'LCC display with shot timer', 'E61-style group'],
    cons: ['Smaller water tank', 'Less common in US markets'],
  },
  {
    name: 'Profitec Pro 300',
    category: 'double_boiler',
    priceRange: '$1,400 – $1,700',
    pros: ['German engineering', 'PID controlled', 'Compact dual boiler design'],
    cons: ['No shot timer', 'Premium price'],
  },

  // Built-In Grinder
  {
    name: 'Breville Barista Express',
    category: 'built_in_grinder',
    priceRange: '$550 – $700',
    pros: ['Built-in conical burr grinder', 'All-in-one convenience', 'Solid entry point'],
    cons: ['Grinder is decent but not great', 'Can outgrow it quickly'],
  },
  {
    name: 'Jura E8',
    category: 'built_in_grinder',
    priceRange: '$2,000 – $2,500',
    pros: ['Fully automatic', 'One-touch milk drinks', 'Quiet operation'],
    cons: ['Very expensive', 'Less control over extraction'],
  },
  {
    name: "De'Longhi Dinamica",
    category: 'built_in_grinder',
    priceRange: '$700 – $1,000',
    pros: ['LatteCrema milk system', 'Compact super-automatic', 'Easy maintenance'],
    cons: ['Coffee quality ceiling', 'Proprietary descaling'],
  },

  // Manual Lever
  {
    name: 'Flair 58',
    category: 'manual_lever',
    priceRange: '$450 – $550',
    pros: ['Standard 58mm portafilter', 'Pressure gauge included', 'No electricity needed'],
    cons: ['Manual preheat required', 'One shot at a time'],
  },
  {
    name: 'Cafelat Robot',
    category: 'manual_lever',
    priceRange: '$300 – $400',
    pros: ['No preheating needed', 'Nearly zero maintenance', 'Beautiful retro design'],
    cons: ['No steam capability', 'Unconventional workflow'],
  },
  {
    name: 'La Pavoni Europiccola',
    category: 'manual_lever',
    priceRange: '$800 – $1,200',
    pros: ['Iconic Italian design', 'Built-in boiler for steam', 'Lasts generations'],
    cons: ['Temperature surfing required', 'Tiny boiler capacity'],
  },
]
