import React from 'react';
import PanjabiClientView from './PubjabiClientView';

const Panjabipage = async() => {
     const res=await fetch(`/panjabi.json`)
    const initialPubjabi=await res.json()
    return (
        <div>
            <PanjabiClientView initialPubjabi={initialPubjabi}></PanjabiClientView>
        </div>
    );
};

export default Panjabipage;