/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Construction, Truck, HardHat, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-20 pb-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
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
            <ul className="space-y-4">
              <li><a href="#home" className="text-brand-light/60 hover:text-brand-light transition-colors">Forside</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors">Tjenester</a></li>
              <li><a href="#about" className="text-brand-light/60 hover:text-brand-light transition-colors">Om oss</a></li>
              <li><a href="#contact" className="text-brand-light/60 hover:text-brand-light transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-8">Tjenester</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors">Graving</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors">Drenering</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors">Tomteutgraving</a></li>
              <li><a href="#services" className="text-brand-light/60 hover:text-brand-light transition-colors">Massetransport</a></li>
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

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand-light/20">
            Designet for fremtiden
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-brand-light/20 hover:text-brand-orange transition-colors"><Construction size={20} /></a>
            <a href="#" className="text-brand-light/20 hover:text-brand-orange transition-colors"><Truck size={20} /></a>
            <a href="#" className="text-brand-light/20 hover:text-brand-orange transition-colors"><HardHat size={20} /></a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
