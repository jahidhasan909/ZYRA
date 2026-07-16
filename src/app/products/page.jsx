import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
    


    {
        id: 1,
        title: 'Formal Shirt',
        slug: 'formalshirt',
        imageUrl: 'https://i.ibb.co.com/pvxSqVX6/Product-Image-11756103026.jpg',
    },
    {
        id: 2,
        title: 'Panjabi',
        slug: 'panjabi',
        imageUrl: 'https://i.ibb.co.com/35v59Kv9/Product-Image-11779353112.jpg',
    },
    {
        id: 6,
        title: 'T-Shirt',
        slug: 't-shirt',
        imageUrl: 'https://i.ibb.co.com/dJgDCpNF/Product-Image-1758526311.jpg',
    },
    
];
const categorieswomen = [
    


    {
        id: 1,
        title: 'western wear',
        slug: 'western',
        imageUrl: 'https://i.ibb.co.com/CKFVqQgn/Western-bcb70094-ac91-462e-bb72-57f20c5ece86-1066x.webp',
    },
    {
        id: 2,
        title: 'Dress',
        slug: 'dress',
        imageUrl: 'https://i.ibb.co.com/qMbFtYjC/Product-Image-11758704662.jpg',
    },
    {
        id: 3,
        title: 'Bottoms',
        slug: 'bottoms',
        imageUrl: 'https://i.ibb.co.com/rKRpXNfS/Product-Image-1779692545.jpg',
    },
   
];

export default function ProductGrid() {
    return (
        <section className="py-12 px-4 md:px-14  bg-white">
       
            <section>
                

                <h1 className=' uppercase font-bold text-3xl py-2'>Men</h1>
                <Image width={1000} height={400} alt='' className='w-full h-[700px] object-fill mb-3' src={'https://i.ibb.co.com/TD0M2bWX/643315130-1262203936017984-326880300960894865-n-Photoroom.png'}></Image>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`relative overflow-hidden group aspect-[4/3] bg-gray-100 ${category.isFullWidth
                                    ? 'sm:col-span-2 md:col-span-3 aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/7]'
                                    : ''
                                }`}
                        >

                            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                                <Image
                                    src={category.imageUrl}
                                    alt={category.title}
                                    fill
                                    priority={category.id <= 3}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-top"
                                />

                                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300"></div>
                            </div>


                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-3 drop-shadow-sm">
                                    {category.title}
                                </h3>

                                <Link
                                    href={`/category/${category.slug}`}
                                    className="relative inline-block text-xs font-semibold tracking-widest uppercase pb-1 overflow-hidden"
                                >
                                    <span>Shop Now</span>

                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left scale-x-100 group-hover:scale-x-110"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
      




            <section>
                <h1 className=' uppercase font-bold text-3xl py-2'>Women</h1>
                <Image width={1200} height={400} alt='' className='w-full h-[700px] object-fill mb-3 border border-gray-100' src={'https://i.ibb.co.com/FkGWkpF3/508684623-3582338875233100-2910032981174291059-n-Photoroom.png'}></Image>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categorieswomen.map((category) => (
                        <div
                            key={category.id}
                            className={`relative overflow-hidden group aspect-[4/3] bg-gray-100 ${category.isFullWidth
                                    ? 'sm:col-span-2 md:col-span-3 aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/7]'
                                    : ''
                                }`}
                        >

                            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                                <Image
                                    src={category.imageUrl}
                                    alt={category.title}
                                    fill
                                    priority={category.id <= 3}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover object-top"
                                />

                                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300"></div>
                            </div>


                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-3 drop-shadow-sm">
                                    {category.title}
                                </h3>

                                <Link
                                    href={`/category/${category.slug}`}
                                    className="relative inline-block text-xs font-semibold tracking-widest uppercase pb-1 overflow-hidden"
                                >
                                    <span>Shop Now</span>

                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 origin-left scale-x-100 group-hover:scale-x-110"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}