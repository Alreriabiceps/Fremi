/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Construction, Droplets, HardHat, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import dranageImg from '../public/dranage.png';
import tomteutgravingImg from '../public/Tomteutgraving.png';

const services = [
  {
    icon: Construction,
    title: "Graving",
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&q=80&w=800",
    description: "Vi utfører alt innen grunnarbeid og graving. Trenger du hjelp ved planering for grunnmur er vi de rette til saken. Vi graver også grøfter for legging av vann- og avløpsrør. Velg oss, og du får en solid aktør innen grunn- og betong!"
  },
  {
    icon: Droplets,
    title: "Drenering",
    image: dranageImg,
    description: "God drenering rundt huset hindrer fukt- og kondensskader i grunnmuren. Om du kun isolerer innvendig er faren større for at det oppstår fukt. Vi tar jobben for deg!"
  },
  {
    icon: HardHat,
    title: "Tomteutgraving",
    image: tomteutgravingImg,
    description: "Vi graver tomtene for deg! Et bra resultat krever godt grunnarbeid. Vi utfører alltid grunnarbeid i henhold til Norsk Standard og vi har lang erfaring innen faget!"
  },
  {
    icon: Truck,
    title: "Massetransport",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    description: "Vi sørger for at overskuddsmasse etter graving blir fraktet vekk. Vi skaffer også jord, stein og singel ved behov. Ta kontakt for priser."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-12"
        >
          <div className="max-w-3xl flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-orange mb-4 block">Våre Tjenester</span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">Spesialister på <br /> <span className="text-stroke text-transparent">grunnarbeid</span></h2>
            </div>
          </div>
          <p className="max-w-xs text-brand-dark/50 font-mono text-[10px] uppercase leading-relaxed tracking-widest">
            Graving, drenering og transport av masser i Møre og Romsdal!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              image={service.image}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
