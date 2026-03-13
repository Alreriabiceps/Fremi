/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-brand-light">
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <motion.div
          style={{ y: y1, opacity }}
          className="w-full h-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
            alt="Construction Site in Skodje"
            className="w-full h-full object-cover object-right lg:object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/95 via-brand-light/60 via-brand-light/20 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-brand-light/80 via-brand-light/20 to-transparent lg:hidden block" />
          <div className="absolute inset-0 bg-brand-dark/5" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange mb-6 block bg-brand-light/50 backdrop-blur-sm inline-block px-2 py-1 rounded">
                Pålitelig og sikker maskinentreprenør
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[11rem] leading-[0.82] mb-6 sm:mb-8 font-black tracking-tighter">
                Kraft <br />
                <span className="text-stroke text-transparent">Presisjon</span> <br />
                Tillit
              </h1>
              <p className="max-w-md text-brand-dark/80 text-base sm:text-lg mb-8 sm:mb-10 font-medium leading-relaxed bg-brand-light/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/20">
                Vi nyter stor tillit blant våre kunder og kan vise til gode referanser fra tidligere arbeid. Din naturlige partner i Møre og Romsdal.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#services"
                  className="bg-brand-dark text-brand-light px-6 py-4 sm:px-10 sm:py-5 rounded-full font-display font-bold uppercase tracking-tighter flex items-center gap-2 sm:gap-3 hover:bg-brand-orange transition-all group shadow-xl min-h-[44px] sm:min-h-0"
                >
                  Våre Tjenester
                  <ArrowRight className="group-hover:translate-x-2 transition-transform shrink-0" size={20} />
                </a>
                <a
                  href="#contact"
                  className="bg-white/80 backdrop-blur-sm border border-brand-dark/10 px-6 py-4 sm:px-10 sm:py-5 rounded-full font-display font-bold uppercase tracking-tighter hover:bg-brand-dark hover:text-brand-light transition-all shadow-lg min-h-[44px] sm:min-h-0"
                >
                  Be om tilbud
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-4 right-4 sm:bottom-12 sm:left-6 sm:right-6 flex flex-col sm:flex-row justify-end sm:justify-between items-stretch sm:items-end z-20 gap-4 sm:gap-6">
        <div className="hidden md:block max-w-[280px] flex-shrink-0 mr-4">
          <div className="flex gap-8 bg-brand-light/40 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
            <div>
              <div className="text-4xl font-display font-bold">10+</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">Års Erfaring</div>
            </div>
            <div className="w-px h-12 bg-brand-dark/10" />
            <div>
              <div className="text-4xl font-display font-bold">100%</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">Fornøyde Kunder</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch sm:items-end gap-3 sm:gap-4">
          <div className="bg-brand-dark text-brand-light p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/10">
            <div className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-1">Hovedkontor</div>
            <div className="text-lg sm:text-xl font-display font-bold uppercase tracking-tighter flex items-center gap-2">
              <MapPin size={18} className="text-brand-orange shrink-0" />
              Skodje, Norge
            </div>
          </div>
          <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] opacity-30 origin-bottom-right text-right sm:text-right">
            EST. 2013 • MØRE OG ROMSDAL
          </div>
        </div>
      </div>
    </section>
  );
}
