import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#111827" />
          <link rel="manifest" href="%PUBLIC_URL%/favicons/manifest.json"/>

          <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="%PUBLIC_URL%/favicons/site.webmanifest"/>
          <meta name="theme-color" content="#111827"/>
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicons/favicon.ico"/>
        </Head>
        
        <body className="bg-gray-100 dark:bg-gray-900 dark:text-slate-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
