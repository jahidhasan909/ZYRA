import React from 'react';
import BottomsDetailsClient from './BottomsDetailsClient';

import bottomsData from '../../../../data/bottoms.json'; 

const BottomsDetailspage = async ({ params }) => {
    const { id } = await params;
    
    
    const product = bottomsData.find((item) => item.id.toString() === id.toString());

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <BottomsDetailsClient product={product} />
        </div>
    );
};

export default BottomsDetailspage;