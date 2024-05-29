import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from '@/components/header/Header'; 
import Footer from '@/components/footer/Footer'; 

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haora",
  description: "Pensando em um futuro melhor para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Header /> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
