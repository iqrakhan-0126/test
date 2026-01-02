import { useEffect, useRef } from 'react';

const Projects = () => {
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

    const projects = [
        {
            title: 'Movie Ticket Pricing',
            description: 'A dynamic web application for pricing and booking movie tickets.',
            tags: ['Web App', 'Netlify'],
            link: 'https://movieticketpricing26.netlify.app'
        },
        {
            title: 'StudyNest',
            description: 'An educational platform for students to organize their study materials.',
            tags: ['Education', 'React'],
            link: 'https://studynestik.netlify.app'
        },
        {
            title: 'E-Commerce Clothing',
            description: 'A modern e-commerce site for clothing with product listings and cart functionality.',
            tags: ['E-Commerce', 'Shopping'],
            link: 'https://e-commerce-clothing-website126.netlify.app'
        },
        {
            title: 'Coffee Shop',
            description: 'A delightful landing page for a coffee shop with menu and location details.',
            tags: ['Landing Page', 'Design'],
            link: 'https://iscoffeeshop.netlify.app'
        }
    ];

    return (
        <section id="projects" className="section container" ref={sectionRef}>
            <h2 className="text-gradient reveal" style={{ marginBottom: '3rem' }}>Featured Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reveal card-hover"
                        style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{project.description}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {project.tags.map((tag) => (
                                <span key={tag} style={{
                                    fontSize: '0.8rem',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '50px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    color: 'var(--color-primary)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
