import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TanjimSquad = () => {
    return (
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-2 gap-10 items-center  border-t border-gray-100">
            <div className="w-full">
                <Image
                    src="https://i.ibb.co.com/C5H23nmp/Tanjim-Squad-Web.png"
                    alt="Tanjim Squad"
                    width={900}
                    height={700}
                    className="w-full h-auto  rounded-sm"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image
                    src="https://i.ibb.co.com/jZLFBytR/Chat-GPT-Image-Jul-17-2026-at-07-50-03-AM-removebg-preview.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-[420px] h-auto"
                />

               <Link href={'/products'}>
                <Button className="mt-4 mb-3 bg-black text-white">
                    Shop Now
                </Button></Link>
            </div>
        </div>

    );
};

export default TanjimSquad;