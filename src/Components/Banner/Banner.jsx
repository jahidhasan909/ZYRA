import React from 'react';
import ImageSlider from './SwiperJs';
import { Button } from '@heroui/react';
import Link from 'next/link';
import AnimatedParagraph from './PAniamtion';
import AnimatedHeading from './HAnimation';

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-50 flex items-center">
                <div className="ml-20 max-w-lg">
                    <AnimatedHeading></AnimatedHeading>

                   <AnimatedParagraph></AnimatedParagraph>
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