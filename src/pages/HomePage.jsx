import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurService from '../components/OurService';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
    </>
  );
}
