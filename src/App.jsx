import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Qualification from "./sections/Qualification";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
