import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import { SCROLL_REVEAL_OFFSET } from './constants';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';

function App() {
  useScrollReveal(SCROLL_REVEAL_OFFSET);

  return (
    <div className="App">
      <ScrollIndicator />
      <Header />
      <MainPage />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
