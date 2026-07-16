import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TanjimSquad = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="w-full">
                <Image
                    src="https://i.ibb.co.com/C5H23nmp/Tanjim-Squad-Web.png"
                    alt="Tanjim Squad"
                    width={900}
                    height={700}
                    className="w-full h-auto "
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image
                    src="https://i.ibb.co.com/yFdYBSfn/Screenshot-2026-07-17-at-1-43-45-AM-removebg-preview.png"
                    alt=""
                    width={500}
                    height={500}
                    className="w-[420px] h-auto"
                />

                <Button className="mt-4 bg-black text-white">
                    Shop Now
                </Button>
            </div>
        </div>

    );
};

export default TanjimSquad;