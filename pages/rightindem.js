import Image from "next/image";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import LinkBlock from "@/components/linkBlock";
import QuoteBlock from "@/components/quoteBlock";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

import RIHeader from "../src/img/rightindem/rightindem.jpg";
import RiApp1 from "../src/img/rightindem/product.jpg";
import RIApp2 from "../src/img/rightindem/product1.png";
import RIADamage from "../src/img/rightindem/damage-concepts.jpg";
import RIdash from "../src/img/rightindem/dashboard-hifi.png";

export default function Rightindem() {
  return (
    <Layout>
      <NextSeo title="RightIndem" />
      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-8"
        >
          <Container>
            <m.div variants={fade}>
              <div className="mb-8">
                <Image
                  src={RIHeader}
                  alt="Picture of Rightindem UI"
                  className="rounded-md"
                  placeholder="blur"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">
                <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700 inline-block">
                      Rightindem
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        UI Design - sections of the claims process, concept
                        products, marketing sites.{" "}
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Frontend Design - HTML and CSS for React components,
                        built marketing sites in React and Wordpress.
                      </i>
                    </p>
                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Graphic Design &amp; Branding - Created Logo Marque,
                        signs, merch, conference banners etc.{" "}
                      </i>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      <a
                        href="https://rightindem.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:decoration-emerald-400"
                      >
                        RightIndem
                      </a>{" "}
                      (or Right Indemnity) is an insuretech startup founded as a
                      user centered solution to improve the customer experience
                      during an insurance claim.
                    </p>

                    <p className="pb-4">
                      I contributed to the design system used in their flagship
                      SaaS product by matching it with the company's new visual
                      identity, creating a unified and consistent UI, whilst also
                      building out new interfaces with this for new areas in the
                      customer journey.
                    </p>

                    <p className="pb-4">
                      I also lead the creation of a new logo and marketing
                      materials, including both designing and developing the
                      .com site, ultimately generating more leads for the sales
                      team.
                    </p>

                    <p className="pb-4">
                      In both 2017 and 2018 RightIndem won the insurance times
                      tech &amp; innovation awards ‘best use of technology for
                      customer experience’. Since I left the company in 2019 it
                      has gone on to scale up and win many more awards,
                      including InsurTech100 list of the world's most innovative
                      insurtech companies.
                    </p>
                  </div>
                </div>
              </div>

              <QuoteBlock
                bgColorClasses="quoteBlockbg--ri"
                quote="When designing the claims process, we knew we had to cut out the complexity and insurance jargon and make the process usable in simple digestible chunks. We also knew we wanted to give a human touch to questions. For us this meant making the software one question per screen, and asked in a conversational manner."
              />

              <div className="md:flex flex-row pb-8">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={RiApp1}
                    alt="Picture of RI App"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>

                <div className=" md:basis-1/2 md:pl-1">
                  <Image
                    src={RIApp2}
                    alt="Picture of RI App"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <Image
                    src={RIdash}
                    alt="Picture of RI Dashboard"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                <Image
                    src={RIADamage}
                    alt="Picture of RI Damage Concepts"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />
               
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-8 italic">
                This work was created at &amp; is property of RightIndem.
              </p>

              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="dark:bg-gray-800 bg-gray-200 wl"
                num="Next Project"
                company="WAER Systems"
                skill_1="Lead Product Designer"
              />

            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
