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

import D_Sitemap from "../src/img/denton-blinds/denton-sitemap.jpg";
import D_wireframe from "../src/img/denton-blinds/denton-wireframe-desktop.jpg";

import D_Oldlogo from "../src/img/denton-blinds/denton-blinds-old-logo.png";
import D_Newlogo from "../src/img/denton-blinds/denton-blinds-whitebg.svg";

import D_Hifi from "../src/img/denton-blinds/denton-hifi1.jpg";
import D_Hifi2 from "../src/img/denton-blinds/denton-hifi2.jpg";

import DB_Img from "../src/img/denton-blinds/denton-blinds.jpg";
import DB_Runner from "../src/img/denton-blinds/denton-blindsrunner.jpg";

export default function denton_blinds() {
  return (
    <Layout>
      <NextSeo title="Denton Blinds" />

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
                  src={DB_Runner}
                  alt="Picture of Denton UI"
                  className="rounded-md"
                  placeholder="blur"
                  layout="responsive"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">
                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r inline-block from-[#8B7D99] to-[#EAE6D2]">
                      Denton Blinds
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                    <p>Wireframing, UI Design and Logo Design</p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>Web Development for Wordpress</i>
                    </p>
                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <FiExternalLink className="inline" />{" "}
                      <a
                        href="https://www.dentonblinds.co.uk"
                        target="_blank"
                        className="italic hover:decoration-white"
                      >
                        Visit Site
                      </a>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      Denton blinds is a small independent company specialising
                      in the supply and installation of high quality blinds,
                      awnings and canopies.
                    </p>
                    <p className="text-lg pb-4">
                      I was tasked with creating a new logo and website design.
                      For the logo they wanted something contemporary and
                      unique, so after a few ideas we settled on the letter D as
                      a blind itself, giving a bold and distinctive marque.
                      Below shows their old logo vs their chosen new logo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={D_Oldlogo}
                    alt="Old Logo"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />
                </div>

                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={D_Newlogo}
                    alt="New Logo"
                    className="rounded-md text-center"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">
                For the website, I was given a brief that detailed how the site
                should be structured, with details on the key messages, unique
                selling points of the company and call to actions that should go
                into the site.
              </p>

              <Image
                src={D_Sitemap}
                alt="Denton Blinds Sitemap"
                className="rounded-md"
                placeholder="blur"
              />

              <Image
                src={D_wireframe}
                alt="Denton Blinds wireframe"
                className="rounded-md"
                placeholder="blur"
              />

              <QuoteBlock
                bgColorClasses="quoteBlockbg--db"
                quote=" As they wanted to convey the feeling of a premium brand, I chose a colour scheme centered around dark purple as this is often associated with luxury."
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-5 text-lg">
                The site itself was built with a blank wordpress theme as a
                basis that I then developed against a mockup I created of the
                main templates agreed upon by Denton. The site launch was
                successful and is mostly unchanged after 7 years.
              </p>

              <Image
                src={D_Hifi}
                alt="Denton Blinds Homepage"
                className="rounded-md"
                placeholder="blur"
              />

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={DB_Img}
                    alt="Denton Blinds Mobile View"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <Image
                src={D_Hifi2}
                alt="Denton Blinds Product Page"
                className="rounded-md"
                placeholder="blur"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-4 italic">
                This work was created at &amp; is property of Adtrak LLP.
              </p>

              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
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
