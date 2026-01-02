import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
    title: "Service de Débarras 94 (Maison, Cave, Grenier) | DTD",
    description: "Débarras complet ou partiel à Saint-Maur et Île-de-France. Vide-maison, enlèvement d'encombrants et nettoyage.",
};

export default function DebarrasPage() {
    return (
        <ServicePageLayout
            imagePosition="right"
            kicker="NETTOYAGE COMPLET"
            title="Service de Débarras"
            image="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=1200&h=1200&fit=crop"
            description={
                <>
                    <p>
                        Besoin de vider une maison avant une vente, une succession ou simplement pour faire de la place ? Notre service de <strong>débarras dans le Val-de-Marne</strong> s'occupe de tout.
                    </p>
                    <p>
                        Nous intervenons pour vider caves, greniers, garages ou logements entiers. Nous assurons le tri sélectif, le recyclage et le don aux associations caritatives des objets réutilisables.
                    </p>
                    <p>
                        Ne vous encombrez plus avec la déchetterie et la manutention lourde. Laissez notre équipe redonner de l'espace à votre intérieur rapidement et efficacement.
                    </p>
                </>
            }
        />
    );
}
