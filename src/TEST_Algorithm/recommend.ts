import type { Restaurant } from '../types/restaurants'

export type Preferences = {
  location: number
  cuisine: number
  ratings: number
  available: number
  price: number
  preferred_price: number
  fav: string[]
  res: string[]
  filRes: boolean
  filFamily: boolean
}

export function recommend(
  restaurants: Restaurant[],
  p: Preferences
): Restaurant[] {
  const scored = restaurants.map(r => ({
    ...r,
    score: generate(r, p)
  }))

  return scored.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
}

function generate(r: Restaurant, p: Preferences): number {
  let prob = 0

  if (p.filRes) {
    for (const restriction of p.res) {
      if (r.restrictions?.includes(restriction)) {
        prob += 1.5
      }
    }
  }

  prob += p.location / (r.distance * 2.75)

  if (p.fav.includes(r.cuisine)) {
    prob += p.cuisine * 1.5
  }

  if (r.available === 1) {
    prob += p.available * 0.4
  }

  prob += (r.rating / 5) * p.ratings * 1.4

  const diff = Math.abs(p.preferred_price - r.price)

  if (diff === 0) prob += p.price
  else if (diff === 1) prob += 0.85 * p.price
  else prob += 0.7 * p.price

  if (p.filFamily && r.family) {
    prob += 1.3
  }

  return prob
}