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
                                Dans une volonté de transparence, nous vous présentons notre politique de confidentialité qui a pour but de vous informer sur les conditions dans lesquelles nous sommes amenés à collecter et traiter vos données à caractère personnel lors de la consultation de notre site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">2. Identité et coordonnées du responsable de traitements</h2>
                            <p>
                                Le responsable de traitement de vos données est DTD DÉMÉNAGEMENT TOUTE DISTANCE
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">3. Finalités et bases légales des traitements mis en œuvre</h2>
                            <p>
                                DTD DÉMÉNAGEMENT TOUTE DISTANCE met en œuvre différents traitements de données à caractère personnel selon les fondements juridiques suivants :
                            </p>
                            <ul className="mt-4 list-disc pl-5 space-y-2">
                                <li>
                                    <strong>1) Sur la base juridique de votre consentement (art. 6.1.a) :</strong><br />
                                    – Gestion des demandes de contact<br />
                                    – La gestion des cookies soumis à votre consentement
                                </li>
                                <li>
                                    <strong>2) Sur la base de notre intérêt légitime (art. 6.1.f) :</strong><br />
                                    – La gestion de l'administration et de la sécurité du site : l'intérêt légitime étant d'assurer la sécurité et la fonctionnalité de notre site internet
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">4. Catégories de données à caractère personnel traitées</h2>
                            <p>
                                Les « données personnelles » s'entendent selon la définition qui est donnée à l'art. 4 du RGPD, elles font référence à toute information concernant une personne physique identifiable ou pouvant être identifiée spécifiquement.
                            </p>
                            <ul className="mt-4 list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Données d'identification :</strong> Nous collectons des données via le formulaire de contact : Nom ; prénom ; adresse électronique ; téléphone, objet de la demande.
                                </li>
                                <li>
                                    <strong>Données techniques :</strong> La connexion à notre site implique automatiquement la collecte des données suivantes : Adresse IP ; horodatages (date et heure de connexion) ; données techniques relatives à l'équipement et au navigateur utilisé ; des données relatives à la navigation sur les sites web sont collectées ; des données nécessaires à la création d'un compte, à l'utilisation de la plateforme.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">5. Les destinataires de données à caractère personnel</h2>
                            <p>
                                Les données à caractère personnel que vous nous fournissez sont transmises aux destinataires suivants :
                            </p>
                            <ul className="mt-4 list-disc pl-5 space-y-2">
                                <li>Le personnel strictement habilité des services internes de DTD DÉMÉNAGEMENT TOUTE DISTANCE</li>
                                <li>
                                    Les sous-traitants et prestataires de DTD DÉMÉNAGEMENT TOUTE DISTANCE qui traitent des données au nom et pour son compte :<br />
                                    – Hébergement : IONOS / GitHub Pages<br />
                                    – Maintenance et administration : DTD DÉMÉNAGEMENT TOUTE DISTANCE
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">6. La durée de conservation des données</h2>
                            <p>
                                DTD DÉMÉNAGEMENT TOUTE DISTANCE s'engage à ne conserver vos données à caractère personnel pour une durée qui n'excède pas la durée nécessaire à la poursuite et à la réalisation des finalités pour lesquelles ces données ont été collectées.
                            </p>
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Finalité</th>
                                            <th scope="col" className="px-6 py-3">Durée de conservation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">Gestion des demandes de contact</td>
                                            <td className="px-6 py-4">Jusqu'à traitement de la demande de contact</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">Administration du site</td>
                                            <td className="px-6 py-4">365 jours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">7. Transfert de données</h2>
                            <p className="font-bold mt-4">Transfert de données en Union européenne</p>
                            <p>DTD DÉMÉNAGEMENT TOUTE DISTANCE fait appel à des prestataires se situant sur le territoire français et de l'Union européenne :</p>
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Prestataires</th>
                                            <th scope="col" className="px-6 py-3">Pays d'hébergement des données</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">TYPEFORM – LG CAN RABIA,3 (SARRIA FORUM,EDIFICIO B) (BARCELONA)</td>
                                            <td className="px-6 py-4">ESPAGNE</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="font-bold mt-6">Transfert de données hors Union européenne</p>
                            <p>
                                Néanmoins, lorsque cela est nécessaire, DTD DÉMÉNAGEMENT TOUTE DISTANCE peut être amené à transmettre vos données à des prestataires opérant hors de l'Union Européenne.
                                Dans cette hypothèse, DTD DÉMÉNAGEMENT TOUTE DISTANCE s'assure que ses prestataires disposent d'un niveau de protection jugé adéquat par la Commission européenne.
                                À défaut, si les données à caractère personnel sont traitées dans des pays qui ne sont pas reconnus comme offrant un niveau de protection adéquat, DTD DÉMÉNAGEMENT TOUTE DISTANCE s'attache à ce que ses prestataires soient engagés à respecter les garanties conformes au RGPD pour de tels transferts.
                            </p>
                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Prestataires</th>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Pays d'hébergement des données</th>
                                            <th scope="col" className="px-6 py-3">Garanties</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">Google LLC</td>
                                            <td className="px-6 py-4 border-r border-gray-200">États-Unis</td>
                                            <td className="px-6 py-4">Data Privacy Framework</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">8. Sécurité</h2>
                            <p>
                                En application de la législation et de la réglementation en vigueur DTD DÉMÉNAGEMENT TOUTE DISTANCE et ses éventuels sous-traitants s'engagent à préserver confidentialité, la disponibilité et l'intégrité de vos données à caractère personnel en s'engageant à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">9. L'exercice de vos droits</h2>
                            <p>Conformément à la législation et la réglementation en vigueur, vous disposez des droits suivants :</p>
                            <ul className="mt-4 list-disc pl-5 space-y-2">
                                <li>Le droit d'accéder à tout moment à vos données (article 15 du RGPD)</li>
                                <li>Le droit de rectifier, mettre à jour ou compléter vos données (article 16 du RGPD)</li>
                                <li>Le droit d'exiger l'effacement de vos données (article 17 du RGPD)</li>
                                <li>Le droit de retirer à tout moment votre consentement (article 13-2 c du RGPD)</li>
                                <li>Le droit à la limitation du traitement de vos données (article 18 du RGPD)</li>
                                <li>Le droit de vous opposer au traitement de vos données (article 21 du RGPD)</li>
                                <li>Le droit à la portabilité de vos données, lorsqu'elles font l'objet d'un traitement automatisé (article 20 du RGPD)</li>
                            </ul>
                            <p className="mt-4">
                                En cas de difficultés liées à la gestion de vos données ou de l'exercice de vos droits, vous avez la possibilité d'introduire une réclamation auprès de la CNIL : site internet : (https://www.cnil.fr/fr/plaintes).
                            </p>
                            <p className="mt-4">
                                Conformément aux articles L.223-1 et suivants du Code de la consommation (annexe 4), si vous ne souhaitez plus être démarché par téléphone sur le numéro que vous avez communiqué à l'entreprise, vous pouvez inscrire ce numéro sur la liste d'opposition au démarchage téléphonique via le site www.bloctel.gouv.fr ou par courrier à : Société Opposetel, Service Bloctel, 6 rue Nicolas Siret, 10000 Troyes. Cette inscription est gratuite et valable trois (3) ans, reconductible tacitement.
                            </p>
                            <p className="mt-4 font-bold">L'entreprise pourra néanmoins vous contacter par téléphone dans les cas suivants :</p>
                            <ul className="mt-2 list-decimal pl-5 space-y-2">
                                <li>Si vous en avez expressément fait la demande, pendant une période définie par vous ou, à défaut, dans un délai de trois (3) mois à compter de votre demande.</li>
                                <li>Dans le cadre de l'exécution d'un contrat en cours et ayant un rapport avec l'objet de ce contrat, y compris pour proposer des produits ou services afférents ou complémentaires à l'objet du contrat en cours ou de nature à améliorer ses performances ou sa qualité.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg md:text-xl font-bold text-dtd-red mb-4 uppercase">Mentions relatives aux cookies et autres traceurs</h2>

                            <h3 className="font-bold mt-4 text-base">1) Qu'est-ce qu'un cookie ?</h3>
                            <p>
                                Lors de la consultation du site, des informations relatives à la navigation de votre terminal (ordinateur, tablette, smartphone, etc.) sur le site peuvent être enregistrées dans des fichiers texte appelés « cookies », installés sur votre navigateur.
                                Le cookie ne vous identifie pas personnellement, mais uniquement le navigateur de votre terminal.
                            </p>

                            <h3 className="font-bold mt-4 text-base">2) À quoi servent les cookies ?</h3>
                            <p>
                                Ces cookies et autres traceurs sont déposés et utilisés via notre site internet par DTD DÉMÉNAGEMENT TOUTE DISTANCE et par des entreprises tierces. Certains sont indispensables au fonctionnement du site internet et d'autres permettent de vous fournir certaines fonctionnalités et rendre optimale l'utilisation de notre site.
                            </p>

                            <h3 className="font-bold mt-4 text-base">3) Comment paramétrer ces cookies ?</h3>
                            <p>
                                Lors de votre connexion sur notre site, un bandeau s'affiche. Sous réserve de votre choix, des cookies seront stockés dans la mémoire de votre terminal (ordinateur, smartphone, tablette, mobile, etc.).
                                Vous pouvez vous opposer à l'enregistrement de cookies, à tout moment, de deux façons :<br />
                                – En vous rendant sur notre module de gestion des cookies accessible en pied de page ou à l'aide du bouton « Gestion des cookies » situé en bas de chaque page du site.<br />
                                – ou en modifiant les paramètres de votre navigateur.
                            </p>

                            <h3 className="font-bold mt-4 text-base">4) Quels sont les types de cookies déposés sur notre site :</h3>
                            <p>– Cookies internes nécessaires au bon fonctionnement du site : Ces cookies sont indispensables pour naviguer et profiter des fonctionnalités du site.</p>

                            <div className="mt-4 overflow-x-auto">
                                <table className="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
                                    <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Nom du cookie</th>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Émetteur</th>
                                            <th scope="col" className="px-6 py-3 border-r border-gray-200">Finalité du cookie</th>
                                            <th scope="col" className="px-6 py-3">Durée</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">Uetsid, uetvid</td>
                                            <td className="px-6 py-4 border-r border-gray-200">DTD</td>
                                            <td className="px-6 py-4 border-r border-gray-200">Gestion de session</td>
                                            <td className="px-6 py-4">365 jours</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 border-r border-gray-200">_pk_id.</td>
                                            <td className="px-6 py-4 border-r border-gray-200">Matomo</td>
                                            <td className="px-6 py-4 border-r border-gray-200">Gestion statistique</td>
                                            <td className="px-6 py-4">13 mois</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="font-bold mt-4 text-base">5) Quelle est la durée de conservation des cookies ?</h3>
                            <p>Les cookies y compris les cookies exemptés de consentement, ont une durée de vie de 13 mois à compter du premier dépôt dans l'équipement de votre terminal.</p>

                            <h3 className="font-bold mt-4 text-base">6) Liste des traceurs tiers</h3>
                            <p>
                                Google Font & Google Maps sont utilisés sur ce site. Ils peuvent entraîner un transfert de données vers les États-Unis. Consultez leur politique de confidentialité : <a href="https://policies.google.com/privacy" className="text-dtd-red hover:underline">https://policies.google.com/privacy</a>.
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
