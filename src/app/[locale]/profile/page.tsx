import { ProfileContent } from "@/components/auth/ProfileContent";
import { routing } from "@/i18n/routing";

export default function ProfilePage() {
  return <ProfileContent />;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
