import { Poppins } from "next/font/google";
import SiteHeader from "../(client-components)/(Header)/SiteHeader";
import ClientCommons from "../ClientCommons";
import "../globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { Metadata } from "next";
import { I18nProviderClient } from "locales/client";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "B&T - Booking online",
  description: "Booking online",
  keywords: "Booking online",

};

export default function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: React.ReactNode }) {
  return (
    <I18nProviderClient locale="az">
      <html className={poppins.className}>
        <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <ClientCommons />
          <SiteHeader />
          {children}
          <FooterNav />
          <Footer />
        </body>
      </html>
    </I18nProviderClient>
  );
}
