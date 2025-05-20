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

import wbiHeader from "../src/img/waerbi/waerbi-header-multi.png";
import wbimockup from "../src/img/waerbi/waerbi-header.png";
import wbiDaily from "../src/img/waerbi/wbi-daily.png";
import wbiBrand from "../src/img/waerbi/waer-bi-card.png";

export default function waerbi() {
  return (
    <Layout>
      <NextSeo title="WAERb.i" />

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
                  src={wbiHeader}
                  alt="Picture of waerbi"
                  className="rounded-md"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">
                <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 inline-block">
                      WAERb.i
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>UX - Customer Interviews &amp; feedback sessions.</i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Directed BI consultant during development of product.
                      </i>
                    </p>
                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />
                    <p>
                      <i>
                        Branding - created brand materials and landing page site{" "}
                        <a href="https://waerbi.com/" target="_blank">
                          waerbi.com.
                        </a>
                      </i>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      WAERb.i is a business intelligence tool created to extract
                      analytical data from WAERlinx, its parent Warehouse
                      Management System, and allow customers to view this in a
                      multitude of KPIs, charts, graphs, and other objects such
                      as maps, with the{" "}
                      <a
                        href="https://www.qlik.com/us/products/qlik-sense"
                        target="_blank"
                      >
                        Qlik BI platform
                      </a>{" "}
                      as its basis.
                    </p>

                    <p className="text-lg pb-4">
                      My role in the project was to analyse WAER customers
                      reporting requirements, design a suite of reports to suit
                      their needs and to direct our BI consultant in
                      implementing scripts to calculate the numbers.
                    </p>
                    <p className="text-lg pb-4">
                      Within its first few months the product had
                      already attracted the signup of a number of WAER
                      customers. I also created the product logo, digital
                      branding materials, marketing site{" "}
                      <a href="https://waerbi.com/" target="_blank">
                        waerbi.com.
                      </a>{" "}
                      and multiple email marketing campaigns to promote
                      releases.
                    </p>
                  </div>
                </div>
              </div>

              <Image
                src={wbimockup}
                alt="Picture of waerbi"
                className="rounded-md"
                layout="responsive"
                placeholder="blur"
              />

              <QuoteBlock
                bgColorClasses="quoteBlockbg--wl"
                quote="As each customer can have very different ways of operating, we needed a suite of reports that were robust and wide in scope - from goods in/out, order status, courier status, stock checking, staff performance, and for some customers expiry date/batch monitoring and manufacturing."
              />

              <div className="md:flex flex-row pb-8">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={wbiDaily}
                    alt="Picture of waerbi"
                    className="rounded-md"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>

                <div className=" md:basis-1/2 md:pl-1">
                  <Image
                    src={wbiBrand}
                    alt="Picture of waerbi"
                    className="rounded-md"
                    layout="responsive"
                    placeholder="blur"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-8 italic">
                This work was created at &amp; is property of WAER Systems.
              </p>

              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERlinx"
                textColorClasses="from-yellow-400 to-yellow-500"
                bgColorClasses="bg-gray-800 wl"
                num="Next Project"
                company="WAERlinx"
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
