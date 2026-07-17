import React from 'react';
import FormalShirtDetailsClient from './FormalShirtDetailsClient';
import shirtsData from '@/public/formalshirt.json'; 

const FormalShirtDetailPage = async ({ params }) => {
    const { id } = await params;
    
   
    const product = shirtsData.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <FormalShirtDetailsClient product={product} />
        </div>
    );
};

export default FormalShirtDetailPage;