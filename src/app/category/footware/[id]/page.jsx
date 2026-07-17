import React from 'react';
import FootWareDetailsClientView from './FootWareDetailsView';
import footwareData from '../../../../../public/footware.json';

const FootwareDetailPage = async ({ params }) => {
    const { id } = await params;
    

    const product = footwareData.find((item) => item.id.toString() === id.toString()) || null;

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-slate-500 font-medium">
                Product not found!
            </div>
        );
    }

    return (
        <div className="dark:bg-slate-950 min-h-screen">
            <FootWareDetailsClientView product={product} />
        </div>
    );
};

export default FootwareDetailPage;