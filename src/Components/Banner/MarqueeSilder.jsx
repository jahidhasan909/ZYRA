import React from "react";
import Marquee from "react-fast-marquee";
import { Truck, ShieldCheck, RotateCcw, Sparkles } from "lucide-react";

const MarqueeSlider = () => {
  return (
    <div className="bg-slate-200 text-black py-3 ">
      <Marquee speed={60} pauseOnHover gradient={false}>
        <div className="flex items-center gap-16 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-yellow-400" />
            <span>Summer Sale • Up to 40% Off</span>
          </div>

          <div className="flex items-center gap-2">
            <Truck size={18} className="text-green-400" />
            <span>Free Shipping on Orders Over $99</span>
          </div>

          <div className="flex items-center gap-2">
            <RotateCcw size={18} className="text-orange-400" />
            <span>Easy Returns Within 30 Days</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-400" />
            <span>100% Secure Checkout</span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;