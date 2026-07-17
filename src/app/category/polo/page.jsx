import React from 'react';
import PoloClientView from './PoloClientView';


const PoloPage = async() => {
     const res=await fetch(`/polo.json`)
    const initialPolo=await res.json()
    return (
        <div>
            <PoloClientView initialPolo={initialPolo}></PoloClientView>
        </div>
    );
};

export default PoloPage;