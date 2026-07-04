import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Reveal from './components/Reveal';
import Scene3D from './components/Scene3D';
import Nav from './components/Nav';
import BackgroundGradient from './components/BackgroundGradient';
import CursorGlow from './components/CursorGlow';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="min-h-screen text-ink relative">
      <BackgroundGradient />
      <CursorGlow />
      <Scene3D />
      <Nav />
      <SocialSidebar />
      <div className="relative z-10">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal delay={100}><Experience /></Reveal>
        <Reveal delay={100}><Education /></Reveal>
        <Reveal delay={100}><Skills /></Reveal>
        <Reveal delay={100}><Projects /></Reveal>
        <Reveal delay={100}><Contact /></Reveal>
      </div>
    </div>
  );
}

export default App;