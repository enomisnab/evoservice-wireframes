import './globals.css';

export const metadata = {
  title: "EvoService — Wireframes",
  description: "Wireframes low‑fi per la webapp EvoService",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
