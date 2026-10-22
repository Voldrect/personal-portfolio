import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-portfolio-2yq.pages.dev"),
  title: "Andhika Narada Putra — Full-Stack Developer",
  description:
    "Portfolio of Andhika Narada Putra, a full-stack developer focused on useful digital products, thoughtful interfaces, and selected projects including OTOSURYA and CBS Guard.",
  alternates: {
    canonical: "https://personal-portfolio-2yq.pages.dev/",
  },
  openGraph: {
    type: "website",
    url: "https://personal-portfolio-2yq.pages.dev/",
    siteName: "Andhika Narada Putra — Portfolio",
    title: "Andhika Narada Putra — Full-Stack Developer",
    description:
      "Portfolio of Andhika Narada Putra, a full-stack developer focused on useful digital products, thoughtful interfaces, and selected projects including OTOSURYA and CBS Guard.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Andhika Narada Putra — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andhika Narada Putra — Full-Stack Developer",
    description:
      "Portfolio of Andhika Narada Putra, a full-stack developer focused on useful digital products, thoughtful interfaces, and selected projects including OTOSURYA and CBS Guard.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
