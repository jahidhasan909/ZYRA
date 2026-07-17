import React from 'react';
import TshirtDetailsClient from './TshirtDetailsClient';

const TshirDetailsPage = async ({ params }) => {
    const { id } = await params;
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/t-shirt.json`, {
        cache: 'no-store'
    });
    const tshirts = await res.json();
    
    
    const product = tshirts.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <TshirtDetailsClient product={product} />
        </div>
    );
};

export default TshirDetailsPage;