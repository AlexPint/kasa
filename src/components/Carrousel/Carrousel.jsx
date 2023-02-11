import leftArrow from"../../assets/leftArrow.svg"
import rightArrow from"../../assets/rightArrow.svg"
import Image from"../../assets/carrousel-img.jpg"


const Carrousel = function Carrousel(props) {
    return(
        <div>
            <div className="container">
                <div className="display">
                    <img src={Image} alt="carrousel kasa" />
                </div>
                <div className="container_arrow">
                    <img src={leftArrow} alt="fleche gauche du carrousel du site kasa" />
                    <img src={rightArrow} alt="fleche droite du carrousel du site kasa" />
                </div>
                <div class="counter">
                    <p>1/3</p>
                </div>   
            </div>
        </div>
    )
}

export default Carrousel;