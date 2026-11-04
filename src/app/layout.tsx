import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orrfuglveien 10 – konseptskisse",
  description: "Uforpliktende konseptskisse for en informasjonsside for Eierseksjonssameiet Orrfuglveien 10.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nb"><body>{children}</body></html>;
}
