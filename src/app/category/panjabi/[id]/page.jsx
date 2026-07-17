import React from 'react';
import PanjabiDetailsClient from './PanjabiDetailsClient';
import panjabisData from '../../../public/panjabi.json';

const PanjabiDetailspage = async ({ params }) => {
    const { id } = await params;
    
    
    const product = panjabisData.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <PanjabiDetailsClient product={product} />
        </div>
    );
};

export default PanjabiDetailspage;