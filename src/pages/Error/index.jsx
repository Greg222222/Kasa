import './style.scss'
function Error() {
  return (
    <div className="error">
      <div className="error-texts">
        <h1 className="error-title">404</h1>
        <p className="error-p">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a href="../" className="error-link">Retourner sur la page d'accueil</a>
    </div>
  )
}

export default Error
