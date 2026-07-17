import React from 'react';
import PanjabiClientView from './PubjabiClientView';

const Panjabipage = async() => {
     const res=await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/panjabi.json`)
    const initialPubjabi=await res.json()
    return (
        <div>
            <PanjabiClientView initialPubjabi={initialPubjabi}></PanjabiClientView>
        </div>
    );
};

export default Panjabipage;