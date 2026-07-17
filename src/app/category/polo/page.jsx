import React from 'react';
import PoloClientView from './PoloClientView';


const PoloPage = async() => {
     const res=await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/polo.json`)
    const initialPolo=await res.json()
    return (
        <div>
            <PoloClientView initialPolo={initialPolo}></PoloClientView>
        </div>
    );
};

export default PoloPage;