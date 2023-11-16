import './style.scss'
import rightArrow from '../../assets/arrow-right.svg'
import leftArrow from '../../assets/arrow-left.svg'
import { useState } from 'react'

const ImageSlider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  console.log(pictures)
  return (
    <div className='imageContainer'>
      <img className='mainPicture' src={pictures[currentIndex]} alt="Appartement" />
      <img className='leftArrow' src={leftArrow} alt="flèche gauche" onClick={goToPrevious} />
      <img className='rightArrow' src={rightArrow} alt="flèche droite" onClick={goToNext} />
      <div className='counter'>
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  )
}

export default ImageSlider
