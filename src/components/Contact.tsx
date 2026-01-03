"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact">
      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Info */}
            <AnimatedSection direction="left">
              <div>
                <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-sm">
                  Contact
                </p>
                <h2 className="text-dtd-navy text-3xl md:text-4xl font-bold mb-6 uppercase">
                  Contactez-nous
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Besoin d'un devis pour votre déménagement ? Remplissez le formulaire ci-contre et notre équipe vous répondra dans les plus brefs délais. Notre devis est gratuit et sans engagement.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-x-1">
                    <div className="bg-dtd-red/10 p-3 rounded-full group-hover:bg-dtd-red group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-dtd-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dtd-navy mb-1 group-hover:text-dtd-red transition-colors duration-300">Adresse</h4>
                      <p className="text-gray-600 text-sm">
                        30, rue de la Varenne<br />
                        94100 Saint-Maur-des-Fossés
                      </p>
                    </div>
                  </div>

                  <a href="tel:0143394667" className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-x-1">
                    <div className="bg-dtd-red/10 p-3 rounded-full group-hover:bg-dtd-red group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-6 h-6 text-dtd-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dtd-navy mb-1 group-hover:text-dtd-red transition-colors duration-300">Téléphone</h4>
                      <span className="text-gray-600 text-sm hover:text-dtd-red transition-colors block">
                        01 43 39 46 67
                      </span>
                      <span className="text-gray-600 text-sm hover:text-dtd-red transition-colors block">
                        06 50 00 35 69
                      </span>
                    </div>
                  </a>

                  <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-x-1">
                    <div className="bg-dtd-red/10 p-3 rounded-full group-hover:bg-dtd-red group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-6 h-6 text-dtd-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dtd-navy mb-1 group-hover:text-dtd-red transition-colors duration-300">Horaires</h4>
                      <p className="text-gray-600 text-sm">
                        Lundi - Vendredi : 9h00 - 20h30<br />
                        Samedi : 9h00 - 19h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right side - Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 w-full bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.356497334759!2d2.505763976867355!3d48.77583397132149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60b106093103d%3A0xc3f6af58e08f5d0!2s30%20Rue%20de%20la%20Varenne%2C%2094100%20Saint-Maur-des-Foss%C3%A9s!5e0!3m2!1sfr!2sfr!4v1709400000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          title="Localisation DTD Déménagement"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-400 text-xs md:text-sm">
            <span>DTD DÉMÉNAGEMENT TOUTE DISTANCE</span>
            <span className="hidden md:inline">|</span>
            <a href="/dtd-d-menagement/mentions-legales.html" className="text-white hover:text-dtd-red transition-colors hover:underline">
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
