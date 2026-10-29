import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantômes : débusque les abonnements que tu paies sans t'en servir",
  description:
    "Dépose ton relevé bancaire : on repère les prélèvements oubliés et on écrit les lettres de résiliation pour toi.",
  openGraph: {
    title: "Fantômes : débusque les abonnements que tu paies sans t'en servir",
    description:
      "Dépose ton relevé bancaire : on repère les prélèvements oubliés et on écrit les lettres de résiliation pour toi.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
