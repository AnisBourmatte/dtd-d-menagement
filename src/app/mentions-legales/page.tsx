import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
    title: "Mentions Légales | DTD Déménagement",
    description: "Mentions légales de la société DTD Déménagement Toute Distance, située à Saint-Maur-des-Fossés (94).",
};

export default function MentionsLegales() {
    return (
        <main className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <div className="flex-1 container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-black text-dtd-navy mb-10 text-center uppercase" style={{ fontFamily: "'Fjalla One', sans-serif" }}>
                        Mentions Légales
                    </h1>

                    <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
                        <section>
                            <p>
                                <strong>https://www.demenagement-dtd.fr</strong> est édité par :<br />
                                <strong>DTD DÉMÉNAGEMENT TOUTE DISTANCE</strong><br />
                                30 Rue De La Varenne 94100 – Saint-Maur-des-Fossés<br />
                                Tel: 01 43 39 46 67
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">1. Préambule</h2>
                            <p>
                                Les données personnelles que vous nous confiez lorsque vous visitez notre site web sont traitées conformément à la loi Informatique et Liberté du 6 janvier 1978 modifiée et au Règlement général sur la Protection des Données du 27 avril 2016, dit « RGPD ».
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">2. Responsable de traitements</h2>
                            <p>Le responsable de traitement de vos données est DTD DÉMÉNAGEMENT TOUTE DISTANCE</p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">3. Données collectées</h2>
                            <p>Nous collectons via le formulaire de contact : Nom, prénom, adresse électronique, téléphone, objet de la demande.</p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">4. Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul className="mt-4 list-disc pl-5 space-y-2">
                                <li>Droit d'accès à vos données (article 15 du RGPD)</li>
                                <li>Droit de rectification (article 16 du RGPD)</li>
                                <li>Droit à l'effacement (article 17 du RGPD)</li>
                                <li>Droit d'opposition (article 21 du RGPD)</li>
                            </ul>
                            <p className="mt-4">
                                Pour exercer vos droits, contactez-nous par téléphone au 01 43 39 46 67.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">5. Cookies</h2>
                            <p>
                                Notre site utilise Google Maps et Google Fonts. Ces services peuvent entraîner un transfert de données vers les États-Unis.
                                Consultez la politique de confidentialité de Google : <a href="https://policies.google.com/privacy" className="text-dtd-red hover:underline">https://policies.google.com/privacy</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </main>
    );
}
