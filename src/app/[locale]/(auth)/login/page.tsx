import { LoginForm } from "@/components/auth/LoginForm";
import { routing } from "@/i18n/routing";

export default function LoginPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
      <LoginForm />
    </section>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
