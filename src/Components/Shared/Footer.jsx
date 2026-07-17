import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#94A3B8] pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className=" mx-auto px-4  lg:px-15">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12">


          <div className="space-y-6">

            <div className="flex items-center gap-1.5 text-4xl font-black tracking-widest text-white select-none">
              ZYRA
              <span className="text-[10px] font-normal tracking-normal self-start -mt-1">TM</span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              The Beat Clothing E-commerce Website is a dynamic online platform designed to offer a seamless shopping experience for fashion enthusiasts worldwide.
            </p>
          </div>


          <div>
            <h3 className="text-white font-bold tracking-wider text-base mb-6 uppercase">
              Company
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors duration-200">About Zyra</Link>
              </li>
              <li>
                <Link href="#mission" className="hover:text-white transition-colors duration-200">Mission & Vision</Link>
              </li>
              <li>
                <Link href="#management" className="hover:text-white transition-colors duration-200">Management</Link>
              </li>
              <li>
                <Link href="#size-chart" className="hover:text-white transition-colors duration-200">Size Chart</Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-bold tracking-wider text-base mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#track-order" className="hover:text-white transition-colors duration-200">Order Track</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors duration-200">FAQ</Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              </li>
            </ul>
          </div>


          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold tracking-wider text-base mb-6 uppercase">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-400" />
                  <a href="tel:01901-026524" className="hover:text-white transition-colors">01601-000000</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-slate-400" />
                  <a href="mailto:beatazafir11@gmail.com" className="hover:text-white transition-colors">ZYRAoffice@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-white font-bold tracking-wider text-sm mb-4 uppercase">
                Locate Us
              </h4>
              <Link
                href="/stores"
                className="inline-flex items-center justify-center gap-2 w-full max-w-[240px] border border-slate-700 hover:border-white py-3 px-4 text-xs font-bold tracking-widest text-white bg-slate-950/40 hover:bg-white/5 rounded-sm transition-all duration-300"
              >
                <MapPin size={14} className="fill-white text-transparent" />
                FIND A STORE
              </Link>
            </div>
          </div>

        </div>


        <div className="border-t border-slate-800/80 my-6"></div>


        <div className="flex flex-col max-w-11/12  md:flex-row items-center justify-between gap-6 pt-2 text-xs text-slate-400">
          <p className="text-center md:text-left">
            Copyright © {currentYear} ZYRA. All rights reserved. Developed By{' '}
            <a href="https://itcroc.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              itcroc
            </a>
          </p>


          <div className="flex items-center gap-2 flex-wrap justify-center opacity-85 hover:opacity-100 transition-opacity duration-300">






            <Image src={'https://i.ibb.co.com/1Gzx0Mdw/visa.png'} width={50} height={40} className='mr-2' alt=''></Image>
            <Image src={'https://i.ibb.co.com/TqdtNnt7/Master-Card-Logo-svg.webp'} width={50} height={40} alt=''></Image>
            <Image src={'https://i.ibb.co.com/0VvnShTb/BKash-Icon2-Logo-wine.jpg'} width={50} height={40} alt=''></Image>
            <Image src={'https://i.ibb.co.com/cK6yPZ2j/id-O2-mque7-1784252339816.png'} width={50} height={50} alt=''></Image>
            <Image src={'https://i.ibb.co.com/35N4XLwd/Nagad-Logo-wine.png'} width={50} height={50} alt=''></Image>

            
          </div>
        </div>

      </div>
    </footer>
  );
}