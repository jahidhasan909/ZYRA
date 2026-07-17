"use client";

import React, { useContext } from 'react';
import { CartContext } from '@/Context/ContextProvider';
import { Button } from '@heroui/react';
import toast from 'react-hot-toast';

const Cartpage = () => {
    const { cart, setCart } = useContext(CartContext);

    const handleRemoveItem = (id, size) => {
        const updatedCart = cart.filter(item => !(item.id === id && item.size === size));
        setCart(updatedCart);
        toast.error("Item removed from cart");
    };

    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleCheckout = () => {
        if (cart.length === 0) return;
        
        setCart([]);
        toast.success("We have successfully processed your payment.");
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-16 min-h-[75vh]">
   
            <div className="flex justify-between items-baseline border-b border-slate-100 dark:border-slate-800 pb-6 mb-10">
                <h1 className="text-xl font-medium tracking-widest uppercase text-slate-900 dark:text-white">
                    Shopping Bag
                </h1>
                <span className="text-xs text-slate-400 tracking-widest uppercase">
                    [{cart.length} {cart.length === 1 ? 'item' : 'items'}]
                </span>
            </div>

            {cart.length === 0 ? (
            
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">Your bag is empty.</p>
                   
                </div>
            ) : (
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    
                    <div className="lg:col-span-7 space-y-8 divide-y divide-slate-100 dark:divide-slate-800">
                        {cart.map((item, index) => (
                            <div 
                                key={`${item.id}-${item.size}-${index}`} 
                                className={`flex gap-6 ${index > 0 ? 'pt-8' : ''}`}
                            >
                          
                                <div className="w-24 aspect-[3/4] overflow-hidden bg-slate-50 dark:bg-slate-900 flex-shrink-0 relative group">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" 
                                    />
                              
                                    <button 
                                        onClick={() => handleRemoveItem(item.id, item.size)}
                                        className="absolute top-2 left-2 bg-white/90 dark:bg-slate-950/90 text-slate-950 dark:text-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600"
                                        title="Delete Item"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                                
                               
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start gap-4">
                                            <h3 className="text-xs font-semibold text-slate-950 dark:text-white uppercase tracking-wider line-clamp-2">
                                                {item.title}
                                            </h3>
                                            
                                            
                                            <button 
                                                onClick={() => handleRemoveItem(item.id, item.size)}
                                                className="text-slate-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                                                title="Remove Item"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        
                                        <div className="mt-3 space-y-1 text-[10px] text-slate-400 uppercase tracking-widest">
                                            <p>Size: <span className="text-slate-800 dark:text-slate-200">{item.size}</span></p>
                                            <p>Qty: <span className="text-slate-800 dark:text-slate-200">{item.quantity}</span></p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-end border-t border-slate-50 dark:border-slate-900 pt-3">
                                        <span className="text-[10px] text-slate-400 tracking-widest">TK. {item.price} each</span>
                                        <span className="text-xs font-bold text-slate-950 dark:text-white tracking-wider">
                                            TK. {item.totalAmount || (item.price * item.quantity)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

               
                    <div className="lg:col-span-5 border border-slate-100 dark:border-slate-800 p-8 bg-slate-50/50 dark:bg-slate-900/10">
                        <h2 className="text-xs font-bold tracking-widest text-slate-950 dark:text-white uppercase pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                            Summary
                        </h2>

                        <div className="space-y-4 text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-slate-950 dark:text-white">TK. {totalAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Free</span>
                            </div>
                            
                            <div className="flex justify-between text-xs font-bold text-slate-950 dark:text-white pt-5 border-t border-slate-200 dark:border-slate-800">
                                <span>Total Amount</span>
                                <span>TK. {totalAmount}</span>
                            </div>
                        </div>

                        <Button 
                            onClick={handleCheckout}
                            className="w-full mt-8 bg-slate-950 hover:bg-slate-900 dark:bg-slate-50 dark:hover:bg-slate-200 text-white dark:text-slate-955 text-[10px] font-bold py-6 rounded-none tracking-widest uppercase transition-all duration-300 cursor-pointer"
                        >
                            PROCEED TO CHECKOUT
                        </Button>
                    </div>

                </div>
            )}
        </main>
    );
};

export default Cartpage;