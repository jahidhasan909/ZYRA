import React from 'react';
import TshirtClientView from './TShirtClientView';

const TShirtpage = async() => {
     const res=await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/t-shirt.json`)
    const initialTshirt=await res.json()
    return (
        <div>
            <TshirtClientView initialTshirt={initialTshirt}></TshirtClientView>
        </div>
    );
};

export default TShirtpage;