import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            background: isScrolled ? 'rgba(15, 17, 21, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
        },
        link: {
            fontSize: '0.9rem',
            fontWeight: '500',
            color: 'var(--color-text-muted)',
        },
        linkHover: {
            color: 'var(--color-text)',
        }
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <a href="#" style={styles.logo}>IQRA.</a>
                <ul style={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="nav-link"
                                style={styles.link}
                                onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
