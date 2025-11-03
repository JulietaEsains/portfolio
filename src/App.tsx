import './App.css'
import Home from './pages/home/Home';
import AboutMe from './pages/about_me/AboutMe';

function App() {
  const element = document.querySelector('.animate-on-scroll');
  const observer = new IntersectionObserver(entries => {
    if (element)
      element.classList.toggle('active-element', entries[0].isIntersecting);
  });

  if (element)
    observer.observe(element);

  return (
    <main id='main-container'>
      <Home></Home>
      <AboutMe></AboutMe>
    </main>
  );
}

export default App;