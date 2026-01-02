import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Déménagement à Saint-Maur-des-Fossés - DTD DÉMÉNAGEMENT TOUTE DISTANCE",
  description: "Déménagez en toute simplicité, grâce à notre société de déménagement à Saint-Maur-des-Fossés. Nous intervenons dans le Val-de-Marne.",
  icons: {
    icon: "https://ext.same-assets.com/3342823941/2626511006.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
