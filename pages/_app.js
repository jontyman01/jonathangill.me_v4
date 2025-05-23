import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-V9D5TC114G"/>
      <DefaultSeo {...SEO} /> 
      <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      </ThemeProvider>
    </>
  )
}