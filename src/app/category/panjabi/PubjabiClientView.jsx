"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { Dropdown, Button, Separator } from '@heroui/react'; 

const PanjabiClientView = ({ initialPubjabi }) => {
    const [panjabis, setPanjabis] = useState(initialPubjabi);
    const [selectedSort, setSelectedSort] = useState("Date (New > Old)");


    const handleSort = (key) => {
        let sortedData = [...panjabis];
        
        if (key === "low-to-high") {
            sortedData.sort((a, b) => a.price - b.price);
            setSelectedSort("Price: Low to High");
        } else if (key === "high-to-low") {
            sortedData.sort((a, b) => b.price - a.price);
            setSelectedSort("Price: High to Low");
        } else {
            setPanjabis(initialPubjabi);
            setSelectedSort("Date (New > Old)");
            return;
        }
        setPanjabis(sortedData);
    };

    return (
        <main className=" px-4 md:px-14 py-10">
            
            <div className="flex justify-between items-center mb-8 text-xs md:text-sm text-slate-500 font-medium border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className=' uppercase'>MAN / Panjabi</div>
                
               
                <Dropdown>
                    <Dropdown.Trigger>
                        <Button 
                            variant="bordered" 
                            size="sm" 
                            className="text-xs font-semibold rounded-md border-slate-200 dark:border-slate-700 cursor-pointer"
                        >
                            {selectedSort} ▾
                        </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Popover>
                        <Dropdown.Menu aria-label="Sort options">
                            <Dropdown.Item onPress={() => handleSort("default")}>
                                Date (New &gt; Old)
                            </Dropdown.Item>
                            <Separator className="my-1" />
                            <Dropdown.Item onPress={() => handleSort("low-to-high")}>
                                Price: Low to High
                            </Dropdown.Item>
                            <Separator className="my-1" />
                            <Dropdown.Item onPress={() => handleSort("high-to-low")}>
                                Price: High to Low
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {panjabis.map((item) => (
                    <div 
                        key={item.id} 
                        className="group flex flex-col justify-between bg-white dark:bg-slate-900 transition-all duration-300"
                    >
                       
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                          
                            {item.available && (
                                <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 rounded-xs">
                                    {item.available}
                                </span>
                            )}
                        </div>

                    
                        <div className="pt-4 pb-2 space-y-2 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xs md:text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase line-clamp-1">
                                    {item.title}
                                </h3>
                                
                                {item.sizes && (
                                    <p className="text-[11px] text-slate-400 mt-0.5">
                                        Sizes: {item.sizes.join(', ')}
                                    </p>
                                )}
                                
                                <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-300 mt-1">
                                    TK. {item.price}
                                </p>
                            </div>

                          
                            <div className="pt-2">
                                <Link href={`/category/panjabi/${item.id}`} className="w-full block">
                                    <Button 
                                        className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-950 text-xs font-bold py-2 rounded-md tracking-wider uppercase transition-colors duration-200 cursor-pointer"
                                    >
                                       Add to Cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default PanjabiClientView;