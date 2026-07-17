"use client";

import React, { useState, useContext } from 'react';
import { Button } from '@heroui/react';
import { CartContext } from '@/Context/ContextProvider';
import toast from 'react-hot-toast';


const BottomsDetailsClient = ({ product }) => {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
    const handleIncrease = () => setQuantity(quantity + 1);

    
    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size first!");
            return;
        }

        const numericPrice = Number(product.price);
        
        
        const cartItem = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: numericPrice,
            size: selectedSize,
            quantity: quantity,
            totalAmount: numericPrice * quantity 
        };

        
        const existingItemIndex = cart.findIndex(
            (item) => item.id === product.id && item.size === selectedSize
        );

        if (existingItemIndex > -1) {
            
            const updatedCart = [...cart];
            const newQuantity = updatedCart[existingItemIndex].quantity + quantity;
            
            updatedCart[existingItemIndex].quantity = newQuantity;
            updatedCart[existingItemIndex].totalAmount = updatedCart[existingItemIndex].price * newQuantity;
            
            setCart(updatedCart);
        } else {
      
            setCart([...cart, cartItem]);
        }
        toast.success('Item added Cart! Allow 2-3 weeks for processing.')
    };

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            
            <div className="text-xs text-slate-400 mb-8 tracking-wider uppercase">
                Women / Bottoms  
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                
              
                <div className="md:col-span-5 space-y-4">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-sm">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2">
                        <div className="aspect-[3/4] overflow-hidden border border-slate-900 dark:border-slate-100 rounded-sm cursor-pointer">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-sm cursor-pointer opacity-60 hover:opacity-100 transition-all">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-sm cursor-pointer opacity-60 hover:opacity-100 transition-all">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="aspect-[3/4] flex flex-col justify-center items-center border border-dashed border-slate-300 dark:border-slate-700 rounded-sm text-[10px] font-bold text-slate-500 uppercase cursor-pointer">
                            <span>Size</span>
                            <span>Chart</span>
                        </div>
                    </div>
                </div>

               
                <div className="md:col-span-7 space-y-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-slate-950 dark:text-white uppercase">
                            {product.title}
                        </h1>
                        <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-2">
                            TK. {product.price}
                        </p>
                    </div>

            
                    <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5">
                        <h4 className="text-xs font-bold tracking-wider text-slate-900 dark:text-slate-100 uppercase">
                            INFO GUIDE
                        </h4>
                        <div className="text-xs text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
                            <div>
                                <p className="font-semibold text-slate-800 dark:text-slate-300">Features:</p>
                                <ul className="list-disc list-inside mt-1 space-y-1">
                                    {product.info?.map((infoText, index) => (
                                        <li key={index}>{infoText}</li>
                                    )) || <li>Premium traditional bottoms styling finish.</li>}
                                </ul>
                            </div>
                        </div>
                    </div>

                 
                    <div className="border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-3 font-semibold">
                            <div className="w-1/3">Property</div>
                            <div className="w-2/3">Details</div>
                        </div>
                        <div className="flex p-3 border-b border-slate-200 dark:border-slate-800">
                            <div className="w-1/3 font-medium text-slate-500">Sizes</div>
                            <div className="w-2/3">{product.sizes?.join(', ')}</div>
                        </div>
                        <div className="flex p-3 items-center">
                            <div className="w-1/3 font-medium text-slate-500">Availability</div>
                            <div className="w-2/3 text-emerald-600 dark:text-emerald-500 font-bold flex items-center gap-1">
                                <span>{product.available || 'In Stock'}</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>

           
                    <div className="space-y-2">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">SELECT SIZE</span>
                        <div className="flex gap-2">
                            {product.sizes?.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-10 h-10 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                                        selectedSize === size
                                            ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                                            : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between border border-slate-200 dark:border-slate-800 rounded-md p-1 min-w-[120px]">
                            <button 
                                onClick={handleDecrease}
                                className="w-8 h-8 flex items-center justify-center text-lg text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
                            >
                                -
                            </button>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">{quantity}</span>
                            <button 
                                onClick={handleIncrease}
                                className="w-8 h-8 flex items-center justify-center text-lg text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
                            >
                                +
                            </button>
                        </div>

                        <Button 
                            onClick={handleAddToCart}
                            className="flex-1 bg-slate-950 hover:bg-slate-900 dark:bg-slate-50 dark:hover:bg-slate-200 text-white dark:text-slate-950 text-xs font-bold py-6 rounded-md tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                        >
                            ADD TO CART
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default BottomsDetailsClient;