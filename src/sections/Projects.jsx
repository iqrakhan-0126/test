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
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.',
            tags: ['React', 'Chart.js', 'Node.js']
        },
        {
            title: 'Portfolio v1',
            description: 'A personal portfolio website showcasing projects and skills with a focus on minimal design.',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Task Management App',
            description: 'A productivity tool to help teams organize and track tasks efficiently.',
            tags: ['Vue.js', 'Firebase']
        }
    ];

    return (
        <section id="projects" className="section container" ref={sectionRef}>
            <h2 className="text-gradient reveal" style={{ marginBottom: '3rem' }}>Featured Projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <div key={index} className="reveal card-hover" style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: '1rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }}>
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
