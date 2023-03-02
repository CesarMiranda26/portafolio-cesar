import { useState } from 'react'
import {logo } from '../data-images/data'
import Nav from "./Nav"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(true)
  }

  return (
    <header className="header">
      <div className='img'>
        <picture>
          <source srcSet={logo.avif} type="image/avif" />
          <source srcSet={logo.webp} type="image/webp" />
        
          <img loading="lazy" src={logo.url} alt="" />
        </picture>
      </div>

      <button className="open-menu" onClick={handleClick}><i className="bi bi-list"></i></button>
      <Nav 
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </header>
  )
}

export default Header