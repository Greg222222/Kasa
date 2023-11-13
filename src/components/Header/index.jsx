import { Link } from 'react-router-dom'
import './style.scss'
function Header() {
  return (
    <div className="header">
      <img src="../../../LOGO.png" alt="logo Kasa" className="logo"/>
    <nav className="menu-container">
      <Link to="/" className="menu">Accueil</Link>
      <Link to="/about" className="menu">À propos</Link>
    </nav>
    </div>
  )
}

export default Header
