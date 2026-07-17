"use client"
import { useContext, useState } from "react";
import { Button } from "@heroui/react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { kaushan } from "@/app/font";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartContext } from "@/Context/ContextProvider";


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()
  const { cart } = useContext(CartContext);

  const link = <>
    <li><Link className={`${pathname === '/' && ' underline'} hover:bg-gray-200 p-1 rounded-md`} href={'/'}>Home</Link></li>
    <li><Link className={`${pathname === '/products' && ' underline'} hover:bg-gray-200 p-1 rounded-md`} href={'/products'}>Products</Link></li>
    <li><Link className={`${pathname === '/cart' && ' underline'} hover:bg-gray-200 p-1 rounded-md`} href={'/cart'}>Cart</Link></li>
  </>

  return (
    <nav className="   fixed  top-0 z-[9999] w-full border-b border-separator bg-white/77 backdrop-blur-2xl">
      <header className="flex h-16  items-center justify-between px-13">
        <div className="flex lg:hidden items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden items-center gap-2 md:flex uppercase font-semibold">
          {link}
        </ul>

        <Link href={'/'}><h1 className={`${kaushan.className} text-2xl font-semibold`}>Zyra</h1></Link>

        <div className="flex gap-2 items-center">
          <Link className="" href={'/products'}><IoSearchOutline size={20} /></Link>
          <Link href={'/cart'} className="relative p-1">
            <BsCart2 size={20} />
            <span className="absolute -top-1 -right-1 bg-slate-950 text-white dark:bg-white dark:text-slate-950 text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center scale-90">
              {cart ? cart.length : 0}
            </span>
          </Link>

        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-1 p-4 uppercase font-semibold">
            {link}
          </ul>
        </div>
      )}
    </nav>
  );
}