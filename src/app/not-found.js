"use client"
import Link from "next/link";
import { kaushan } from "@/app/font";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-slate-950 px-6 transition-colors duration-300">
      <div className="text-center">
       
        <h2 className={`${kaushan.className} text-6xl font-semibold mb-6`}>Zyra</h2>
        
        
        <h1 className="text-8xl font-black tracking-tighter text-slate-950 dark:text-white mb-2 select-none">
          404
        </h1>
        
        <p className="text-xs tracking-widest text-slate-400 uppercase mb-8">
          The page you are looking for does not exist.
        </p>

       
        <Link 
          href="/" 
          className="inline-block bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}