import {useState} from "react";
import JSON from "../data/logements.json"

import { useParams } from "react-router-dom";

import leftArrow from"../../assets/leftArrow.svg"
import rightArrow from"../../assets/rightArrow.svg"


const Carrousel = function Carrousel() {
    /*
    // On veut récupérer des paramètres spécifique à l'Url pour afficher par la suite les éléments correspondant
    const urlParams = useParams();
    // On met en lien l'id récupérer dans l'url avec l'id la base de données. Le but étant de faire ressortir le reste desinfos 
    const logementData = JSON.filter((data) => data.id === urlParams.id);
    // on créé une constante qui va nous permettre de parcourir les données et notament les photos que l'on souhaite afficher sur le carrousel
    const pictureLenght = logementData.map((data) => data.pictures.lenght);
`*/
    return(
        <div>
            <div className="container">
                <div className="display">
                    <img 
                        src={pictures} alt="carrousel kasa" 
                    />
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