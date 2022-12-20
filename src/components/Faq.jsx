import React from 'react';
import Accordion from '../components/accordion/accordion';
import { LOREM } from '../lib/const';

function Faq() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-4 lg:my-20">
      <div>
        <h1 className="text-2xl font-bold text-center">Frequently Asked Question</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="flex flex-col gap-5 lg:pr-12">
        <Accordion title="Apa saja syarat yang dibutuhkan?" content={LOREM} />
        <Accordion title="Berapa hari minimal sewa mobil lepas kunci?" content={LOREM} />
        <Accordion title="Berapa hari sebelumnya sabaiknya booking sewa mobil?" content={LOREM} />
        <Accordion title="Apakah Ada biaya antar-jemput?" content={LOREM} />
        <Accordion title="Bagaimana jika terjadi kecelakaan" content={LOREM} />
      </div>
    </div>
  );
}

export default Faq;
