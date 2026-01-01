import { useEffect, useRef } from 'react';

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const cards = sectionRef.current.querySelectorAll('.reveal');
        cards.forEach(card => observer.observe(card));

        return () => cards.forEach(card => observer.unobserve(card));
    }, []);

    const experiences = [
        {
            role: 'Web Developer',
            company: 'Tech Corp',
            period: '2023 - Present',
            description: 'Developing high-performance web applications using React and Node.js.'
        },
        {
            role: 'Frontend Intern',
            company: 'Startup Inc',
            period: '2022 - 2023',
            description: 'Assisted in building user interfaces and implementing responsive designs.'
        }
    ];

    return (
        <section id="experience" className="section container" ref={sectionRef}>
            <h2 className="text-gradient reveal" style={{ marginBottom: '3rem' }}>Experience</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="reveal card-hover" style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        borderLeft: '4px solid var(--color-primary)',
                        cursor: 'default'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                            <span>{exp.company}</span>
                            <span>{exp.period}</span>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)' }}>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
