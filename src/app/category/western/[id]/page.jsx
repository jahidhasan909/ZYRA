import React from 'react';
import WesternDetailsClient from './WesternDetailsClient';

const WesternDetailspage = async ({ params }) => {
    const { id } = await params;
    
    
    const res = await fetch(`${process.env.NEXT_BASE_URL}/western.json`, {
        cache: 'no-store'
    });
    const westernItems = await res.json();
    
   
    const product = westernItems.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <WesternDetailsClient product={product} />
        </div>
    );
};

export default WesternDetailspage;