import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import "./globals.css";

const config = getSiteConfig();

export const metadata: Metadata = {
  title: `${config.brand.name} - ${config.brand.tagline}`,
  description: config.brand.description,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    title: `${config.brand.name} - ${config.brand.tagline}`,
    description: config.brand.description,
    url: config.siteUrl,
    siteName: config.siteName,
    images: [
      {
        url: config.ogImage,
        width: 1200,
        height: 630,
        alt: config.brand.name,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.brand.name} - ${config.brand.tagline}`,
    description: config.brand.description,
    images: [config.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <MotionProvider>{children}</MotionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
