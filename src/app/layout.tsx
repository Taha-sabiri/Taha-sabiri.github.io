import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'], weight: ['300','400','500','700','800'], display: 'swap', variable: '--font-vazir' })

export const metadata: Metadata = {
  title: "طاها صبیری | توسعه دهنده فرانت‌اند",
  description: "پورتفولیو طاها صبیری - توسعه دهنده فرانت‌اند",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
