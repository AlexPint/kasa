import JSON from "../data/logements.json"
import { Link } from "react-router-dom";


const Card = () => {

     
    return (
        <article className='card_container'>
                {JSON.map((accomodation) =>(
                    <Link 
                        to={ `logement/${accomodation.id}`} 
                        key={accomodation.id}
                        className='card'
                        >
                            <img src={accomodation.cover} alt="Appartement en location référencé sur le site kasa" className="card_img"/>
                            <h2 className='card_title'>{accomodation.title}</h2>
                    </Link>
                ))}
        </article>
    )
};

export default Card;