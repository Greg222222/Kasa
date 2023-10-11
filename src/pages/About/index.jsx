import Banner from '../../components/Banner'
import React from 'react'
import Toggle from '../../components/Toggle'
function About() {
  return (
    <div>
      <Banner background="../../../banner-2.png" />
      <Toggle title="Fiabilité" content="Nous sommes fiables. Wallah" />
      <Toggle
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Toggle title="Service" content="On vous offre un service" />
      <Toggle title="Sécurité" content="Tkt c'est safe" />
    </div>
  )
}

export default About
