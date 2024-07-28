import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Resources />
      <Contact />
    </>
  );
}