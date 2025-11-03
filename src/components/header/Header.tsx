import './Header.css';

function Header() {
    return (
        <nav>
            <div id="name"><span>Julieta</span> Esains Moltó</div>
            <div id="menu">
                <ul>
                    <li><a href="#home-section">INICIO</a></li>
                    <li><a href="#about-me-section">SOBRE MÍ</a></li>
                    <li><a href="#skills-section">HABILIDADES</a></li>
                    <li><a href="#experience-section">EXPERIENCIA</a></li>
                    <li><a href="#studies-section">ESTUDIOS</a></li>
                    <li><a href="#projects-section">PROYECTOS</a></li>
                    <li><a href="#contact-section">CONTACTO</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;