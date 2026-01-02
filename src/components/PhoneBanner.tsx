"use client";

import { Phone } from "lucide-react";

export default function PhoneBanner() {
  return (
    <section className="bg-dtd-navy py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
          <div>
            <p className="text-white/80 text-base md:text-lg mb-1">
              Besoin d'organiser votre déménagement ?
            </p>
            <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide">
              Appelez-nous au{" "}
              <a href="tel:0650003569" className="hover:text-dtd-red transition-colors underline-offset-4 hover:underline">
                06 50 00 35 69
              </a>
            </p>
          </div>
          <a href="tel:0650003569" className="group bg-white rounded-full p-3 md:p-4 hover:bg-dtd-red hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Phone className="w-6 h-6 md:w-8 md:h-8 text-dtd-red group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
