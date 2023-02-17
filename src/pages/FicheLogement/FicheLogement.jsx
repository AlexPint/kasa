//React-----------------
import React, {useEffect} from "react";
import { useNavigate, useParams} from "react-router-dom";
//Components------------
import Carrousel from '../../components/Carrousel/Carrousel';
import Host from '../../components/Host/Host';
import Collapse from '../../components/Collapse/Collapse';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';
import Description from '../../components/Description/Description';
//Data------------------
import JSON from "../../components/data/logements.json"





const FicheLogement = () => {
    // ce hook permet d'extraire l'id du logement à partir de l'URL. {id} lle permet d'extraire la propriété "id" de l'objet retourné par useParams() et de la stocker dans la variable id.
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate
    // le find nous permet de trouver l'objet correspondant à l'id
    const appart = JSON.find((appart) =>
    appart.id === id );

    useEffect (() => {
        if (appart.length === 0) {
            navigate ("*")
        }
    }); 

    return (
        <div>
            <div>
                <Carrousel pictures={appart.pictures}/>
            </div>
            <div className="fiche_Container">
                <div className="fiche_description" >
                    <Description title={appart.title} location={appart.location}/>
                    <Tag tags={appart.tags} />
                </div>
                <div className="fiche_host">
                    <Host className="fiche_host" name={appart.host.name} picture={appart.host.picture} />
                    <Rate className="fiche_rate" rating={appart.rating}/>
                </div>
                <div className="fiche_collapse">
                    <Collapse title="Description" content={appart.description} />
                </div>
                <Collapse className="collapse_equipments" title="Equipements" content={appart.equipments} />
            </div>
        </div>
    )
};

export default FicheLogement;

