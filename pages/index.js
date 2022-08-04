import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import LinkBlock from '@/components/linkBlock'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.article variants={fade}>

            <LinkBlock destination="/waer-systems" a11yText="Navigate to WAER Systems" title="WAERLINX" textColorClasses="from-yellow-500 to-yellow-800" num="01" />
              
            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
