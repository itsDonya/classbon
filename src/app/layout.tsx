import "./globals.css";

// fonts
import { Figtree } from "next/font/google";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`${figtree.variable}`}>
      <body className="antialiased flex flex-col h-screen">
        <header className="w-full h-16 bg-neutral-200 flex items-center justify-center">
          <p className="text-xl text-neutral-700 font-bold uppercase">header</p>
        </header>

        <div className="flex-1 flex">{children}</div>

        <footer className="w-full h-16 bg-neutral-200 flex items-center justify-center">
          <p className="text-xl text-neutral-700 font-bold uppercase">footer</p>
        </footer>
      </body>
    </html>
  );
}
