import './home.scss';
import Hero from './../../components/Hero/Hero.jsx';
import About from './../../components/About/About.jsx';
import Skills from './../../components/Skills/Skills.jsx';

function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
        </main>
    )
}

export default Home;