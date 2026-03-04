import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wall Bed King — Trade Partners",
  description: "Apply as a Retail or Design Partner. European manufacturer of wall bed mechanisms since 1994.",
};

import { getDictionary } from "../../dictionaries";
import CookieBanner from "../../components/CookieBanner";

import Script from "next/script";

export default async function RootLayout(props) {
  const params = await props.params;
  const lang = params.lang;
  const children = props.children;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1241080515923812');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner dict={dict} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1241080515923812&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
