import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wall Bed King — Trade Partners",
  description: "Apply as a Retail or Design Partner. European manufacturer of wall bed mechanisms since 1994.",
};

import { getDictionary } from "../../dictionaries";
import CookieBanner from "../../components/CookieBanner";
import { FacebookPixel } from "../../components/FacebookPixel";

import Script from "next/script";

export default async function RootLayout(props) {
  const params = await props.params;
  const lang = params.lang;
  const children = props.children;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <FacebookPixel />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner dict={dict} />
      </body>
    </html>
  );
}
