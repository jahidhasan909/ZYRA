import React from 'react';
import WesternClientView from './WesternClient';

const Westernpage = async() => {
    const res=await fetch(`${process.env.NEXT_BASE_URL}/western.json`)
    const initialWestern=await res.json()
    return (
        <div>
            <WesternClientView initialWestern={initialWestern}></WesternClientView>
        </div>
    );
};

export default Westernpage;