import type { Metadata } from "next";
import { Poppins, Rye } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: ["400"],
});

const SITE_URL = "https://downtown-calgary-office-cleaning.vercel.app";
const TITLE = "Office Cleaning Services in Downtown Calgary | Free Quotes";
const DESCRIPTION =
  "Nightly janitorial, sanitizing & specialty office cleaning in Downtown Calgary. Insured & bonded, flexible after-hours scheduling. Get a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Downtown Calgary Office Cleaning",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/logo.webp" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Downtown Calgary Office Cleaning",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rye.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-charcoal">
        {children}
      </body>
    </html>
  );
}
