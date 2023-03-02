import { proyectos } from '../data-images/data'

const Proyects = () => {
  return (
    <div className='proyects section' id='proyects'>
      {proyectos.map(pr => (
        <div className="card sombra" key={pr.src}>
          <picture >
            <source srcSet={pr.avif} type="image/avif" />
            <source srcSet={pr.webp} type="image/webp" />
          
            <img src={pr.src} alt={pr.alt} />
          </picture>
          <div className="card-title">
            <h3>{pr.titulo}</h3>
          </div>
          <div className="iconos">
            <a href={pr.linkGithub} title='Ver en Github' target="_blank"><i className="bi bi-github"></i></a>
            <a href={pr.link} title='Visitar' target="_blank"><i className="bi bi-globe"></i></a>
          </div>
        </div>
      ))}
      <div className="btn">
      <a href="https://github.com/CesarMiranda26" className="btn-download"><i className="bi bi-github"></i> Visita mi GitHub</a>
      </div>
      
    </div>
  )
}

export default Proyects