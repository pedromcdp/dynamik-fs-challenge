import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { AppConfig } from "@/utils/appConfig";
import { Providers } from "@/providers";
import { cn } from "@/utils/cn";
import { NavBar } from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const font = Montserrat({
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={cn("relative antialised", font.className)}>
        <Providers>
          <div className="relative flex min-h-[100dvh] flex-col bg-background text-foreground scroll-smooth">
            <NavBar />
            <main className="mx-auto max-w-screen-xl p-6 flex flex-grow w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
