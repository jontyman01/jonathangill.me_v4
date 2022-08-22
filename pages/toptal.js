import Image from "next/image";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import QuoteBlock from "@/components/quoteBlock";
import { FiExternalLink } from 'react-icons/fi';

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

import SpeedoHeader from "../src/img/speedo-ui/multi-device-mockup-speedo.jpg";
import RIHeader from "../src/img/rightindem/rightindem.jpg";
import wlHeader from "../src/img/waerlinx/pickup1.jpg";


export default function toptal() {
  return (
    <Layout>
      <NextSeo title="Toptal" />

      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-8 md:pt-2"
        >
          <Container>
            <m.div variants={fade}>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-10">
                <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                  Hi Toptal!
                </h1>
                <p className="text-lg font-bold pb-4">
                  <a href="https://www.toptal.com/designers/ui-ux" taget="_blank" rel="noopener noreferrer" className="hover:decoration-blue-400">Looking through the list of talented UI/UX designers on display here</a>, If I were lucky enough to be featured, I would wish to show a variety of projects I’ve been involved in through my near decade of experience in designing and delivering digital products, which I always aim to ground in clear rationale.</p>
              </div>


              <Image
                src={RIHeader}
                alt="Picture of Rightindem UI"
                className="rounded-md"
                placeholder="blur"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">
                For instance, <a href="/rightindem">Rightindem</a> - an award winning insurtech startup where I helped to define the brand image and unify the UI, creating conversational UI pieces for the stressful situation of a car accident, whilst keeping in mind configurability for its white label SaaS product, allowing insurers to set their own branding and colour schemes within the product.</p>

              <Image
                src={wlHeader}
                alt="Picture of WAERlinx in a Warehouse"
                className="rounded-md"
                placeholder="blur"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">
                <a href="/waerlinx">WAER systems</a>, where I dug into research to find the pain points and needs of warehouse users to create a simplified, more accessible warehouse management system, built for the practical nature of warehouse work whilst being optimized for specialized rugged android devices with at times very small screens and desktops alike.</p>

              <Image
                src={SpeedoHeader}
                alt="Picture of Speedo"
                className="rounded-md"
                placeholder="blur"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">

                And <a href="/speedo">Pentland Brands</a>, where I lead the UI re-design for speedo.com from the ground up To reflect the status of Speedo as a premium brand, reinforce its position in the competitive swimwear market, and to embrace the fun, vibrancy and the diversity of Speedos customers.</p>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-8 text-lg">
                I hope you will consider my application. Thanks!</p>

            </m.div>
          </Container>
        </m.div>
      </LazyMotion >

      <Footer />
    </Layout >
  );
}
