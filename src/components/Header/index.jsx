import { Link } from 'react-router-dom'

function Header() {
  return (
    <div class="header">
      <img src="../../../LOGO.png" alt="logo Kasa" class="logo"/>
    <nav class="menu-container">
      <Link to="/" class="menu">Accueil</Link>
      <Link to="/about" class="menu">À propos</Link>
    </nav>
    </div>
  )
}

export default Header
