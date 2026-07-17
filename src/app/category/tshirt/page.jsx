import React from 'react';
import TshirtClientView from './TShirtClientView';
import initialTshirt from '../../../data/t-shirt.json';

const TShirtpage = () => {
    return (
        <div>
            <TshirtClientView initialTshirt={initialTshirt}></TshirtClientView>
        </div>
    );
};

export default TShirtpage;