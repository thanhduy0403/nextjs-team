import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/*META TAGS*/}
        <meta
          name="viewport"
          content="width=device-width, initial-scal=1, user-scalable=no"
        />
        <meta name="author" content="MOHIT" />
        {/*FONT AWESOME*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/*EXTERNAL CSS
<link rel="stylesheet" href="css/style.css">*/}
        {/*GOOGLE FONTS*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap"
          rel="stylesheet"
        />
        {/* Header Page */}
        <NextScript />
      </body>
    </Html>
  );
}
