/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, image, index }: ServiceCardProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <motion.a
      href="#contact"
      style={{ scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative min-h-[380px] h-[420px] sm:min-h-[460px] sm:h-[500px] bg-brand-dark overflow-hidden flex flex-col justify-end p-6 sm:p-8 md:p-12"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-orange text-brand-dark flex items-center justify-center rounded-2xl mb-6 sm:mb-8 transform group-hover:rotate-12 transition-transform duration-500 shrink-0">
          <Icon size={32} />
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-light mb-4 sm:mb-6 uppercase tracking-tighter">
          {title}
        </h3>
        <p className="text-brand-light/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-orange font-bold">
          Start Forespørsel <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      <div className="absolute inset-0 border-[1px] border-white/5 group-hover:border-brand-orange/30 transition-colors duration-500 m-3 sm:m-4 rounded-xl pointer-events-none" />
    </motion.a>
  );
}
