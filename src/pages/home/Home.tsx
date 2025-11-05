import image from '../../assets/images/me.png';
import cv from '../../assets/pdfs/Curriculum Vitae - Julieta Esains Moltó.pdf';
import './Home.css';

function Home() {
    return (
        <section id='home-section' className='animate-on-scroll'>
            <div className='column'>
                <h2>Hola, soy</h2>
                <h1>Desarrolladora de Software</h1>
                <p>
                    Estudiante avanzada de Ingeniería en Sistemas con +3 años de experiencia programando.
                </p>
                <a className='button' href={cv} download='Curriculum Vitae - Julieta Esains Moltó.pdf'>Descargar CV</a>
            </div>
            <div className='img-container'>
                <img id='home-img' src={image} alt="Julieta Esains"/>
            </div>
        </section>
    );
}

export default Home;