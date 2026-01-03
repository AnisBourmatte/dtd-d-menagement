"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dtd-navy text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <span className="text-3xl font-black mb-4 block" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
                            <span className="text-dtd-red">D</span>
                            <span className="text-white">T</span>
                            <span className="text-dtd-red">D</span>
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Votre partenaire de confiance pour tous vos déménagements à Saint-Maur-des-Fossés et en Île-de-France.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-dtd-red uppercase">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-dtd-red shrink-0" />
                                <span>30, rue de la Varenne<br />94100 Saint-Maur-des-Fossés</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-dtd-red shrink-0" />
                                <a href="tel:0143394667" className="hover:text-white transition-colors">01 43 39 46 67</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-dtd-red shrink-0" />
                                <a href="mailto:contact@realdtd.com" className="hover:text-white transition-colors">contact@realdtd.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-dtd-red uppercase">Navigation</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/#presentation" className="hover:text-white transition-colors">Présentation</Link></li>
                            <li><Link href="/#galerie" className="hover:text-white transition-colors">Galerie</Link></li>
                            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-dtd-red uppercase">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services/location-monte-meuble" className="hover:text-white transition-colors">Monte-meuble</Link></li>
                            <li><Link href="/services/demenagement-particulier" className="hover:text-white transition-colors">Particuliers</Link></li>
                            <li><Link href="/services/demenagement-professionnel" className="hover:text-white transition-colors">Entreprises</Link></li>
                            <li><Link href="/services/debarras" className="hover:text-white transition-colors">Débarras</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} DTD Déménagement Toute Distance. Tous droits réservés.</p>
                    <div className="mt-2 space-x-4 text-sm">
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</a>
                        <span>-</span>
                        <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
