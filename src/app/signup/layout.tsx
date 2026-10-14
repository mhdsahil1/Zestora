import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account | Zestora",
  description: "Join Zestora and start exploring pure, certified organic spices sourced directly from generational farms.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
