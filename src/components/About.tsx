"use client";

import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="presentation" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500&h=400&fit=crop"
                alt="Carton déménagement"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-xs md:text-sm">
                Présentation
              </p>
              <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 uppercase">
                DTD Déménagement<br />Toute Distance
              </h2>

              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Déménagez en toute simplicité, grâce à notre <strong className="text-dtd-navy">société de déménagement à Saint-Maur-des-Fossés (94)</strong>. Nous intervenons en Île-de-France et dans le Val-de-Marne.
                </p>
                <p>
                  DTD et son équipe de déménageurs qualifiés vous accompagnent dans votre <strong className="text-dtd-navy">déménagement toute distance</strong>, particuliers comme entreprises. Comptez sur notre expertise pour transporter vos meubles et affaires personnelles, avec la possibilité de louer un <strong className="text-dtd-navy">monte-charge</strong> pour acheminer votre mobilier de façon simple et rapide.
                </p>
                <p>
                  Besoin d'un devis ? Contactez-nous, le nôtre est gratuit !
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 mt-6 md:mt-8 bg-dtd-red text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full text-sm hover:bg-dtd-navy hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-dtd-navy/30"
              >
                <span>En savoir plus</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
