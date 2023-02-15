import React, {useEffect} from "react";
import Carrousel from '../../components/Carrousel/Carrousel';
import Host from '../../components/Host/Host';
/*
import Collapse from '../../components/Collapse/Collapse';
import Rate from '../../components/Rate/Rate';

import Tag from '../../components/Tag/Tag';
*/
import JSON from "../../components/data/logements.json"

import { useNavigate, useParams} from "react-router-dom";


const FicheLogement = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate
    const appart = JSON.find((appart) =>
    appart.id === id );

    useEffect (() => {
        if (appart.length === 0) {
            navigate ("*")
        }
    }); 

    return (
        <div>
            {appart.host.map((hosts, index) => (
                <Host key={index[6]} host={hosts}/>
            ))}
        </div>
    )
};

export default FicheLogement;

