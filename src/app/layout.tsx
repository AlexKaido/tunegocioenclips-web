import type { Metadata } from "next";
import { Inter, Space_Grotesk, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { SiteNav, SiteFooter, WhatsAppButton } from "@/components/site-chrome";
import { ContactForm } from "@/components/contact-form";
import { ScrollProgress } from "@/components/interactions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

export const metadata: Metadata = {
  title: "Tu negocio en Clips — Presencia digital + contenido que vende",
  description:
    "Primero construimos dónde te encuentran — tu catálogo o tu sitio — y después el contenido que hace que no dejen de llegar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ScrollProgress />
        <SiteNav />
        <main className="flex flex-1 flex-col">{children}</main>
        <ContactForm />
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
