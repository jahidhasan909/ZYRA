import React from 'react';
import FootWareClientView from './FootWareClientView';
import initialfootware from '@/public/footware.json'; 

const FootwarePage = () => {
    return (
        <div>
            <FootWareClientView initialfootware={initialfootware}></FootWareClientView>
        </div>
    );
};

export default FootwarePage;