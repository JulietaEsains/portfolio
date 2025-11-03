import image from '../../assets/images/me.jpg';
import cv from '../../assets/pdfs/Curriculum Vitae - Julieta Esains Moltó.pdf';
import './Home.css';

function Home() {
    const element = document.querySelector('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        if (element)
            element.classList.toggle('active-element', entries[0].isIntersecting);
    });

    if (element)
    observer.observe(element);

    return (
        <section id='home-section'>
            <div className='column'>
                <h2>Hola, soy</h2>
                <h1>Desarrolladora de Software</h1>
                <p>
                    Estudiante del último año de Ingeniería en Sistemas de Información con +3 años de experiencia programando.
                </p>
                <a className='button' href={cv} download='Curriculum Vitae - Julieta Esains Moltó.pdf'>Descargar CV</a>
            </div>
            <img id='home-img' src={image} alt="Julieta Esains" className='animate-on-scroll'/>
        </section>
    );
}

export default Home;