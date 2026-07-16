import React from 'react';
import ImageSlider from './SwiperJs';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-50 flex items-center">
                <div className="ml-20 max-w-lg">
                    <h1 className="text-6xl font-bold text-white">
                        Discover Your Signature Style
                    </h1>

                    <p className="mt-4 text-gray-200">
                        Timeless fashion, crafted for every moment.
                    </p>

                    <Link href={'/products'}>
                    <Button className="mt-6 bg-white text-black">
                        View Collection
                    </Button></Link>
                </div>
            </div>
            <ImageSlider></ImageSlider>
        </div>
    );
};

export default Banner;