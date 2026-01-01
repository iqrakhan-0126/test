import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--color-bg-secondary)', color: 'var(--color-text-muted)' }}>
        <p>© {new Date().getFullYear()} Iqra Khan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
