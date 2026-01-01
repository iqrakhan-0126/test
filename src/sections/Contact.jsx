const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="https://www.linkedin.com/in/iqra-khan126/" target="_blank" rel="noopener noreferrer" className="btn">
                Connect on LinkedIn
            </a>
        </section>
    );
};

export default Contact;
