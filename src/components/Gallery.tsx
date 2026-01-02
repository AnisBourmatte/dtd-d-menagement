"use client";

import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=350&fit=crop",
    alt: "Déménagement salon",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=350&fit=crop",
    alt: "Transport meubles",
  },
  {
    src: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=500&h=350&fit=crop",
    alt: "Camion déménagement",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-xs md:text-sm">
              Photos
            </p>
            <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              Galerie
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#galerie"
              className="group inline-flex items-center gap-3 bg-dtd-red text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full text-sm hover:bg-dtd-navy hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-dtd-navy/30"
            >
              <span>En savoir plus</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
