import React from 'react';
import BottomsDetailsClient from './BottomsDetailsClient';


const BottomsDetailspage = async ({ params }) => {
    const { id } = await params;
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/bottoms.json`, {
        cache: 'no-store'
    });
    const bottoms = await res.json();
    
   
    const product = bottoms.find((item) => item.id.toString() === id.toString());

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