import Toggle from '../../components/Toggle'
function Appartments() {
  return (
    <div className="appartments">
      <div>caroussel</div>
      <div className="name-and-owner">
        <div className="name-location">
          <h1 className="name">name</h1>
          <h2 className="location">location</h2>
        </div>
        <h3 className="owner">owner</h3>
      </div>
      <div className="filters-and-stars">
        <ul className="filters">
          <li className="filter">cozy</li>
          <li className="filter">cozy</li>
          <li className="filter">cozy</li>
        </ul>
        <ul className="stars">
          <li className="star">star</li>
          <li className="star">star</li>
          <li className="star">star</li>
          <li className="star">star</li>
          <li className="star">star</li>
        </ul>
      </div>
      <div className="Toggles">
        <Toggle
        className="toggle"
          title="Description"
          content="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />
        <Toggle className="toggle" title="Equipements" content="Wi-fi" />
      </div>
    </div>
  )
}

export default Appartments
