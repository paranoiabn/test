import search from '../assets/Search.svg'
import frame from '../assets/Frame.svg'

function Toolbar({ total, searchTerm, setSearchTerm, sortBy, setSortBy }: { 
    total: number;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
}) {
    return (
        <div>
        <div style={{display:'flex', justifyContent:'flex-end', padding: '16px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px 16px', width: '453px',backgroundColor:'#F6F7F9' }}>
                <img src={search} alt="search" style={{ width:'21.36px', height:'21px' }} />
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Поиск"
                        style={{ width: '300px', backgroundColor:'#F6F7F9' }}/>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
                <span style={{ opacity:'0.5', letterSpacing:'-2%'}}>{total} товаров</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img src={frame} alt=""/>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{cursor: 'pointer' }}>
                        <option value="default">По популярності</option>
                        <option value="price_asc">Ціна: від низької</option>
                        <option value="price_desc">Ціна: від високої</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Toolbar