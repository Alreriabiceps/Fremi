/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-brand-dark py-10 sm:py-16 overflow-hidden border-y border-white/10 relative"
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 sm:gap-12 md:gap-16 mx-4 sm:mx-8">
            <span className="text-brand-light font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-black opacity-90">Graving</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-orange rotate-45 shrink-0" />
            <span className="text-brand-light font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-black opacity-90">Drenering</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-orange rotate-45 shrink-0" />
            <span className="text-brand-light font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-black opacity-90">Transport</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-orange rotate-45 shrink-0" />
            <span className="text-brand-light font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter font-black opacity-90">Grunnarbeid</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-orange rotate-45 shrink-0" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
