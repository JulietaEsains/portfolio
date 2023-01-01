import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
