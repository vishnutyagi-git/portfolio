import ScrollyCanvas from '../components/ScrollyCanvas';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main className="relative w-full overflow-x-clip bg-[#0b0d10] text-white">
            <section id="home" aria-label="Hero">
                <ScrollyCanvas />
            </section>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
        </main>
    );
}
