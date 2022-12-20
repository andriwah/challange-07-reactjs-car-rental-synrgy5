import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaTwitch } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <div>
      <footer class="pt-16 pb-20">
        <div class="container px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-1/4 flex justify-center">
              <div class="w-full grid grid-rows-3 py-2 lg:px-7justify-center items-center">
                <p class="text-lg">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p class="text-lg">binarcarrental@gmail.com</p>
                <p class="text-lg">081-233-334-808</p>
              </div>
            </div>
            <div class="w-full lg:w-1/4 flex justify-center">
              <div class="w-full grid gap-2 grid-rows-4 py-2 lg:px-7 lg:justify-center">
                <a href="#service" class="font-semibold text-lg">
                  Our Services
                </a>
                <a href="#whyus" class="font-semibold text-lg">
                  Why Us
                </a>
                <a href="#testimonials" class="font-semibold text-lg">
                  Testimonial
                </a>
                <a href="#faq" class="font-semibold text-lg">
                  FAQ
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/4 flex lg:justify-center">
              <div class="flex flex-wrap py-2 lg:h-0 lg:px-7 lg:justify-center">
                <p class="text-lg w-full pb-2">Connect with us</p>
                <div class="flex items-center w-full pt-2 ">
                  <FaFacebookF />
                  <FaInstagram className="ml-4" />
                  <FaTwitter className="ml-4" />
                  <FaEnvelope className="ml-4" />
                  <FaTwitch className="ml-4" />
                </div>
              </div>
            </div>
            <div class="w-full grid grid-rows-2 pt-10 lg:w-1/4 lg:h-28 lg:justify-center">
              <p class="text-lg">Copyright Binar 2022</p>
              <a href="#home" class="w-20 h-8 block bg-blue-900"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
