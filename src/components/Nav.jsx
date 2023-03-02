import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'

const Nav = ({showMenu, setShowMenu}) => {

  const [seccionActual, setSeccionActual] = useState('');

  useEffect(() => {
    function manejarScroll() {
      const secciones = document.querySelectorAll('.section');
      const posicionActual = window.pageYOffset;

      secciones.forEach((seccion) => {
        const seccionTop = seccion.offsetTop;
        const seccionBottom = seccionTop + seccion.offsetHeight;

        if (posicionActual >= seccionTop && posicionActual < seccionBottom) {
          setSeccionActual(seccion.getAttribute('id'));
        }
      });
    }

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const ocultar = () => {
    setShowMenu(false)
  }

  return (
    <nav className={`nav ${showMenu ? 'visible' : 'hidden'}`}>
      <button className="close-menu" onClick={ocultar}><i className="bi bi-x-circle"></i></button>
      <ul className="nav-list">
        <li className={seccionActual === 'inicio' ? 'focus' : ''}><Link onClick={ocultar} to="/" spy={true} smooth={true} offset={50} duration={500}>Inicio</Link></li>
        <li className={seccionActual === 'about' ? 'focus' : ''}><Link onClick={ocultar} to="about" spy={true} smooth={true} offset={-100} duration={500}>Sobre Mi</Link></li>
        <li className={seccionActual === 'abilities' ? 'focus' : ''}><Link onClick={ocultar} to="abilities" spy={true} smooth={true} offset={-100} duration={500}>Habilidades</Link></li>
        <li className={seccionActual === 'proyects' ? 'focus' : ''}><Link onClick={ocultar} to="proyects" spy={true} smooth={true} offset={-170} duration={500}>Proyectos</Link></li>
      </ul>
    </nav>
  )
}

export default Nav