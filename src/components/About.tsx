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
                Entreprise locale (94)
              </p>
              <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 uppercase">
                Expert Déménagement<br />& Monte-Meuble 94
              </h2>

              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Basée à <strong className="text-dtd-navy">Saint-Maur-des-Fossés</strong>, DTD est votre partenaire de confiance pour tout projet de <strong className="text-dtd-navy">déménagement dans le Val-de-Marne (94)</strong> et en Île-de-France.
                </p>
                <p>
                  Spécialistes du <strong className="text-dtd-navy">monte-meuble</strong>, nous facilitons vos accès difficiles. Que vous soyez à Créteil, Champigny-sur-Marne ou Maisons-Alfort, nous intervenons rapidement pour la <strong className="text-dtd-navy">location de monte-charge</strong> et le transport de vos biens.
                </p>
                <p>
                  Particuliers ou professionnels, demandez votre devis pour un déménagement sans stress dans le 94.
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
