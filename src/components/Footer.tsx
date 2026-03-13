/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Construction, Truck, HardHat, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
                <span className="text-brand-dark font-display font-bold text-lg">F</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">Fremi</span>
            </div>
            <p className="text-brand-light/40 text-sm leading-relaxed">
              Profesjonell maskinentreprenør i Møre og Romsdal. Kvalitet og tillit i hvert prosjekt.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-8">Navigasjon</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#home" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Forside</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Tjenester</a></li>
              <li><a href="#about" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Om oss</a></li>
              <li><a href="#contact" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-6 sm:mb-8">Tjenester</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Graving</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Drenering</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Tomteutgraving</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors py-1 block min-h-[44px] flex items-center">Massetransport</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-8">Info</h4>
            <div className="space-y-4 text-brand-light/60 text-sm">
              <p>Orgnr: 912 166 805</p>
              <p>© {new Date().getFullYear()} Fremi</p>
              <a href="#" className="flex items-center gap-2 hover:text-brand-light transition-colors">
                Personvern <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand-light/20 text-center md:text-left">
            Designet for fremtiden
          </div>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="p-2 text-brand-light/20 hover:text-brand-orange transition-colors touch-manipulation" aria-label="Graving"><Construction size={20} /></a>
            <a href="#" className="p-2 text-brand-light/20 hover:text-brand-orange transition-colors touch-manipulation" aria-label="Transport"><Truck size={20} /></a>
            <a href="#" className="p-2 text-brand-light/20 hover:text-brand-orange transition-colors touch-manipulation" aria-label="Entreprenør"><HardHat size={20} /></a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
