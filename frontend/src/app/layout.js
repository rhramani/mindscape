import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata = {
  title: "MindScape Design | Architecture • Interior • Landscape",
  description: "Redefining spaces with modern architectural excellence and innovative interior designs. MindScape Design offers premium services in Architecture, Interior, and Landscape design.",
  keywords: ["Architecture", "Interior Design", "Landscape", "MindScape Design", "Premium Design", "Home Decor"],
  metadataBase: new URL('https://mindscapedesign.co.in'),
  openGraph: {
    title: "MindScape Design | Architecture • Interior • Landscape",
    description: "Redefining spaces with modern architectural excellence.",
    url: 'https://mindscapedesign.co.in',
    siteName: 'MindScape Design',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
