import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
    title: "Déménagement de Bureaux 94 | DTD Déménagement",
    description: "Transfert d'entreprise et manutention lourde. Déménagement de bureaux efficace pour minimiser votre perte d'activité.",
};

export default function ProfessionnelPage() {
    return (
        <ServicePageLayout
            imagePosition="left"
            kicker="TRANSFERT D'ENTREPRISE"
            title="Déménagement de Bureaux"
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop"
            description={
                <>
                    <p>
                        Le transfert de vos bureaux demande une organisation rigoureuse pour garantir la continuité de votre activité. DTD est l'expert du <strong>déménagement d'entreprise dans le 94</strong>.
                    </p>
                    <p>
                        Nous gérons le transfert de postes informatiques, d'archives, de mobilier de bureau et d'équipements lourds (photocopieurs, traceurs). Nos horaires flexibles (nuits, week-ends) nous permettent d'intervenir sans perturber vos collaborateurs.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 font-medium text-dtd-navy">
                        <li>Planification logistique détaillée</li>
                        <li>Protection informatique renforcée</li>
                        <li>Destruction d'archives sécurisée (si besoin)</li>
                        <li>Mise en place selon vos plans</li>
                    </ul>
                </>
            }
        />
    );
}
