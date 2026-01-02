"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you would send this to an API
    console.log("Form submitted:", formData);

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset status after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-dtd-navy mb-2">Message envoyé !</h3>
        <p className="text-gray-600">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-dtd-navy mb-6 uppercase" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
        Demandez votre devis gratuit
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dtd-red focus:border-transparent outline-none transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dtd-red focus:border-transparent outline-none transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dtd-red focus:border-transparent outline-none transition-all"
            placeholder="06 00 00 00 00"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Type de service *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dtd-red focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Sélectionnez un service</option>
            <option value="demenagement-particulier">Déménagement particulier</option>
            <option value="demenagement-professionnel">Déménagement professionnel</option>
            <option value="monte-meuble">Location monte-meuble</option>
            <option value="debarras">Débarras de grenier</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dtd-red focus:border-transparent outline-none transition-all resize-none"
          placeholder="Décrivez votre projet de déménagement..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-dtd-red hover:bg-red-700 text-white font-semibold uppercase tracking-wider py-6 text-sm"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Envoyer ma demande
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  );
}
