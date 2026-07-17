import React from 'react';
import DressClientView from './DressClientView';

const Dresspage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/dress.json`)
    const initialDress = await res.json()
    return (
        <div>
            <DressClientView initialDress={initialDress}></DressClientView>
        </div>
    );
};

export default Dresspage;