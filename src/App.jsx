import Hero from "./components/Hero";
import About from "./components/About";

import Journey from "./components/journey/Journey";

import SystemStatus from "./components/stats/SystemStatus";

import Skills from "./components/Skills";

import ProjectDatabase from "./components/ProjectDatabase/ProjectDatabase";

import Projects from "./components/Projects";

import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

import Reveal from "./components/Reveal";

import Scene3D from "./components/Scene3D";

import Nav from "./components/Nav";

import BackgroundGradient from "./components/BackgroundGradient";
import CursorGlow from "./components/CursorGlow";

import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* Background */}

      <BackgroundGradient />
      <CursorGlow />
      <Scene3D />

      {/* Navegação */}

      <Nav />

      {/* Redes sociais */}

      <SocialSidebar />

      {/* Conteúdo */}

      <main className="relative z-10">

        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal delay={100}>
          <Journey />
        </Reveal>

        <Reveal delay={150}>
          <SystemStatus />
        </Reveal>

        <Reveal delay={200}>
          <Skills />
        </Reveal>

        {/* NOVA SEÇÃO */}

        <Reveal delay={225}>
          <ProjectDatabase />
        </Reveal>

        <Reveal delay={250}>
          <Projects />
        </Reveal>

        <Reveal delay={300}>
          <Experience />
        </Reveal>

        <Reveal delay={350}>
          <Education />
        </Reveal>

        <Reveal delay={400}>
          <Contact />
        </Reveal>

      </main>

    </div>
  );
}

export default App;