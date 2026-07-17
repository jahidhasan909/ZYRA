import React from 'react';
import PanjabiClientView from './PubjabiClientView';
import initialPubjabi from '../../../public/panjabi.json';

const Panjabipage = () => {
    return (
        <div>
            <PanjabiClientView initialPubjabi={initialPubjabi}></PanjabiClientView>
        </div>
    );
};

export default Panjabipage;