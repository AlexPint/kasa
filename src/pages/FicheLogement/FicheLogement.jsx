import React from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';
import Tag from '../../components/Tag/Tag';


const FicheLogement = () => {
    return (
        <div>
            <Carrousel />
            <Collapse />
            <Tag />
            <Rate />
            <Host />
        </div>
    );
};

export default FicheLogement;