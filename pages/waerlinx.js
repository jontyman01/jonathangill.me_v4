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

import wlHeader from "../src/img/waerlinx/pickup1.jpg";
import wlPersonnas from "../src/img/waerlinx/personnas.jpg";
import wlmultiUI from "../src/img/waerlinx/inventory-move-putaway-mob-min.png";
import wlwireframes from "../src/img/waerlinx/wireframes.png";
import wlmoveimg from "../src/img/waerlinx/move2.jpg";
import wlbeforeafter1 from "../src/img/waerlinx/im-scan-before-after.png";
import wlbeforeafter2 from "../src/img/waerlinx/pickup-before-after.png";

export default function waerlinx() {
  return (
    <Layout>
      <NextSeo title="WAERlinx" />

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
                  src={wlHeader}
                  alt="Picture of WAERlinx in a Warehouse"
                  className="rounded-md"
                  placeholder="blur"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">


                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r inline-block from-yellow-400 to-yellow-500">
                      WAERlinx
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                    <p>
                      <i>
                        UX Research - In person observation, customer
                        interviews, surveys.
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        UX Design - Wireframing, customer feedback sessions.
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        UI Design - Design system built in Figma using{" "}
                        <a
                          href="https://mui.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:decoration-yellow-400"
                        >
                          MUI
                        </a>{" "}
                        as a basis for UI Components.
                      </i>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      <a href="https://waersystems.com/" target="_blank" className="hover:decoration-yellow-400" rel="noopener noreferrer">WAER Systems</a> is the creator of WAERLinx, a WMS (warehouse
                      management system) for businesses that run NetSuite as
                      their ERP.
                    </p>

                    <p className="pb-4">
                      As the first full time designer to work on WAERLinx in its
                      20+ year history, my main focus was to evaluate,
                      simplify and optimise its design, based on customer needs.
                      The project was a complete redesign of the product, with
                      an inital focus on improving screens for moving inventory.
                    </p>

                    <p className="pb-4">
                      This started with requirements gathering through customer
                      warehouse site visits, surveys and stakeholder interviews,
                      which were then translated into wireframes. These were
                      then given to customers for feedback and iteration.
                    </p>

                    <p>
                      From this, a Design System was established and a full UI
                      design of screens were created. This was then picked up by
                      a front-end developer and built in React and {" "}
                      <a
                        href="https://mui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:decoration-yellow-400"
                      >
                        MUI
                      </a>, where I directed the UI
                      components to be built in <a href="https://storybook.js.org/" target="_blank" className="hover:decoration-yellow-400" rel="noopener noreferrer">Storybook</a> for re-uability and
                      testing of components in multiple screen situations. So far customer feedback has been positive and encouraging.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex flex-row pb-8 justify-center text-center pt-2">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={wlPersonnas}
                    alt="Picture of Inventory Move Wireframes"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>


              <Image
                src={wlwireframes}
                alt="Picture of Inventory Move Wireframes"
                className="rounded-md"
                placeholder="blur"
              />
              <QuoteBlock
                bgColorClasses="quoteBlockbg--wl"
                quote="Ultimately the research showed it had to be fast, intuitive for android users, optimized for very small screens and the environment of a warehouse - meaning large, easy to tap interactive elements, clear accessible instructions and quick ways to navigate throughout the product."
              />

              <Image
                src={wlmultiUI}
                alt="Picture of Inventory Move UI"
                className="rounded-md pb-8"
                placeholder="blur"
              />

              <Image
                src={wlmoveimg}
                alt="Picture of Inventory Move UI on a Laptop"
                className="rounded-md"
                placeholder="blur"
              />

              <div className="md:flex flex-row pb-8">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={wlbeforeafter1}
                    alt="Picture of Inventory Move UI before and after"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>

                <div className=" md:basis-1/2 md:pl-1">
                  <Image
                    src={wlbeforeafter2}
                    alt="Picture of Inventory Move UI before and after"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-8 italic">This work was created at &amp; is property of WAER Systems.</p>


              <LinkBlock
                destination="/speedo"
                a11yText="Navigate to Speedo"
                title="SPEEDO.COM"
                textColorClasses="from-red-500 to-orange-800"
                bgColorClasses="bg-gray-800 speedo"
                num="Next Project"
                company="Pentland Brands"
                skill_1="Creating a design system from scratch for a global brand."
              />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
