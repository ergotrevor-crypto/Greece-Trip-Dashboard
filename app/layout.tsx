import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Greece Trip Dashboard",
  description: "Athens and Santorini trip plan"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
