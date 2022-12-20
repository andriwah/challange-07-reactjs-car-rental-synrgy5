import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { BiPurchaseTag, BiTimeFive, BiAward } from 'react-icons/bi';

export default function WhyUs() {
  return (
    <>
      <div className="container my-10 lg:mx-7">
        <div className="mx-aut text-center lg:text-start lg:mx-4">
          <h1 className="text-3xl font-semibold">Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="border-2 border-[#D0D0D0] drop-shadow-lg rounded-md p-6">
            <div className="flex items-center justify-center text-whitedark mb-5 rounded-full w-8 h-8 bg-yellowcard">
              <FaRegThumbsUp />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold ">Mobil Lengkap</p>
              <p className="text-sm">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>

          <div className="border-2 border-[#D0D0D0] drop-shadow-lg rounded-md p-6">
            <div className="flex items-center justify-center text-whitedark mb-5 rounded-full w-8 h-8 bg-[#FA2C5A]">
              <BiPurchaseTag />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold ">Harga Murah</p>
              <p className="text-sm">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>

          <div className="border-2 border-[#D0D0D0] drop-shadow-lg rounded-md p-6">
            <div className="flex items-center justify-center text-whitedark mb-5 rounded-full w-8 h-8 bg-darkblue">
              <BiTimeFive />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold ">Layanan 24 Jam</p>
              <p className="text-sm">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>

          <div className="border-2 border-[#D0D0D0] drop-shadow-lg rounded-md p-6">
            <div className="flex items-center justify-center text-whitedark mb-5 rounded-full w-8 h-8 bg-limegreenlight">
              <BiAward />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold ">Sopir Profesional</p>
              <p className="text-sm">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
