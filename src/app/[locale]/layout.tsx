import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/layout/Footer";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { Navbar } from "@/components/layout/Navbar";
import { AuthProvider } from "@/hooks/useAuth";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AuthProvider>
        <HtmlLang />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
