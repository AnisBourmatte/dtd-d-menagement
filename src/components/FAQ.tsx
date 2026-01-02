"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Quels sont les documents importants à préparer pour le jour du déménagement ?",
    answer: "Assurez-vous d'avoir une liste d'inventaire, des contrats de location, des documents d'assurance et une pièce d'identité.",
  },
  {
    question: "Puis-je bénéficier d'une assurance pour mes biens pendant le déménagement ?",
    answer: "Oui, notre société de déménagement à Saint-Maur-des-Fossés (94) propose des options d'assurance pour protéger vos biens pendant le processus de déménagement.",
  },
  {
    question: "Proposez-vous des services d'emballage pour les déménagements ?",
    answer: "Oui, nous proposons des services d'emballage professionnel pour assurer la sécurité de vos biens pendant le transport.",
  },
  {
    question: "Puis-je être absent·e lors de mon déménagement ?",
    answer: "Oui, même si nous recommandons fortement que vous soyez présent·e afin de gérer toute déconvenue lors des opérations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-dtd-red font-semibold uppercase tracking-wider mb-2 text-xs md:text-sm">
              Avez-vous des questions ?
            </p>
            <h2 className="text-dtd-navy text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              FAQ
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* FAQ Accordion */}
          <AnimatedSection direction="left">
            <div className="space-y-3">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger
                      className={`px-5 md:px-6 py-4 md:py-5 text-left font-semibold text-sm md:text-base hover:no-underline transition-all duration-300 ${
                        index % 2 === 0
                          ? "bg-gray-100 text-gray-800 hover:bg-gray-200 data-[state=open]:bg-dtd-red data-[state=open]:text-white"
                          : "bg-dtd-red text-white hover:bg-red-600"
                      }`}
                    >
                      <span className="pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 md:px-6 py-4 md:py-5 bg-gray-50 text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="hidden lg:block sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=600&fit=crop"
                alt="Cartons déménagement"
                className="rounded-xl shadow-lg w-full hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
