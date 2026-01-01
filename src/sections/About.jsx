const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>About Me</h2>
            <div style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                    I am a passionate developer with a keen eye for design and a drive for creating seamless digital experiences. With a background in modern web technologies, I specialize in building responsive, accessible, and performant applications.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                    Always learning and exploring new technologies to stay at the forefront of the industry.
                </p>
            </div>
        </section>
    );
};

export default About;
