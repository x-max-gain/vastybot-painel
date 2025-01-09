import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasty Boy",
  description: "Crie seu robô financeiro de forma totalmente customizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon2.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#08DD7E"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        />

        <main className="flex min-h-screen flex-grow">
          <Sidebar />

          <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
            <Navbar />

            <div className="flex flex-grow flex-col px-4 pb-6 @container md:px-5 lg:px-4 lg:pb-8 3xl:px-8 4xl:px-10 4xl:pb-9">
              {children}
            </div>
          </div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}
