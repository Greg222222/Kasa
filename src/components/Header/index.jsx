import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/survey/1">
        Faire le test
      </Link>
      <Link to="/">Accueil</Link>
      <Link to="/survey">Questionnaire</Link>
    </nav>
  )
}

export default Header
