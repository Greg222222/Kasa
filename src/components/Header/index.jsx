import { NavLink } from 'react-router-dom'
import './style.scss'
function Header() {
  return (
    <div className="header">
      <img src="../../../LOGO.png" alt="logo Kasa" className="logo" />
      <nav className="menu-container">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return (
              'menu ' + (isActive ? 'active' : '')
            )
          }}
        >Accueil</NavLink>
       
       <NavLink
          to="/about"
          className={({ isActive }) => {
            return (
              'menu ' + (isActive ? 'active' : '')
            )
          }}
        >À propos</NavLink>
      </nav>
    </div>
  )
}

export default Header
