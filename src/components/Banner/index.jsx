function Banner({ text, background }) {
  const bannerStyle = {
    background: `url(${background})`, // Remplacez par la valeur de votre image de fond
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }
  return (
    <div className="banner" style={bannerStyle}>
        <p class="banner-text">{text ? text : ''}</p>
    </div>
  );
}

export default Banner
