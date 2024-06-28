import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "FAQ | Theme UI - Framer Motion",
  description: "FAQ Page build with Theme UI and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
