import Image from 'next/image';
import logo from '../assets/buymium_logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Image src={logo} alt="Buymium Logo" className="footer-logo" />
                        <p className="footer-desc">
                            Platform jual beli akun Instagram terpercaya di Indonesia.
                            Aman, cepat, dan berkualitas. Dioptimasi untuk pertumbuhan bisnis Anda.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Kontak Kami</h4>
                        <ul className="footer-links">
                            <li>
                                <a
                                    href="https://wa.me/6285692689599"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:buymiumstore@gmail.com"
                                    className="footer-link"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    buymiumstore@gmail.com
                                </a>
                            </li>
                            <li>
                                <div className="footer-link" style={{ cursor: 'default' }}>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Jakarta, Indonesia
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Marketplace</h4>
                        <ul className="footer-links">
                            <li>
                                <a
                                    href="https://www.shopee.co.id/buymium.store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    <i className="fa-solid fa-shop"></i>
                                    Shopee Official Store
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.buymium.store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                    Akses Email (Order)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Buymium. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://instagram.com/buymium.store" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
