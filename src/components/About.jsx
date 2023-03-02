import pdf from '../pdf/cv.pdf'

const About = () => {
  return (
    <section className="about section" id='about'>
      <h2>Sobre Mi</h2>
      <p>Qué tal, mi nombre es Cesar Samuel Miranda Reyes.</p>
      <p>Soy desarrollador web en Guadalajara Jalisco, México. Inicié con el mundo de la programación a inicios de 2020, y desde entonces he continuado con mi aprendizaje por medio de cursos y proyectos personales. Actualmente estoy formandome en el desarrollo con React, tratando de especializarme en el desarrollo FrontEnd. Estoy a tu disposición para realizar proyectos o trabajar juntos donde sea requerido.</p>
      <a href={pdf} download="cv.pdf" className='btn-download'>DESCARGAR CV</a>
    </section>
  )
}

export default About