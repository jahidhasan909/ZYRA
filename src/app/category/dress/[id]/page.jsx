import React from 'react';
import DressDetailsClient from './DressDetailsClient'; 

const DressDetailPage = async ({ params }) => {
    const { id } = await params;
    
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/dress.json`, {
        cache: 'no-store'
    });
    const dresses = await res.json();
    
    
    const product = dresses.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            
            <DressDetailsClient product={product} />
        </div>
    );
};

export default DressDetailPage;