/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const { scrollY } = useScroll();
  const textX = useTransform(scrollY, [2000, 4000], [-200, 200]);

  return (
    <section id="about" className="py-32 bg-brand-dark text-brand-light overflow-hidden relative">
      <motion.div
        style={{ x: textX }}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-display font-black text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap"
      >
        Fremi Entreprenør
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-brand-orange/10 rounded-2xl overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
                alt="Pålitelig partner"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-brand-orange p-4 sm:p-6 md:p-12 rounded-xl md:rounded-3xl shadow-2xl flex flex-col justify-center">
              <div className="text-brand-dark font-display text-3xl sm:text-4xl md:text-7xl mb-1 md:mb-4 leading-none tracking-tighter">100%</div>
              <div className="text-brand-dark font-mono text-[7px] sm:text-[8px] md:text-xs uppercase tracking-[0.2em] font-bold leading-tight md:leading-relaxed">
                Kvalitetsgaranti på alt <br className="hidden md:block" /> utført arbeid
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange mb-6 block">Velkommen til Fremi!</span>
            <h2 className="text-5xl md:text-7xl mb-10 tracking-tighter font-black">Din pålitelige <br /> partner</h2>
            <div className="space-y-6 text-brand-light/70 text-lg font-light leading-relaxed">
              <p>
                Fremi utfører grave-, og entreprenørtjenester innen privat- og næringsmarkedet i Møre og Romsdal og omegn. Det er bare å ta kontakt med oss angående arbeidsområder, vi er svært fleksible, og vi skreddersyr løsninger som er tilpasset våre kunder.
              </p>
              <p>
                Alt arbeid blir utført profesjonelt og med svært høy standard. Materialer som anvendes er av høy kvalitet fra kjente vareleverandører. Vår styrke er er tillit og fokus på beste løsninger samt alltid topp kvalitet.
              </p>
              <p className="font-medium text-brand-light">
                Kontakt oss for en hyggelig og uforpliktende prat!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-brand-orange pl-6">
                <h4 className="text-xl mb-2 font-bold uppercase tracking-tighter">La fagfolk gjøre jobben</h4>
                <p className="text-brand-light/50 text-sm">For å sikre at jobben gjøres riktig, og for å unngå overraskelser er det alltid best å la fagfolk gjøre jobben.</p>
              </div>
              <div className="border-l-2 border-brand-orange pl-6">
                <h4 className="text-xl mb-2 font-bold uppercase tracking-tighter">Til avtalt tid og pris</h4>
                <p className="text-brand-light/50 text-sm">Vi holder det vi lover, og holder deg som kunde oppdatert til enhver tid.</p>
              </div>
              <div className="border-l-2 border-brand-orange pl-6">
                <h4 className="text-xl mb-2 font-bold uppercase tracking-tighter">Fleksibel aktør</h4>
                <p className="text-brand-light/50 text-sm">Vi kartlegger kundens behov og tilpasser deretter en løsning som begge partner er fornøyd med.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
