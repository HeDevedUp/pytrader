import * as React from 'react';

import Navbar from '@/components/Navbar/Navbar';

import {
  GetStarted,
  Hero,
  HeroText,
  Saly,
  TransationCard,
  WhatsNew,
} from '@/sections';

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <div className=' mt-2'>
        <Hero />
      </div>

      <div>
        <HeroText />
      </div>

      <div>
        <TransationCard />
      </div>

      <div>
        <GetStarted />
      </div>

      <div>
        <WhatsNew />
      </div>

      <div>
        <Saly />
      </div>
    </div>
  );
}
