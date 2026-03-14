export interface Product {
    id: string
    name: string
    image: string
    price: number
    old_price: number
    discount_percent: number
    currency: string
    rating: number
    reviews_count: number
    in_stock: boolean
    category: string
    volumes: {
      id: string
      label: string
      in_stock: boolean
    }[]
    selected_volume_id: string
  } 