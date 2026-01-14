import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGNOS | Creative Web Design Agency",
  description: "Wir gestalten digitale Erlebnisse, die beeindrucken. Webdesign, Branding und digitale Strategien für Unternehmen, die auffallen wollen.",
  keywords: "Webdesign, Web Design, Agentur, Portfolio, Branding, UI/UX, Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
