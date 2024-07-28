import '@/styles/global.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AppConfig } from '@/utils/AppConfig';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  title: 'Agencia Adquisición',
  description: 'Transforma tu negocio con estrategias de crecimiento efectivas.',
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body className="flex flex-col min-h-screen bg-white text-gray-800">
        <NextIntlClientProvider locale={props.params.locale} messages={messages}>
          <main className="flex-grow">{props.children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
