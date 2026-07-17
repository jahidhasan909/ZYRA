"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function Provider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") return [];

    const savedCart = localStorage.getItem("zyra_cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("zyra_cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}