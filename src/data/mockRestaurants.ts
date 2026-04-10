import type { Restaurant } from '../types/restaurant'

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Sushi Place',
    rating: 4.7,
    price: '$$',
    image: 'https://picsum.photos/400/300?1',
    availableTimes: ['6:00 PM', '6:30 PM']
  },
  {
    id: 2,
    name: 'Italian Bistro',
    rating: 4.5,
    price: '$$$',
    image: 'https://picsum.photos/400/300?2',
    availableTimes: ['7:00 PM']
  },
  {
    id: 3,
    name: 'Burger Spot',
    rating: 4.3,
    price: '$',
    image: 'https://picsum.photos/400/300?3',
    availableTimes: ['5:30 PM']
  },
  {
    id: 4,
    name: 'Thai Kitchen',
    rating: 4.6,
    price: '$$',
    image: 'https://picsum.photos/400/300?4',
    availableTimes: ['6:15 PM']
  },
  {
    id: 5,
    name: 'Steakhouse',
    rating: 4.8,
    price: '$$$$',
    image: 'https://picsum.photos/400/300?5',
    availableTimes: ['8:00 PM']
  }
]