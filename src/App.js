import "./App.css";
import Header from "./Header/Header";
import Mainpage from "./MainPage/MainPage";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Experience from "./Experience/Experience";

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="App">
      <Header />
      <Mainpage />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
