import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyberpunk Button Demo',
  description: 'A glitchy neon cyberpunk button with grain and scanlines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
