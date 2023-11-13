import './style.scss'
import { Link } from 'react-router-dom';
function Renting(props) {
    return (
        <Link to={`/appartments/${props.id}`} className="img-container">
            <img className='img-bg' src={props.image} alt="" />
            <h3 className="loc-title">{props.title ? props.title : ''}</h3>
        </Link>
    )
  }

export default Renting