import type { Metadata } from "next";
import { Tinos, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Times New Roman stand-in for phones that don't have it (Android); same shapes and metrics.
const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  display: "swap",
  weight: ["400"],
  style: ["italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const TITLE = "Get mentored by me directly | SZN Capital";
const DESCRIPTION = "12 months of 1-on-1 coaching with David and a performance coach. Coaching continues until your payouts cover what you paid.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apply.szn-capital.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://apply.szn-capital.com",
    siteName: "SZN Capital",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "SZN Capital" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.jpg"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tinos.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/tt-tsars-a-trial" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-b from-[#151618] to-[#01040B] min-h-screen text-white antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}