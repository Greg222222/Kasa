import Banner from '../../components/Banner'
import Renting from '../../components/Renting'
import React, { useState, useEffect } from 'react'
import './style.scss'

function Home({ props }) {
  let [appartements, setAppartements] = useState(null)

  // 3. Create out useEffect function
  useEffect(() => {
    fetch('./logements.json')
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setAppartements(data))
  }, [])

  return appartements ? (
    <div>
      <Banner
        text="Chez vous, partout et ailleurs"
        background="../../../firstbanner.png"
      />

      <div className="rentingz">
        {appartements.map((appartement) => {
          return (
            <Renting
              title={appartement.title}
              image={appartement.cover}
              key={appartement.id}
              id={appartement.id}
            />
          )
        })}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Home
