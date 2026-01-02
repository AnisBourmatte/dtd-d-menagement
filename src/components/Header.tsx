"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If we are on the homepage, we want smooth scroll
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If we are NOT on homepage, let the Link behavior happen (navigate to /#targetId)

    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar - Colored */}
      <div className="bg-dtd-navy">
        <div className="container mx-auto px-4 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white group cursor-pointer">
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-dtd-red transition-all duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <a href="tel:0143394667" className="text-sm font-bold tracking-wide hover:text-dtd-red transition-colors">
              01 43 39 46 67
            </a>
          </div>
          <Link
            href="/#contact"
            onClick={(e) => handleNavigation(e, 'contact')}
            className="group relative inline-flex items-center gap-2 text-sm font-bold px-5 py-2 bg-dtd-red text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-dtd-red hover:shadow-lg hover:shadow-dtd-red/30"
          >
            <span className="relative z-10">Demandez votre devis</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <span className="text-3xl font-black transition-transform duration-300 group-hover:scale-105" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
                <span className="text-dtd-red">D</span>
                <span className="text-dtd-navy">T</span>
                <span className="text-dtd-red">D</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/#accueil"
                onClick={(e) => handleNavigation(e, 'accueil')}
                className="font-bold text-sm uppercase tracking-wider cursor-pointer text-dtd-navy hover:text-dtd-red transition-colors duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/#presentation"
                onClick={(e) => handleNavigation(e, 'presentation')}
                className="font-bold text-sm uppercase tracking-wider cursor-pointer text-dtd-navy hover:text-dtd-red transition-colors duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Présentation
              </Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center gap-1.5 font-bold text-sm uppercase tracking-wider text-dtd-navy hover:text-dtd-red transition-colors duration-300 group-hover:text-dtd-red"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => {
                  if (pathname === "/") {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#services';
                  }
                }}
              >
                Nos Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <ul className="bg-white shadow-xl rounded-xl py-3 min-w-[250px] border border-gray-100">
                  <li>
                    <Link
                      href="/services/location-monte-meuble"
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-dtd-red hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      Location de monte-meuble
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/demenagement-particulier"
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-dtd-red hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      Déménagement pour particuliers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/demenagement-professionnel"
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-dtd-red hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      Déménagement pour professionnels
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/debarras"
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-dtd-red hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      Débarras de grenier
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/#galerie"
                onClick={(e) => handleNavigation(e, 'galerie')}
                className="font-bold text-sm uppercase tracking-wider cursor-pointer text-dtd-navy hover:text-dtd-red transition-colors duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Galerie Photo
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={(e) => handleNavigation(e, 'contact')}
                className="font-bold text-sm uppercase tracking-wider cursor-pointer text-dtd-navy hover:text-dtd-red transition-colors duration-300"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dtd-navy hover:text-dtd-red transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <ul className="container mx-auto px-4 space-y-3">
              <li>
                <Link
                  href="/#accueil"
                  onClick={(e) => handleNavigation(e, 'accueil')}
                  className="block text-dtd-navy font-bold text-sm uppercase cursor-pointer py-2 hover:text-dtd-red transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/#presentation"
                  onClick={(e) => handleNavigation(e, 'presentation')}
                  className="block text-dtd-navy font-bold text-sm uppercase cursor-pointer py-2 hover:text-dtd-red transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Présentation
                </Link>
              </li>
              <li>
                <button
                  className="flex items-center gap-1 text-dtd-navy font-bold text-sm uppercase w-full py-2 hover:text-dtd-red transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Nos Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-dtd-red pl-4">
                    <li>
                      <Link
                        href="/services/location-monte-meuble"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-600 py-1 cursor-pointer hover:text-dtd-red transition-colors"
                      >
                        Location de monte-meuble
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/demenagement-particulier"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-600 py-1 cursor-pointer hover:text-dtd-red transition-colors"
                      >
                        Déménagement pour particuliers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/demenagement-professionnel"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-600 py-1 cursor-pointer hover:text-dtd-red transition-colors"
                      >
                        Déménagement pour professionnels
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/debarras"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-600 py-1 cursor-pointer hover:text-dtd-red transition-colors"
                      >
                        Débarras de grenier
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/#galerie"
                  onClick={(e) => handleNavigation(e, 'galerie')}
                  className="block text-dtd-navy font-bold text-sm uppercase cursor-pointer py-2 hover:text-dtd-red transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Galerie Photo
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavigation(e, 'contact')}
                  className="block text-dtd-navy font-bold text-sm uppercase cursor-pointer py-2 hover:text-dtd-red transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
