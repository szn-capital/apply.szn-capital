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

const WHOP_PIXEL = `!function(w,d,s,u,n,a,b){if(w[n])return;a=w[n]={q:[],t:+new Date,s:[],o:u,track:function(){a.q.push([+new Date].concat([].slice.call(arguments)))},setScope:function(){a.s=[].slice.call(arguments).filter(function(x){return typeof x==="string"});a.q.push([+new Date,"setScope"].concat(a.s))},scope:function(){var c=[].slice.call(arguments);return{track:function(){a.q.push([+new Date].concat([].slice.call(arguments)).concat([{__scope:c}]))}}}};b=d.createElement(s);b.async=1;b.src=u+"/s.js";d.getElementsByTagName(s)[0].parentNode.insertBefore(b,d.getElementsByTagName(s)[0])}(window,document,"script","https://t.whop.tw","whop");whop.setScope("biz_9SNXSNSCfzQBb5");whop.track("page");`;

const TITLE ="Get mentored by me directly | SZN Capital";
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
        {/* Whop Pixel — snippet is verbatim from Whop, do not edit */}
        <script dangerouslySetInnerHTML={{ __html: WHOP_PIXEL }} />
      </head>
      <body className="bg-gradient-to-b from-[#151618] to-[#01040B] min-h-screen text-white antialiased selection:bg-white selection:text-black" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}