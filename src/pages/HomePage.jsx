import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurService from '../components/OurService';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import CTABanner from '../components/CTABanner';
import FooterSection from '../components/FooterSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <Faq />
      <FooterSection />
    </>
  );
}
