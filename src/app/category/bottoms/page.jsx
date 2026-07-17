import React from 'react';
import BottomsClientView from './BottomViewClient';

import initialBottoms from '../../../../public/bottoms.json'

const Bottomspage = () => {
    return (
        <div>
            <BottomsClientView initialBottoms={initialBottoms} />
        </div>
    );
};

export default Bottomspage;