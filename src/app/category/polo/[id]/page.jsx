import React from 'react';
import PoloDetailsClient from './PoloDetailsClient';
import poloData from '../../../../data/polo.json';

const PoloDetailPage = async ({ params }) => {
    const { id } = await params;
    
    
    const product = poloData.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <PoloDetailsClient product={product} />
        </div>
    );
};

export default PoloDetailPage;