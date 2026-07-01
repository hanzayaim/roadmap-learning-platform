import { RegisterForm } from "@/components/auth/RegisterForm";
import { routing } from "@/i18n/routing";

export default function RegisterPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">
      <RegisterForm />
    </section>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
