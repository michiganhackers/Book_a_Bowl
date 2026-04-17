export type Restaurant = {
  id: number
  name: string
  rating: number
  price: number //was string. changed to not break algorithm test.
  image: string
  availableTimes: string[]
  hours?: {
    open: string
    close: string
  }
  phone?: string
  website?: string
  price_string: string
  //-------below are to match algorithm-----//
  restrictions: string[]
  distance: number
  available: number //0 or 1
  cuisine: string
  family: boolean
  
  //optional score added by algorithm//
  score?: number
}