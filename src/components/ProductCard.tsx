import flacon from '../assets/flacon.svg'
import { useState } from 'react'
import shopping_cart from '../assets/Shopping Cart.svg'

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

function ProductCard({ product }: {product: Product}) {
    const [selectedVolume, setSelectedVolume] = useState(product.selected_volume_id);
    return (
        <div style={{ borderRadius: '16px', overflow: 'hidden', maxWidth:'350px', display: 'flex', flexDirection: 'column', height: '100%' }}>

            <div style={{ borderRadius: '12px', display:'flex', justifyContent:'center' }}>
                <img src={flacon} alt={product.name}  />
            </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
                    <span style={{ textDecoration: 'line-through', textDecorationColor:'#FF2741', color: '#999' }}>{product.old_price} {product.currency}</span>
                    <span style={{ fontWeight: 500, letterSpacing:'-2%', background: 'linear-gradient(90deg, #003181, #2288ED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{product.price} {product.currency}</span>
                    <span style={{ background: '#ff4444', color: '#fff',  borderRadius: '4px', padding: '2px 6px', fontSize: '12px' }}>-{product.discount_percent}%</span>
                </div>

                <p style={{ maxWidth: '300px', lineHeight: '1.5', margin: '8px 0', height:'63px', letterSpacing:'-2%' }}>{product.name}</p>

                <div> 
                    <span>{product.rating} {product.reviews_count}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '17px 0' }}>
                    <span style={{ letterSpacing:'-2%', fontSize: '14px' }}>{product.in_stock ? "✅ В наличии" : '❌ Нет в наличии'}</span>
                    <span style={{ color: '#999', fontSize: '14px' }}>• {product.category}</span>
                </div>
            </div>

            <div style={{ display:'flex', gap:'8px', padding:'0px 1px 20px'}} >
                {product.volumes.length > 1 && (
                    <select
                        value={selectedVolume}
                        onChange={e => setSelectedVolume(e.target.value)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            border:'1px solid #EBEBEB'
                          }}
                    >
                        {product.volumes.map(v => (
                            <option key={v.id} value={v.id}>{v.label}</option>
                        ))}
                    </select>
                )}

                <button style={{ flex: 1, display:'flex', justifyContent: 'center', alignItems:'center' ,padding: '10px', background: '#E8F4FF', borderRadius: '15px', cursor: 'pointer', gap:'7px' }} >
                    <img src={shopping_cart} alt="" />
                        В корзину
                </button>
            </div>

      </div>
    )
}

export default ProductCard