import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import NextUiProvider from "@/Context/UiProvider";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const revalidate = 30;
export const metadata: Metadata = {
  metadataBase: new URL(`https://azizimranzade.vercel.app`),
  title: {
    template: "Aziz Imranzade | %s",
    default: "Aziz Imranzade",
  },
  verification: {
    google: "QaFeUPdzocJ9V0DyWHbaA2Uv3RVGoXlPJicoi58xZVE",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_BASE_URL,
  },
  description:
    "Mən Aziz Imranzade. Uşaqlıqdan kod yazmaq macərasına atılmışam və bu mənim üçün bir yaşam tərzinə çevrilib.",
  openGraph: {
    type: "website",
    title: "Aziz Imranzade Ana Səhifə",
    description: "Software Developer",
    url: process.env.NEXT_PUBLIC_SITE_BASE_URL,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${poppins.className} bg-[#111010]  sm:py-8 py-4  overflow-auto h-full min-h-screen dark sm:px-[24rem] px-4`}
      >
        <Analytics />
        <NextUiProvider>
          <Header />
          {children}
          <Footer />
        </NextUiProvider>
      </body>
    </html>
  );
}
