import { useState, useEffect } from 'react'

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

function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products');
            const data = await response.json();
            console.log(data);
            setProducts(data.data.products);
            setLoading(false);
        }

        fetchProducts()
    }, [])

    return { products, loading }
}

export default useProducts