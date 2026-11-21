import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Approach } from '@/components/Approach';
import { CvSection } from '@/components/CvSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <Approach />
        <CvSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
