"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Contact",
    description: "Nous répondons à votre demande avec un devis gratuit prenant en compte les éventuelles spécificités de votre déménagement.",
  },
  {
    number: 2,
    title: "Intervention",
    description: "Nous déménageons votre maison, appartement, entreprise ou magasin avec la possibilité d'utiliser un monte-charge pour les meubles encombrants.",
  },
  {
    number: 3,
    title: "Satisfaction",
    description: "Parce que vous satisfaire est notre priorité, nous mènerons une enquête de satisfaction suite à la prestation pour recueillir votre avis.",
  },
];

export default function Steps() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Steps */}
          <AnimatedSection direction="left">
            <div>
              <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-xs md:text-sm">
                Notre Méthode
              </p>
              <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 uppercase">
                Les Étapes de Votre<br />Déménagement
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-dtd-red via-dtd-red/50 to-transparent rounded-full" />

                <div className="space-y-8 md:space-y-10">
                  {steps.map((step, index) => (
                    <AnimatedSection key={index} delay={index * 0.15} direction="up">
                      <div className="flex gap-5 md:gap-6 relative group">
                        {/* Step number - Enhanced */}
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className="w-14 h-14 md:w-16 md:h-16 text-white rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                            style={{
                              fontFamily: "'Fjalla One', sans-serif",
                              background: 'linear-gradient(135deg, #c92b30 0%, #991b1f 100%)',
                              boxShadow: '0 10px 25px -5px rgba(201, 43, 48, 0.4)'
                            }}
                          >
                            {step.number}
                          </div>
                          {/* Decorative ring */}
                          <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 border-2 border-dtd-red/20 rounded-xl -rotate-6 group-hover:rotate-6 transition-transform duration-300" />
                        </div>

                        {/* Step content */}
                        <div className="pt-2">
                          <h3 className="text-dtd-navy text-lg md:text-xl font-bold mb-2 uppercase group-hover:text-dtd-red transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=500&fit=crop"
                alt="Appartement aménagé"
                className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
