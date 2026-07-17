import React from 'react';
import PoloDetailsClient from './PoloDetailsClient';

const PanjabiDetailspage = async ({ params }) => {
    const { id } = await params;
    
    
    const res = await fetch(`${process.env.NEXT_BASE_URL}/polo.json`, {
        cache: 'no-store'
    });
    const polo = await res.json();
    
    
    const product = polo.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <PoloDetailsClient  product={product} />
        </div>
    );
};

export default PanjabiDetailspage;