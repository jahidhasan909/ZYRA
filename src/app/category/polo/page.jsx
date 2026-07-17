import React from 'react';
import PoloClientView from './PoloClientView';
import initialPolo from '@/public/polo.json';

const PoloPage = () => {
    return (
        <div>
            <PoloClientView initialPolo={initialPolo}></PoloClientView>
        </div>
    );
};

export default PoloPage;