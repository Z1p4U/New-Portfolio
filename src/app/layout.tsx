import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zipfolio",
  description: "Personal portfolio page for me",
};

const myArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  // "circle",
  // "x-shape",
  // "circle",
  // "x-shape",
  // "circle",
  // "x-shape",
  // "circle",
  // "x-shape",
  // "circle",
  // "x-shape",
  // "circle",
  // "x-shape",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lines">
          <div className="line-1">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-2">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-3">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-4">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
          <div className="line-5 hidden sm:block">
            <div className="shapes">
              {myArray.map((shape, index) => (
                <div key={index} className={shape}></div>
              ))}
            </div>
          </div>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
