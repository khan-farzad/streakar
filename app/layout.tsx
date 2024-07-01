import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Streakar",
  description:
    "Welcome to Streakar, your ultimate companion for building and maintaining habits. Streakar helps you stay consistent and achieve your goals with ease. Track your progress with daily streaks, set and manage to-do lists, and stay motivated by sharing your achievements with friends. Whether you're aiming to read more, exercise regularly, or develop any new habit, Streakar ensures you stay on track. Remember, '21 din m koi bhi aadat pad jaati h'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
