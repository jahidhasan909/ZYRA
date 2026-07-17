
import { kaushan } from "@/app/font"; 

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300">
      
      <div className="flex flex-col items-center gap-5 text-center">
        
        
        <h1 
          className={`${kaushan.className}
            text-5xl font-semibold tracking-wide select-none 
            text-slate-950 dark:text-white 
            animate-pulse
          `}
          style={{ animationDuration: '1.5s' }}
        >
          Zyra
        </h1>
        
        
        <div className="relative w-24 h-[2px] bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-full">
        
          <div 
            className="absolute top-0 left-0 h-full bg-slate-950 dark:bg-white animate-[loading_1.5s_ease-in-out_infinite] w-1/2 rounded-full"
          />
        </div>

       
        <p className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase mt-2">
          Loading
        </p>
      </div>

      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}