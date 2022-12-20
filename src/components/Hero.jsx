import React from 'react';
import Car from '../assets/car.png'

export default function Hero() {
  return (
    <div className='bg-[#F1F3FF] w-full flex flex-col lg:flex-row lg:pt-20'>
      <div className="pt-20 px-4 lg:mx-16 lg:pb-16">
        <h1 className="text-4xl font-semibold leading-normal">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p className="text-lg my-4 ">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
        <button className='
        bg-[#5CB85F]
        hover:bg-green-300
        text-white font-bold 
        py-2 
        px-4
        mb-4 
        border
        border-grey-100 
        rounded'>Mulai Sewa Mobil</button>
      </div>
      <div className="pt-5 z-0">
        <img src={Car} alt="car" width={10} className="h-[100%] w-[95%] relative left-5 lg:w-[115rem] lg:left-0 z-0"/>
      </div>
    </div>
  );
}
