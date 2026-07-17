"use client";

import React from 'react';
import Marquee from 'react-fast-marquee'; 

const IMAGES = [
    "https://i.ibb.co.com/mV0QH0MS/rn-meh-ss26-sm1792-jacquard-stripped-cotton-luxury-shirt-435-202604041002415942.jpg",
    "https://i.ibb.co.com/PzV7Qkr9/rnp-fir-ss26-lt107-premium-lace-details-oversized-tops-109-202602140743107562-thumb.jpg",
    "https://i.ibb.co.com/Mx0YGJcK/rn-foy-ss26-sm2173-striped-cotton-shirt-115-202605090928311937-thumb.jpg",
    "https://i.ibb.co.com/WvCxtwXv/rn-foy-ss26-sm2157-printed-cotton-jacquard-shirt-2-202605040624286282.jpg",
    "https://i.ibb.co.com/LW6fxcN/rn-foy-ss26-sm2088-star-applique-cotton-short-sleeve-shirt-109-202605120635418087-thumb.jpg",
    "https://i.ibb.co.com/F2n4z5q/rn-foy-ss26-sm1981-embroidered-detail-jacquard-dress-shirt-67-202603030437168170.jpg",
    "https://i.ibb.co.com/p64MKbrK/rn-al-ss26-mp2144-color-block-polo-shirt-14-202605110854463495-thumb.jpg",
    "https://i.ibb.co.com/zHPLb3Ft/rn-foy-ss26-sm1787-embroidery-details-short-sleeve-shirt-115-202604040959536671.jpg",
    "https://i.ibb.co.com/Dgz6nbqs/rnp-chi-ss26-ls50-premium-heart-embroidered-ladies-shirt-4-202602100831585353.jpg"
];

const ArrivingSoon = () => {
    return (
        <section className="w-full py-12 bg-white dark:bg-slate-950 mt-6 overflow-hidden">
            
          
            <div className="">
                <h2 className="text-2xl md:text-4xl font-bold py-6 px-4 uppercase">
                    Arriving Soon
                </h2>
            </div>

            
            <Marquee 
                speed={80}         
                pauseOnHover={true}   
                gradient={false}      
            >
                {IMAGES.map((src, index) => (
                    <div 
                        key={index} 
                        className="relative w-40 sm:w-48 aspect-[3/4] bg-slate-50 dark:bg-slate-900 overflow-hidden group shrink-0 cursor-pointer mx-2"
                    >
                  
                        <span className="absolute top-2 left-2 z-10 bg-slate-950 text-white dark:bg-white dark:text-slate-955 text-[8px] font-bold tracking-widest px-2 py-0.5 uppercase">
                            New
                        </span>

                        
                        <img 
                            src={src} 
                            alt={`Arrival ${index}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                            loading="lazy"
                        />
                    </div>
                ))}
            </Marquee>

        </section>
    );
};

export default ArrivingSoon;