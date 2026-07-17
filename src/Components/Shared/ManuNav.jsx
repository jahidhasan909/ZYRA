"use client";

import React from 'react';
import Link from 'next/link';
import { IoChevronDownOutline } from 'react-icons/io5';

const ManuNav = () => {
    
    const menCategories = [
        { name: "Formal Shirts", href: "/category/formalshirt" }, 
        { name: "T-Shirts", href: "/category/tshirt" }, 
        { name: "Panjabi", href: "/category/panjabi" }
    ];

    const womenCategories = [
        { name: "Dresses", href: "/category/dress" }, 
        { name: "Western", href: "/category/western" }, 
        { name: "Bottoms", href: "/category/bottoms" }
    ];

    return (
        <div className="w-full bg-white top-14 sticky z-[9999] px-11 h-10 border-t border-slate-800">
            <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase h-full">
                
                
                <div className="relative group flex items-center h-full cursor-pointer px-4 hover:bg-gray-300 transition-colors">
                    <span className="flex items-center gap-1.5">
                        Men <IoChevronDownOutline className="group-hover:rotate-180 transition-transform duration-300" size={12} />
                    </span>
                    
                    <div className="absolute top-10 left-0 w-48 bg-white text-slate-955 border border-slate-100  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <ul className="py-2 divide-y divide-slate-50 text-[10px] font-medium">
                            {menCategories.map((item, index) => (
                                <li key={index}>
                                    
                                    <Link 
                                        href={item.href} 
                                        className="block px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors uppercase"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

               
                <div className="relative group flex items-center h-full cursor-pointer px-4 hover:bg-gray-300 transition-colors">
                    <span className="flex items-center gap-1.5">
                        Women <IoChevronDownOutline className="group-hover:rotate-180 transition-transform duration-300" size={12} />
                    </span>
                    
                    <div className="absolute top-10 left-0 w-48 bg-white text-slate-955 dark:text-white border border-slate-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <ul className="py-2 divide-y divide-slate-50  text-[10px] tracking-widest font-medium">
                            {womenCategories.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="block px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors uppercase"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManuNav;