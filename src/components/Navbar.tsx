/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Forside', href: '#home' },
  { name: 'Tjenester', href: '#services' },
  { name: 'Om oss', href: '#about' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-light/90 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-dark flex items-center justify-center rounded-sm group-hover:bg-brand-orange transition-colors duration-300">
            <span className="text-brand-light font-display font-bold text-lg md:text-xl">F</span>
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase">Fremi</span>
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-brand-dark/60 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-dark text-brand-light px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-brand-orange transition-colors"
          >
            Kontakt oss
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center bg-brand-dark text-brand-light rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 w-full h-screen bg-brand-dark z-[60] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
                  <span className="text-brand-dark font-display font-bold text-lg">F</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tighter uppercase text-brand-light">Fremi</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-brand-light w-10 h-10 flex items-center justify-center border border-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tighter text-brand-light hover:text-brand-orange transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-orange mb-4">Kontakt Oss</div>
              <a href="tel:92604072" className="text-brand-light text-2xl font-display block mb-2">926 04 072</a>
              <a href="mailto:fro-fre@outlook.com" className="text-brand-light/40 text-sm font-mono">fro-fre@outlook.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
