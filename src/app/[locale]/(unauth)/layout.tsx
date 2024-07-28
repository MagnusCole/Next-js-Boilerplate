import { unstable_setRequestLocale } from 'next-intl/server';
import BaseTemplate from '@/templates/BaseTemplate';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <BaseTemplate>
      <div className="">{props.children}</div>
    </BaseTemplate>
  );
}
