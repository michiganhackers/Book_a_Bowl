type Restaurant = {
  id: number
  name: string
  rating: number
  price: string
  image: string

  hours: {
    open: string
    close: string
  }

  phone?: string
  website?: string
}
