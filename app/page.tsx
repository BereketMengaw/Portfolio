import Header from "../components/Header";
import Hom from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hom />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
