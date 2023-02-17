import React, {useState} from "react";

import leftArrow from"../../assets/leftArrow.svg"
import rightArrow from"../../assets/rightArrow.svg"


const Carrousel = ({pictures, index}) => {
    //On utilise le hook d'état pour suivre l'index de l'image acutellement affiché dans le carrousel.
    const [currentImage, setCurrentImage]=useState(0);

    // currentImage === 0 on vérifie si l'utilisateur est sur la 1ere page
    //si c'est vrai on veut que cuurentImage soit = à la derniere image du carrousel, par consequent la valeur de cuurentImage est modifier avec le -1
    const handleLeftClick = () => {
        setCurrentImage(currentImage === 0 ? pictures.length -1 : currentImage -1);
    };
    const handleRightClick = () => {
        setCurrentImage(currentImage === pictures.length -1 ? 0 : currentImage +1);
    };

    return (
            <div className="container">
                <div className="display">
                    <img 
                        key={index}
                        src={pictures[currentImage]} 
                        alt="carrousel kasa"
                        className="display_img"
                    />
                </div>
                <div className="container_arrow">
                    <div className="button" onClick={handleLeftClick}>
                        <img src={leftArrow} alt="fleche gauche du carrousel du site kasa" />
                    </div>
                    <div className="button" onClick={handleRightClick}>
                        <img src={rightArrow} alt="fleche droite du carrousel du site kasa" />
                    </div>
                </div>
                <div class="counter">
                    <p>{currentImage + 1}/{pictures.length}</p>
                </div>   
            </div>
    )
}

export default Carrousel;