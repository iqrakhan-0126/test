import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(form)).toString(),
        })
            .then(() => alert('Message sent successfully!'))
            .catch((error) => alert(error));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section container" style={{ marginBottom: '4rem' }}>
            <h2 className="text-gradient reveal" style={{ marginBottom: '1rem', textAlign: 'center' }}>Get In Touch</h2>
            <p className="reveal" style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem', textAlign: 'center' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="reveal" style={{
                maxWidth: '600px',
                margin: '0 auto',
                background: 'var(--color-bg-secondary)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input type="hidden" name="form-name" value="contact" />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="name" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '0.5rem',
                                color: 'var(--color-text)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="email" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '0.5rem',
                                color: 'var(--color-text)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '0.5rem',
                                color: 'var(--color-text)',
                                fontFamily: 'inherit',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ marginTop: '1rem', width: '100%' }}>Send Message</button>
                </form>

                <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <a href="https://www.linkedin.com/in/iqra-khan126/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'var(--color-text-muted)'}>
                        LinkedIn
                    </a>
                    <a href="https://github.com/iqrakhan-0126" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary)'} onMouseOut={e => e.target.style.color = 'var(--color-text-muted)'}>
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
