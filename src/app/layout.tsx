import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { AppConfig } from "@/utils/appConfig";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="relative font-sans antialised">
        <Providers>
          <div className="relative flex min-h-[100dvh] flex-col bg-background text-foreground scroll-smooth">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
