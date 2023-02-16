import React from 'react';

//en props on vient ajouter la props issue de FicheLogement, attention aux { }. Cette props a recu comme valeur le tableau de data
const Tag = ({tags}) => {

//On effectue un map sur cette props qui définit une fonction s'appelant "tag"

    return (
        <div className='tag'>
            {tags.map((tag, index) => (
                <ul className='tag_box'>
                    <li 
                    className='tag_box-txt'
                    key={index}
                    >
                        {tag}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Tag;