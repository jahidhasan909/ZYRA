import React from 'react';
import DressClientView from './DressClientView';

const Dresspage = async () => {
    const res = await fetch(`/dress.json`)
    const initialDress = await res.json()
    return (
        <div>
            <DressClientView initialDress={initialDress}></DressClientView>
        </div>
    );
};

export default Dresspage;