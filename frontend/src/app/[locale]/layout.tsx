'use client';
import Navigation from '@/shared/Navigation/Navigation';
import { I18nProviderClient } from 'locales/client';
import SiteHeader from '../(client-components)/(Header)/SiteHeader';
import Footer from '@/components/Footer';
import FooterNav from '@/components/FooterNav';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <I18nProviderClient locale={locale}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <FooterNav />
        <Footer />
      </I18nProviderClient>
    </>
  );
}