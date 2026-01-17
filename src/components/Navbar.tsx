
import Image from 'next/image';
import logo from '../assets/buymium_logo.png';

const Navbar = () => {
    return (
        <nav className="navbar animate-fade-in-up">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Image src={logo} alt="Buymium Logo" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
