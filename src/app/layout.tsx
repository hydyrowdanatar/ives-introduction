import type { Metadata } from "next";
import { Poppins, Taviraj } from "next/font/google";
import "./globals.css";
import Navbar from "@/widgets/navbar/Navbar";
import Footer from "@/widgets/footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const taviraj = Taviraj({
  variable: "--font-taviraj",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ives Insurance",
  description: "Ives Insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${taviraj.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div
          // className="pt-[70px] xl:pt-[93px] 2xl:pt-[110px]"
          style={{
            paddingTop: "var(--layout-pt)",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
