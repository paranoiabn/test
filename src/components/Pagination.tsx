function Pagination ({ page, totalPages, onPageChange }: {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void
}) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', margin: '40px 0'}}>
            
            <button
                onClick={() => onPageChange(page -1)}
                disabled={page === 1}
                style={{cursor: 'pointer', fontSize: '18px' }}
            >
                -
            </button>

            {[1, 2, 3, 4, '...', 5].map((p, i) => (
                p === '...'
                    ? <span key={i}>...</span>
                    : <button
                        key={i}
                        onClick={() => typeof p === 'number' && onPageChange(p)}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '35%',
                            border: page === p ? '1px solid #333' : 'none',
                            cursor: 'pointer',
                            fontWeight: page === p ? 700 : 400,
                            letterSpacing:'-2%',
                            color:'#182A42'
                          }}
                    >
                        {p}
                    </button>
            ))}

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                style={{ cursor: 'pointer', fontSize: '18px' }}
            >
                +
            </button>

        </div>
    )
}

export default Pagination