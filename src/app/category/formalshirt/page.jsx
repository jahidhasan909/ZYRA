import React from 'react';
import FormalShirtClientView from './FormalShirtClientView';

const FormalShirtpage = async() => {
    const res = await fetch(`/formalshirt.json`)
    const initialformalshirt = await res.json()
    return (
        <div>
            <FormalShirtClientView initialformalshirt={initialformalshirt}></FormalShirtClientView>
        </div>
    );
};

export default FormalShirtpage;