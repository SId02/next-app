import type { Metadata } from "next";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./globals.css";


export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js application',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
