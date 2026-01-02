import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
    title: "Déménagement Particulier Saint-Maur (94) | DTD",
    description: "Votre déménagement résidentiel clé en main. Déménageurs professionnels à Saint-Maur (94) pour appartements et maisons.",
};

export default function ParticulierPage() {
    return (
        <ServicePageLayout
            imagePosition="right"
            kicker="SÉRÉNITÉ GARANTIE"
            title="Déménagement Résidentiel"
            image="https://images.unsplash.com/photo-1603792907191-89e55f2b005f?w=1200&h=1200&fit=crop"
            description={
                <>
                    <p>
                        Changer de domicile est une étape importante. DTD Déménagement vous accompagne avec bienveillance et professionnalisme pour faire de cette transition un moment serein.
                    </p>
                    <p>
                        Nous proposons plusieurs formules adaptées à votre budget et à vos besoins, du simple transport à la prestation clé en main (emballage, démontage, remontage).
                    </p>
                    <p>
                        Nos équipes sont formées pour manipuler vos biens les plus précieux avec le plus grand soin. Nous intervenons sur <strong>Saint-Maur-des-Fossés</strong>, dans tout le Val-de-Marne, et pour vos départs vers la province.
                    </p>
                </>
            }
        />
    );
}
