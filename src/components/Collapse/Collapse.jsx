import React from 'react';
import {useState} from "react";
import ArrowD from "../../assets/fleche-bas.svg"
import ArrowUP from "../../assets/fleche-haut.svg"

const Collapse = ({title, content }) => {
    const [ active, setActive ] = useState(false);

    
    return active ? (
        <div className="collapse">
            <div className='collapse_bar'>
                <h3 className='collapse_bar--title'>{title}</h3>
                <img 
                    src={ArrowD} 
                    alt="Flèche vers le haut, kasa"
                    onClick={() => setActive (false)}
                    className="rotated"
                />
            </div>
                <div className='collapse_body'>
                {typeof content === "object" ? intoArray(content) : 
                    <p className='collapse_body--txt'>{content}</p> }
                </div>
        </div> 
    ) : (
        <div className={'collapse'}>
            <div className='collapse_bar'>
                <h3 className='collapse_bar--title'>{title}</h3>
                <img 
                    src={ArrowUP} 
                    alt="Flèche vers le haut, kasa"
                    onClick={() => setActive (true)}
                    className="rotated"
                />
            </div>
        </div> 
    )
};

function intoArray (equip) {
    return (
        <ul>
            {equip.map((equipment) => (
                <li className='collapse_body--txt' key= {equipment}>
                    {equipment}
                </li>
            ))}
        </ul> 
    )
}
export default Collapse;
/*

*/