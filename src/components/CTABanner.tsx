"use client";

import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-dtd-red py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8 hidden md:block animate-pulse" />

          <div className="text-center md:text-left">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
              Demander votre devis
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-dtd-navy text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full text-sm hover:bg-white hover:text-dtd-navy transition-all duration-300 hover:shadow-2xl"
          >
            <span>Contactez-nous</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8 hidden md:block animate-pulse" />
        </div>
      </div>
    </section>
  );
}
