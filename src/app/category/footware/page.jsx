import React from 'react';
import FootWareClientView from './FootWareClientView';


const Dresspage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/footware.json`)
    const initialfootware= await res.json()
    return (
        <div>
            <FootWareClientView initialfootware={initialfootware}></FootWareClientView>
        </div>
    );
};

export default Dresspage;