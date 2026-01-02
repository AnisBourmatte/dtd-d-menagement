import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
    title: "Location Monte-Meuble Saint-Maur (94) | DTD Déménagement",
    description: "Louez un monte-charge avec technicien à Saint-Maur-des-Fossés et partout dans le 94. Idéal pour accès difficiles. Devis immédiat.",
};

export default function MonteMeublePage() {
    return (
        <ServicePageLayout
            imagePosition="left"
            kicker="ACCÈS DIFFICILES ?"
            title="Location de Monte-Charge 94"
            image="/images/monte-meuble.png"
            description={
                <>
                    <p>
                        Simplifiez votre déménagement avec notre service de <strong>location de monte-meuble avec technicien</strong>. Idéal pour les appartements sans ascenseur, les cages d'escalier étroites ou les volumes importants.
                    </p>
                    <p>
                        Notre matériel de pointe permet de hisser vos biens jusqu'au <strong>10ème étage</strong> en toute sécurité. Que ce soit pour un canapé volumineux, un piano, ou l'ensemble de votre mobilier, nous avons la solution adaptée.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 font-medium text-dtd-navy">
                        <li>Capacité jusqu'à 400kg</li>
                        <li>Passage fenêtre ou balcon</li>
                        <li>Technicien qualifié inclus</li>
                        <li>Intervention rapide dans tout le 94</li>
                    </ul>
                </>
            }
        />
    );
}
