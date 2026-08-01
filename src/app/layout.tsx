import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Fauzan | Portfolio",
  description:
    "Portfolio Mohammad Fauzan - Mahasiswa Teknik Telekomunikasi di Politeknik Negeri Jakarta. IoT Developer, Network Engineer, dan inovator teknologi.",
  keywords: [
    "Mohammad Fauzan",
    "Portfolio",
    "IoT",
    "Telekomunikasi",
    "Engineering",
    "ESP32",
    "Networking",
    "PNJ",
  ],
  authors: [{ name: "Mohammad Fauzan" }],
  openGraph: {
    title: "Mohammad Fauzan | Portfolio",
    description:
      "IoT Developer & Telecommunication Engineering Student at Politeknik Negeri Jakarta",
    type: "website",
  },
  // 👇 Tambahkan kode di bawah ini untuk Favicon
  icons: {
    icon: "/profile.JPEG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}