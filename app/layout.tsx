import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pawan Kumar Sharma | AI Engineering Elite',
  description: 'Senior AI Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}