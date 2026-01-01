import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: isScrolled ? '1rem 0' : '2rem 0',
            background: isScrolled ? 'rgba(15, 17, 21, 0.95)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        links: {
            display: 'flex',
            gap: '2rem',
            transition: 'all 0.3s ease',
        },
        mobileLinks: {
            display: isMobileMenuOpen ? 'flex' : 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            background: 'var(--color-bg-secondary)',
            padding: '2rem',
            gap: '1.5rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
            borderBottomLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
        },
        hamburger: {
            display: 'none', // Default hidden, shown in media query via CSS or JS check
            flexDirection: 'column',
            gap: '6px',
            cursor: 'pointer',
            zIndex: 1001,
        },
        bar: {
            width: '25px',
            height: '2px',
            background: 'var(--color-text)',
            transition: 'all 0.3s ease',
        }
    };

    // Responsive styles hack for simplicity in inline-styles context
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <a href="#" style={styles.logo}>IQRA.</a>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ ...styles.hamburger, display: 'flex' }} // We'll hide via CSS on desktop
                >
                    <span style={{
                        ...styles.bar,
                        transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
                    }}></span>
                    <span style={{
                        ...styles.bar,
                        opacity: isMobileMenuOpen ? 0 : 1
                    }}></span>
                    <span style={{
                        ...styles.bar,
                        transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                    }}></span>
                </button>

                <ul className="nav-links" style={{
                    ...styles.links,
                    // Note: proper media queries in CSS are safer, but for this structure:
                    // We will rely on CSS to toggle between desktop (flex row) and mobile (hidden/col)
                    // For now, let's allow the CSS to handle the display property via class names
                }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <style>{`
                    .mobile-toggle {
                        display: none !important;
                    }
                    .nav-links {
                        display: flex;
                        flex-direction: row;
                    }
                    
                    @media (max-width: 768px) {
                        .mobile-toggle {
                            display: flex !important;
                        }
                        .nav-links {
                            display: ${isMobileMenuOpen ? 'flex' : 'none'} !important;
                            flex-direction: column;
                            position: absolute;
                            top: 80px; /* Navbar height approximate */
                            left: 0;
                            width: 100vw; /* Full viewport width */
                            background: rgba(15, 17, 21, 0.98);
                            padding: 2rem;
                            gap: 2rem;
                            box-shadow: 0 10px 20px rgba(0,0,0,0.5);
                            backdrop-filter: blur(10px);
                            height: 100vh;
                            align-items: center;
                            justify-content: center;
                        }
                        .nav-link {
                            font-size: 1.5rem !important;
                        }
                    }
                `}</style>
            </div>
        </nav>
    );
};

export default Navbar;
