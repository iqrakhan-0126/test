const Hero = () => {
    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px', // Compensate for fixed navbar
        },
        content: {
            textAlign: 'center',
            maxWidth: '800px',
            zIndex: 2,
        },
        greeting: {
            color: 'var(--color-primary)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'block',
        },
        title: {
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
        },
        description: {
            fontSize: '1.2rem',
            color: 'var(--color-text-muted)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem',
        },
        blob: {
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'var(--color-primary-glow)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            opacity: 0.2,
            zIndex: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    return (
        <section id="hero" style={styles.section} className="container">
            <div style={styles.blob}></div>
            <div style={styles.content} className="fade-in">
                <span style={styles.greeting}>Hello, I'm</span>
                <h1 style={styles.title}>
                    Iqra Khan<br />
                    <span className="text-gradient">Portfolio Website</span>
                </h1>
                <p style={styles.description}>
                    I build exceptional digital experiences. Currently focused on creating accessible, human-centered products.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
