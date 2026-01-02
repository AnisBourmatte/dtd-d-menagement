"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface ServiceSectionProps {
    kicker: string;
    title: string;
    description: React.ReactNode;
    image: string;
    imagePosition: "left" | "right";
}

export default function ServicePageLayout({
    kicker,
    title,
    description,
    image,
    imagePosition,
}: ServiceSectionProps) {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <section className="flex-1">
                <div className="flex flex-col lg:flex-row h-full">
                    {/* Image Block - Order changes based on generic position */}
                    <div
                        className={cn(
                            "w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] lg:min-h-screen relative overflow-hidden",
                            imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                        )}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${process.env.NODE_ENV === 'production' && image.startsWith('/') ? '/dtd-d-menagement' + image : image})` }}
                        />
                        {/* Overlay just in case image is too bright, but keeping it subtle */}
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Content Block */}
                    <div
                        className={cn(
                            "w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white",
                            imagePosition === "right" ? "lg:order-1" : "lg:order-2"
                        )}
                    >
                        <div className="max-w-xl">
                            <span className="inline-block py-1 px-3 mb-6 text-xs font-bold uppercase tracking-widest text-white bg-dtd-red rounded-sm">
                                {kicker}
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dtd-navy mb-8 leading-tight tracking-tight uppercase" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
                                {title}
                            </h1>

                            <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-6">
                                {description}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#contact" className="group inline-flex items-center justify-center gap-3 bg-dtd-navy text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full text-sm hover:bg-dtd-red transition-all duration-300 shadow-lg">
                                    <span>Demander un devis</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <a href="tel:0143394667" className="inline-flex items-center justify-center gap-3 border-2 border-dtd-navy text-dtd-navy font-bold uppercase tracking-wider px-8 py-4 rounded-full text-sm hover:bg-dtd-navy hover:text-white transition-all duration-300">
                                    <span>01 43 39 46 67</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
