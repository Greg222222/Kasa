import './style.scss'
function Banner({ text, background }) {
  const bannerStyle = {
    background: `url(${background})`, // Remplacez par la valeur de votre image de fond
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative'
  }
  return (
    <div className="banner" style={bannerStyle}>
        <h1 className="banner-text">{text ? text : ''}</h1>
    </div>
  );
}

export default Banner
