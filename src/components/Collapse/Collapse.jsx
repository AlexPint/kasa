import React from 'react';
import ArrowD from "../../assets/fleche-bas.svg"
import ArrowUP from "../../assets/fleche-haut.svg"

const Collapse = () => {
    return (
        <div>
            <div className='collapse'>
                <div className='collapse_bar'>
                    <h3 className='collapse_bar--title'>Fiabilité</h3>
                    <img src={ArrowD} alt="Flèche vers le bas, kasa" />
                </div>
            </div>
            <div className='collapse'>
                <div className='collapse_bar'>
                    <h3 className='collapse_bar--title'>Respect</h3>
                    <img src={ArrowUP} alt="Flèche vers le bas, kasa" />
                </div>
                <div className='collapse_body'>
                    <p className='collapse_body--txt'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            </div>
            <div className='collapse'>
                <div className='collapse_bar'>
                    <h3 className='collapse_bar--title'>Service</h3>
                    <img src={ArrowD} alt="Flèche vers le bas, kasa" />
                </div>
            </div>
            <div className='collapse'>
                <div className='collapse_bar'>
                    <h3 className='collapse_bar--title'>Responsabilité</h3>
                    <img src={ArrowD} alt="Flèche vers le bas, kasa" />
                </div>
            </div>
        </div>
    );
};

export default Collapse;