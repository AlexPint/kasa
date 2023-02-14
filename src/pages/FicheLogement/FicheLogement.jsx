import React, {useEffect} from "react";
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';
import Tag from '../../components/Tag/Tag';

import JSON from "../../components/data/logements.json"

import { useNavigate, useParams} from "react-router-dom";


const FicheLogement = ({pictures}) => {
    const { id } = useParams();
    const navigate = useNavigate
    const appart = JSON.filter((appart) =>
    appart.id === id );

    useEffect (() => {
        if (appart.length === 0) {
            navigate ("*")
        }
    });

    return (
        <div>
            {JSON.map(logement =>(
                <div>
                    <Carrousel key={logement.id} pictures={logement.pictures}/>
                    <Collapse />
                    <Tag />
                    <Rate />
                    <Host />
                </div>
            ))}
        </div>
    )
};

export default FicheLogement;