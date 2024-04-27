import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  style: "normal",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
