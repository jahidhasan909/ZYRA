import React from 'react';
import WesternClientView from './WesternClient';
import initialWestern from '../../../data/western.json';

const Westernpage = () => {
    return (
        <div>
            <WesternClientView initialWestern={initialWestern}></WesternClientView>
        </div>
    );
};

export default Westernpage;