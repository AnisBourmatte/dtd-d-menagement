"use client";

import { Truck, Home, Building2, Package } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Truck,
    title: "Location de monte-meuble",
    description: "Chargez et déchargez vos meubles en toute facilité.",
    color: "text-dtd-red",
  },
  {
    icon: Home,
    title: "Déménagement pour particuliers",
    description: "Déménagement d'appartement ou maison.",
    color: "text-dtd-red",
  },
  {
    icon: Building2,
    title: "Déménagement pour professionnels",
    description: "Transfert de bureaux et de mobilier d'entreprise.",
    color: "text-dtd-red",
  },
  {
    icon: Package,
    title: "Débarras de grenier",
    description: "Comptez sur nos déménageurs pour un débarras efficace.",
    color: "text-dtd-red",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-cover bg-center opacity-10 hidden lg:block" style={{backgroundImage: "url('https://ext.same-assets.com/3342823941/3080392397.webp')"}} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} direction="up">
              <div className="group bg-white rounded-xl p-5 md:p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full hover:-translate-y-2 cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-dtd-red/5 rounded-full group-hover:bg-dtd-red/10 group-hover:scale-110 transition-all duration-300">
                    <service.icon className={`w-10 h-10 md:w-12 md:h-12 ${service.color} stroke-[1.5] group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-dtd-navy text-base md:text-lg font-bold mb-2 md:mb-3 uppercase tracking-wide group-hover:text-dtd-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
