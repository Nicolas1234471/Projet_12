import './home.scss';
import Hero from './../../components/Hero/Hero.jsx';
import Projects from './../../components/Projects/Projects.jsx';
import About from './../../components/About/About.jsx';
import Skills from './../../components/Skills/Skills.jsx';
import Contact from './../../components/Contact/Contact.jsx';
import Navbar from './../../components/Navbar/Navbar.jsx';
import Footer from './../../components/Footer/Footer.jsx';

function Home() {
    return (
        <div className="min-h-screen bg-background dark">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
