import * as React from 'react';

import TransationCard    from '@/components/Card/Card'
import Hero from '@/components/hero/hero';
import HeroText from '@/components/hero/heroText';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar/Navbar';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Navbar/>
      <div className=' mt-2' >
      <Hero/>
      <HeroText/>
      <TransationCard/>
      </div>


    </Layout>
  );
}
