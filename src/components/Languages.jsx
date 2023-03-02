import {front, back, tech} from '../data-images/data'

const Languages = () => {
  return (
    <div className="languages">
      <div className='technologies'>
        <h3>FrontEnd</h3>
        <div className="dev">
          {front.map(tec => (
            <picture key={tec.src}>
              <source srcSet={tec.avif} type="image/avif" />
              <source srcSet={tec.webp} type="image/webp" />
            
              <img src={tec.src} alt={tec.alt} key={tec.src} />
            </picture>
          ))}
        </div>
      </div>
      <div className='technologies'>
        <h3>BackEnd</h3>
        <div className="dev">
          {back.map(tec => (
            <picture key={tec.src}>
              <source srcSet={tec.avif} type="image/avif" />
              <source srcSet={tec.webp} type="image/webp" />
            
              <img src={tec.src} alt={tec.alt} key={tec.src} />
            </picture>
          ))}
        </div>
      </div>
      <div className='technologies'>
        <h3>Herramientas de desarrollo</h3>
        <div className="dev">
          {tech.map(tec => (
            <picture key={tec.src}>
              <source srcSet={tec.avif} type="image/avif" />
              <source srcSet={tec.webp} type="image/webp" />
            
              <img src={tec.src} alt={tec.alt} key={tec.src} />
            </picture>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Languages