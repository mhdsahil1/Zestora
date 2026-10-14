import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Zestora",
  description: "Reset your Zestora account password securely via your registered email address.",
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
