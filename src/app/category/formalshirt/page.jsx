import React from 'react';
import FormalShirtClientView from './FormalShirtClientView';
import initialformalshirt from '../../../public/formalshirt.json';

const FormalShirtpage = () => {
    return (
        <div>
            <FormalShirtClientView initialformalshirt={initialformalshirt}></FormalShirtClientView>
        </div>
    );
};

export default FormalShirtpage;