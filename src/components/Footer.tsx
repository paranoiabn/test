import footer_icon from '../assets/footer_icon.svg'
import footer_icon2 from '../assets/footer_icon2.svg'
import mastercard from '../assets/mastercard.svg'
import visa from '../assets/visa.svg'
import apple_pay from '../assets/apple pay.svg'
import google_pay from '../assets/google pay.svg'


function Footer() {
    return (
        <footer style={{ padding: '24px', marginTop: '40px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'8px'  }} >
                    <img src={footer_icon2} alt="" />
                    <img src={footer_icon} alt="" />
                    <span style={{ letterSpacing:'-2%', color:'#8090A4', fontSize:'14px' }}>AQVEX © 2026 | Все права защищены</span>
                </div>

            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <img src={mastercard} alt="mastercard" />
                <img src={visa} alt="visa" />
                <img src={apple_pay} alt="apple_pay" />
                <img src={google_pay} alt="google_pay" />
            </div>

            </div>
        </footer>
    )
}

export default Footer