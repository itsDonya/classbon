import "./globals.css";

// components
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

// fonts
import localFont from "next/font/local";
import { Figtree } from "next/font/google";

// figtree font config
const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const ravi = localFont({
  src: [
    {
      path: "../../public/fonts/ravi/RaviFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/ravi/RaviFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ravi/RaviFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ravi/RaviFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ravi/RaviFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ravi/RaviFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ravi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${ravi.variable} ${figtree.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
