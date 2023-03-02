import Abilities from './components/Abilities'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Information from './components/Information'

function App() {
  return (
    <>
    <Header />
      <div className='container-header'>
        <Information />
      </div>
      <About />
      <Abilities />
      <Footer />
    </>
  )
}

export default App
