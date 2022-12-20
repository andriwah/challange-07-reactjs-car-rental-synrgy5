import React from 'react';

export default function CTABanner() {
  return (
    <>
      <div className="mt-20 px-10">
        <div className="bg-darkblue rounded-xl sm:h-[326px] h-[400px] flex flex-col gap-5 items-center justify-center p-10">
          <p className="text-2xl md:text-4xl font-bold text-white text-center">Sewa Mobil di (Lokasimu) Sekarang</p>
          <p className="text-sm text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className="
        bg-[#5CB85F]
        hover:bg-green-300
        text-white font-bold 
        py-2 
        px-4
        mb-4 
        border
        border-gray-400
        rounded"
          >
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
    </>
  );
}
