import React from 'react';
import PoloClientView from './PoloClientView';
import initialPolo from '../../../data/polo.json';

const PoloPage = () => {
    return (
        <div>
            <PoloClientView initialPolo={initialPolo}></PoloClientView>
        </div>
    );
};

export default PoloPage;