import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  const collections = [
    {
      id: 1,
      title: "MAN Shirt Formal",
      image:
        "https://i.ibb.co.com/VY45gCJw/Product-Image-1769496706.jpg",
        href:'/category/formalshirt'
    },
    {
      id: 2,
      title: "MAN Ethnic Wear",
      image:
        "https://i.ibb.co.com/svB2013M/Product-Image-1773494262.jpg",
        href:'/category/panjabi'
    },
    {
      id: 3,
      title: "women's western wear",
      image:
        "https://i.ibb.co.com/W4qr2vjM/DSC0031-22581bd5-7d8c-4452-823b-f7d1b6be6f82.webp",
        href:'/category/western'
    },
    {
      id: 4,
      title: "Summer Essentials",
      image:
        "https://i.ibb.co.com/TxQ5CFgm/Product-Image-1714122035.jpg",
        href:'/category/tshirt'
    },
  ];

  return (
    <section className="mt-13">
      <div className="px-4 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          New Arrivals
        </h2>

       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {collections.map((item) => (
          <Link  key={item.id} href={item.href}>
          <div
           
            className="group relative overflow-hidden  bg-[#f8f6f3] shadow-sm"
          >
      
            <div className="h-[520px] flex items-center justify-center overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={900}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl md:text-2xl uppercase  font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;