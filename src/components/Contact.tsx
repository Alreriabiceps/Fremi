/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-brand-light grid-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange mb-4 sm:mb-6 block">Kontakt Oss</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl">La oss starte <br /> <span className="text-stroke">prosjektet</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-dark text-brand-light flex items-center justify-center rounded-full shrink-0 min-w-[44px] min-h-[44px]">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">Telefon</div>
                  <a href="tel:92604072" className="text-xl sm:text-2xl font-display hover:text-brand-orange transition-colors break-all">926 04 072</a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-dark text-brand-light flex items-center justify-center rounded-full shrink-0 min-w-[44px] min-h-[44px]">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">E-post</div>
                  <a href="mailto:fro-fre@outlook.com" className="text-xl sm:text-2xl font-display hover:text-brand-orange transition-colors break-all">fro-fre@outlook.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-brand-dark text-brand-light flex items-center justify-center rounded-full shrink-0 min-w-[44px] min-h-[44px]">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">Adresse</div>
                  <div className="text-xl sm:text-2xl font-display">6260 Skodje, Norge</div>
                </div>
              </div>

              <div className="pt-8 border-t border-black/5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">Organisasjonsnummer</div>
                <div className="text-lg font-display">912 166 805</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-black/5 grayscale hover:grayscale-0 transition-all duration-700 h-56 sm:h-64 shadow-lg relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.755447783344!2d6.6854125!3d62.5024479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461699988888888b%3A0x888888888888888b!2s6260%20Skodje!5e0!3m2!1sno!2sno!4v1710320000000!5m2!1sno!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-5 sm:p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl border border-black/5 h-full">
              <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">Navn</label>
                    <input
                      type="text"
                      className="w-full bg-brand-light border-b border-black/10 py-3 min-h-[44px] sm:py-4 px-0 focus:border-brand-orange outline-none transition-colors font-display"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">E-post</label>
                    <input
                      type="email"
                      className="w-full bg-brand-light border-b border-black/10 py-3 min-h-[44px] sm:py-4 px-0 focus:border-brand-orange outline-none transition-colors font-display"
                      placeholder="din@epost.no"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">Tjeneste</label>
                  <select className="w-full bg-brand-light border-b border-black/10 py-3 min-h-[44px] sm:py-4 px-0 focus:border-brand-orange outline-none transition-colors font-display appearance-none">
                    <option>Velg tjeneste</option>
                    <option>Graving</option>
                    <option>Drenering</option>
                    <option>Tomteutgraving</option>
                    <option>Massetransport</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-brand-dark/60">Melding</label>
                  <textarea
                    rows={4}
                    className="w-full bg-brand-light border-b border-black/10 py-3 min-h-[88px] sm:py-4 px-0 focus:border-brand-orange outline-none transition-colors font-display resize-none"
                    placeholder="Fortell oss om ditt prosjekt"
                  />
                </div>
                <button type="button" className="w-full bg-brand-dark text-brand-light py-4 min-h-[48px] sm:py-6 rounded-full font-display font-bold uppercase tracking-tighter hover:bg-brand-orange transition-all flex items-center justify-center gap-3 group touch-manipulation">
                  Send Forespørsel
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
