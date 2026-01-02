"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Stéphanie M.",
    text: "C'est notre troisième déménagement avec DTD et comme les deux autres, tout s'est très bien passé. M. Bouzid est très professionnel, réactif, à l'écoute et toujours aussi sympathique. Son équipe est très efficace. Je recommande sans hésiter.",
    rating: 5,
    color: "bg-dtd-red",
  },
  {
    name: "Fanny M.",
    text: "Un déménagement de canapé au top par la fenêtre. C'était rapide et efficace malgré la difficulté des manœuvres dans ma rue étroite. Merci à eux !",
    rating: 4,
    color: "bg-white",
  },
  {
    name: "Charlie B.",
    text: "Entreprise à recommander les yeux fermés !! Chose rare et à souligner dans le métier ! Équipe extra, des gens de confiance, très professionnels, compétents, réactifs, compréhensifs, humains, bref... AU TOP ! Si vous voulez un déménagement géré de A à Z sans faille, faites appel à DTD ! Un grand merci à toute l'équipe !",
    rating: 5,
    color: "bg-dtd-red",
  },
  {
    name: "Valérie D.",
    text: "Équipe rapide, efficace et sympathique. Déménagement longue distance réalisé dans la bonne humeur malgré le côté stressant de l'opération. Très bon service pour un tarif très raisonnable.",
    rating: 5,
    color: "bg-white",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-xs md:text-sm">
              Avis Clients
            </p>
            <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold" style={{fontFamily: "'Poppins', sans-serif", textTransform: 'none'}}>
              Nous les avons aidés à déménager
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-dtd-red hover:text-dtd-red transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 max-w-5xl">
              {visibleTestimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.1} direction="up">
                  <div
                    className={`rounded-lg p-4 md:p-6 h-full ${testimonial.color} ${testimonial.color === 'bg-dtd-red' ? 'text-white' : 'text-gray-700 border border-gray-200'}`}
                  >
                    {/* Google Icon */}
                    <div className="mb-3 md:mb-4">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill={testimonial.color === 'bg-dtd-red' ? '#4ade80' : '#22c55e'}>
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>

                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3">{testimonial.name}</h4>
                    <p className={`text-xs md:text-sm leading-relaxed mb-3 md:mb-4 ${testimonial.color === 'bg-dtd-red' ? 'text-white/90' : 'text-gray-600'}`}>
                      {testimonial.text}
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:border-dtd-red hover:text-dtd-red transition-colors flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.slice(0, -2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-dtd-red' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
