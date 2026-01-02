"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const cookieConsent = localStorage.getItem("cookie_consent");
        if (!cookieConsent) {
            // Small delay to show banner after initial load
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 transition-transform duration-500 ease-in-out">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 pr-8">
                    <h3 className="text-dtd-navy font-bold text-lg mb-2">Utilisation des cookies</h3>
                    <p className="text-gray-600 text-sm">
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                        En continuant à naviguer, vous acceptez notre utilisation des cookies.
                        Ce site utilise uniquement des cookies essentiels au bon fonctionnement.
                    </p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={handleDecline}
                        className="flex-1 md:flex-none px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-2.5 bg-dtd-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                    >
                        Accepter
                    </button>
                </div>
                <button
                    onClick={handleDecline}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 md:hidden"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
