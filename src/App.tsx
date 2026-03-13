/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll } from 'motion/react';
import {
  Navbar,
  Hero,
  Marquee,
  Services,
  About,
  Contact,
  Footer,
} from './components';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="selection:bg-brand-orange selection:text-brand-dark relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
