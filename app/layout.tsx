import { GeistSans } from "geist/font/sans";
import NavBar from "@/components/NavBar";
import "./globals.css";
import AuthButton from "@/components/AuthButton";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Onlyfades Barbershop",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <NextUIProvider>
          <main className="flex flex-col items-center min-h-screen">
            <div className="flex items-center justify-between w-full p-3 text-sm">
              {/* <AuthButton /> */}
              <NavBar />
              {/* <SquireWidget /> */}
              <Toaster />
            </div>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
