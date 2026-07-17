import React from 'react';
import BottomsClientView from './BottomViewClient';

import initialBottoms from '../../../data/bottoms.json'

const Bottomspage = () => {
    return (
        <div>
            <BottomsClientView initialBottoms={initialBottoms} />
        </div>
    );
};

export default Bottomspage;