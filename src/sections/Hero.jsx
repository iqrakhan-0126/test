import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
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
        },
        blob2: {
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'var(--color-accent)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.15,
            zIndex: 1,
            top: '20%',
            right: '20%',
            animationDelay: '1s',
        }
    };

    return (
        <section id="hero" style={styles.section} className="container">
            <div style={styles.blob} className="animate-pulse-glow"></div>
            <div style={styles.blob2} className="animate-float"></div>

            <div style={styles.content} className="fade-in">
                <span style={styles.greeting}>Hello, I'm</span>
                <h1 style={styles.title}>
                    Iqra Khan<br />
                    <span className="text-gradient typing-cursor">{text}</span>
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
