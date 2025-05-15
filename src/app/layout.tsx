import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Oxygen } from 'next/font/google';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxygen = Oxygen({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Firnaz Luztian Adiansyah | Software Engineer Portfolio",
  description: "Software Engineer with five years of experience in building high-performance, scalable web applications. Expertise in React, Next.js, TypeScript, and Tailwind CSS. View my projects, experience and skills.",
  keywords: [
    "Firnaz Luztian Adiansyah", 
    "Firnaz Luztian", 
    "Software Engineer", 
    "React Developer", 
    "Next.js", 
    "TypeScript", 
    "Frontend Developer", 
    "Fullstack Developer",
    "Web Developer",
    "Telkom Indonesia",
    "Oromico Singapore"
  ],
  authors: [{ name: "Firnaz Luztian Adiansyah" }],
  creator: "Firnaz Luztian Adiansyah",
  publisher: "Firnaz Luztian Adiansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firnazluztian.github.io/",
    siteName: "Firnaz Luztian Adiansyah Portfolio",
    title: "Firnaz Luztian Adiansyah | Software Engineer Portfolio",
    description: "Professional portfolio of Firnaz Luztian Adiansyah, a Software Engineer experienced in React, Next.js, TypeScript, and more.",
    images: [
      {
        url: "/img/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Firnaz Luztian Adiansyah - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Firnaz Luztian Adiansyah | Software Engineer Portfolio",
    description: "Professional portfolio of Firnaz Luztian Adiansyah, a Software Engineer experienced in React, Next.js, TypeScript, and more.",
    images: ["/img/bg.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
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
  alternates: {
    canonical: "https://firnazluztian.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${oxygen.className} antialiased`}>
      <head>
        <link rel="canonical" href="https://firnazluztian.github.io/" />
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Firnaz Luztian Adiansyah",
              "url": "https://firnazluztian.github.io/",
              "sameAs": [
                "https://www.linkedin.com/in/firnaz-luztian-adiansyah-6526b8194/",
                "https://github.com/firnazluztian",
                "https://gitlab.playcourt.id/telkomdev-firnazluztian"
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Telkom Indonesia"
              },
              "description": "Software Engineer with five years of experience in building high-performance, scalable web applications across both enterprise environments and agile startups. Expertise in React, Next.js, TypeScript, and Tailwind CSS.",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Master of Information Technology",
                  "description": "Concentration in Computing and Networking"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Bachelor of Science",
                  "description": "Concentration in Software Engineering"
                }
              ],
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Frontend Development",
                "Web Development",
                "Software Engineering"
              ]
            }
          `}
        </Script>
        <Script id="schema-webpage" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Firnaz Luztian Adiansyah Portfolio",
              "url": "https://firnazluztian.github.io/",
              "description": "Professional portfolio of Firnaz Luztian Adiansyah, a Software Engineer with expertise in React, Next.js, TypeScript, and more.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://firnazluztian.github.io/#search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
