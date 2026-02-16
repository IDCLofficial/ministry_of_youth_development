export const dynamic = "force-dynamic"

import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import PageTransitionWrapper from "@/app/components/PageTransitionWrapper";
import type { Metadata } from "next";

const satoshiFont = localFont({
  src: [
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Italic.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/satoshi-cdnfonts/Satoshi-Bold.otf",
      weight: "500",
      style: "medium",
    },
  ],
});


// optimized metadata for seo
export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of youth dvelopment and empowerment',
    template: '%s | Imo State Ministry of Youth Development and Empowerment'
  },
  description: 'Official website of the Imo State Ministry of Youth Development and Empowerment - providing youth development services, youth empowerment programs, and youth engagement initiatives across Imo State, Nigeria.',
  keywords: ['Imo State Youth', 'Ministry of Youth', 'Youth Development Nigeria', 'Youth Empowerment Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://youth.im.gov.ng',
    siteName: 'Imo State Ministry of Youth Development and Empowerment',
    title: 'Imo State Ministry of Youth Development and Empowerment',
    description: 'Official website of the Imo State Ministry of Youth Development and Empowerment',
    images: [
      {
        url: 'https://youth.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of Youth Development and Empowerment',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${satoshiFont.className}`}
      >
        <Navbar />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
