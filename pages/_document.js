import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta name="theme-color" content="#111827" />
          <meta name="robots" content="noindex"></meta>
          <link rel="manifest" href="https://jonathangill.me/favicons/manifest.json"/>
          <link rel="apple-touch-icon" sizes="180x180" href="https://jonathangill.me/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="https://jonathangill.me/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="https://jonathangill.me/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="https://jonathangill.me/favicons/site.webmanifest"/>
          <meta name="theme-color" content="#111827"/>
          <link rel="shortcut icon" href="https://jonathangill.me/favicons/favicon.ico"/>
        </Head>
        
        <body className="bg-gray-900 text-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
