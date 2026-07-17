import React from 'react';
import BottomsClientView from './BottomViewClient';

const Bottomspage = async() => {
    const res=await fetch(`/bottoms.json`)
    const initialBottoms=await res.json()
    
    

    return (
        <div>
            <BottomsClientView initialBottoms={initialBottoms}></BottomsClientView>
        </div>
    );
};

export default Bottomspage;