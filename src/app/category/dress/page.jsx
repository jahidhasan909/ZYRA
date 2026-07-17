import React from 'react';
import DressClientView from './DressClientView';
import initialDress from '../../../../public/dress.json'; 


const Dresspage = () => {
    return (
        <div>
            <DressClientView initialDress={initialDress}></DressClientView>
        </div>
    );
};

export default Dresspage;