import { useState } from 'react'
import './App.css'
import icon from './assets/icon.svg'
import Toolbar from './components/Toolbar'
import ProductCard from './components/ProductCard'
import useProducts from './hooks/AllProducts'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

function App() {

  const { products, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))  

    // sortBy
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

  const perPage = 8;
  const totalPages = Math.ceil(sorted.length / perPage)
  
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginated = sorted.slice(start, end);

  function handleSearch(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', }}>
      <header style={{ width: '100%', height:'112px', backgroundColor: '#fff', }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center' }}>
          <img src={icon} alt="AQVEX" />
        </div>
      </header>

      <Toolbar
        total={sorted.length} 
        searchTerm={searchTerm}
        setSearchTerm={handleSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {paginated.map(product => (
          <ProductCard key={product.id} product={product} />          
        ))}
      </div>

      <Pagination 
        page={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <Footer />
    </div>
  )
}

export default App
