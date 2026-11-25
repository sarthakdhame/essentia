import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Essentia - AI-Powered PDF Summarization",
  description: "Save hours of reading time.Transform lengthy PDFs into clear,accurate summaries  in seconds with our advanced AI technology.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className={`${geist.variable}font-sans antialiased`}>{children}</body>
    </html>
  );
}
