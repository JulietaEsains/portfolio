import './Header.css';
import { Link } from 'react-scroll';

function Header() {
    return (
        <nav>
            <div id="name"><span>Julieta</span> Esains Moltó</div>
            <div id="menu">
                <ul>
                    <Link className='header-link' to='home-section' spy activeClass='active-header-link'>INICIO</Link>
                    <Link className='header-link' to='about-me-section' spy activeClass='active-header-link'>SOBRE MÍ</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Header;