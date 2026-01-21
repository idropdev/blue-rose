import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar__inner">
                    <Link to="/" className="navbar__logo">
                        <span className="logo-icon">🌹</span>
                        <div className="logo-text">
                            <span className="logo-name">Blue Rose</span>
                            <span className="logo-tagline">Aesthetics & Wellness</span>
                        </div>
                    </Link>

                    <ul className={`navbar__links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map(link => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar__actions">
                        <Button href="tel:+19154652229" variant="ghost" size="small">
                            (915) 465-2229
                        </Button>
                        <Button href="/contact" variant="primary" size="small">
                            Book Now
                        </Button>
                    </div>

                    <button
                        className={`navbar__hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-menu__links">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mobile-menu__actions">
                    <Button href="tel:+19154652229" variant="secondary" size="large">
                        Call (915) 465-2229
                    </Button>
                    <Button href="/contact" variant="primary" size="large">
                        Book Consultation
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
