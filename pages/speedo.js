import Image from "next/image";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import LinkBlock from "@/components/linkBlock";
import QuoteBlock from "@/components/quoteBlock";
import { FiExternalLink } from "react-icons/fi";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

import SpeedoHeader from "../src/img/speedo-ui/multi-device-mockup-speedo.jpg";
import SpeedoAtomic1 from "../src/img/speedo-ui/atomic-design1.png";
import SpeedoAtomic2 from "../src/img/speedo-ui/atomic-design2.png";
import SpeedoBlog from "../src/img/speedo-ui/blog-component.png";
import SpeedoCarousel from "../src/img/speedo-ui/carousel-component.png";
import SpeedoLaptop from "../src/img/speedo-ui/laptop-home.jpg";

export default function speedo() {
  return (
    <Layout>
      <NextSeo title="Speedo.com" />

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
              <div className="mb-8">
                <Image
                  src={SpeedoHeader}
                  alt="Picture of Speedo"
                  className="rounded-md"
                  placeholder="blur"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">
                <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-800 inline-block">
                      SPEEDO.COM
                    </h1>

                    <p>
                      <FiExternalLink className="inline" />{" "}
                      <a
                        href="https://www.speedo.com"
                        target="_blank"
                        className="italic hover:decoration-red-400"
                      >
                        Visit Site
                      </a>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>UI Research - comparing competitors.</i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        UI Design - Design System built in Figma. Components
                        optimized for all screen sizes.
                      </i>
                    </p>
                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      As a product designer on the e-commerce team of Pentland
                      Brands, I was given the brief of leading the initial UI
                      design for a new speedo.com website, in line with an
                      updated brand identity.
                    </p>

                    <p className="pb-4">
                      The identity was shaped by regular stakeholder meetings
                      and consumer research. Ultimately the main goals of the
                      brand refresh that were discovered and established were -
                    </p>

                    <ul className="pb-4 pl-4 list-disc">
                      <li>
                        To reflect the status of Speedo as a premium brand.
                      </li>
                      <li>
                        Reinforce its position in the competitive swimwear
                        market.
                      </li>
                      <li>
                        To embrace fun, vibrancy and the diversity of speedos
                        customers - embrace the 'budgy smugglers!'.
                      </li>
                    </ul>

                    <p>
                      Therefore a contemporary look to the UI that would appeal
                      to our target markets, whilst taking inspiration from
                      competitors sites such as asos, nike, pro swimwear,
                      patagonia etc. was chosen.
                    </p>
                  </div>
                </div>
              </div>

              <QuoteBlock
                bgColorClasses="quoteBlockbg--sp"
                quote="Using the methodology of ‘Atomic Design’ - starting with the smallest elements first (ie. ‘atoms’) such as buttons all the way up to design artifacts such as the website header, this allowed us to combine and arrange UI components in a fully modular way."
              />

              <Image
                src={SpeedoAtomic1}
                alt="Picture of Speedo Design System 1"
                className="rounded-md"
                placeholder="blur"
              />

              <Image
                src={SpeedoAtomic2}
                alt="Picture of Speedo Design System 2"
                className="rounded-md"
                placeholder="blur"
              />

              <div className="md:flex flex-row pb-8 justify-center text-center pt-2">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={SpeedoBlog}
                    alt="Picture of Speedo Blog Component"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <div className="md:flex flex-row pb-8 justify-center text-center pt-2">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={SpeedoCarousel}
                    alt="Picture of Speedo Carousel Component"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <Image
                src={SpeedoLaptop}
                alt="Picture of Speedo Homepage"
                className="rounded-md"
                placeholder="blur"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-8 italic">
                This work was created at &amp; is property of Pentland Brands.
              </p>

              <LinkBlock
                destination="/rightindem"
                a11yText="Navigate to Rightindem"
                title="RightIndem"
                textColorClasses="from-green-500 to-emerald-800"
                bgColorClasses="bg-gray-800 mt-4 ri"
                num="Next Project"
                company="Right Indemnity"
                skill_1="Rethinking the insurace claim process."
              />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
