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

import KIMG_1 from "../src/img/keelvar/keelvar1.png";
import KIMG_2 from "../src/img/keelvar/keelvar2.png";
import KIMG_3 from "../src/img/keelvar/keelvar3.png";
import KIMG_5 from "../src/img/keelvar/keelvar5.png";
import KIMG_6 from "../src/img/keelvar/keelvar6.png";

export default function keelvar() {
  return (
    <Layout>
      <NextSeo title="Keelvar" />

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
                      src={KIMG_5}
                      alt="Rate manager rates"
                      className="rounded-md"
                      placeholder="blur"
                    />
                  </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r inline-block from-k_purple-400 to-k_purple-600">
                      Keelvar
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                    <p>
                      <i>
                        Led design of a{" "}
                        <a
                          href="https://www.keelvar.com/rate-manager"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:decoration-purple-400"
                        >
                          rate management product
                        </a>{" "}
                        product from scratch to launch, guided by user research.
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Leading design of a
                        {" "}
                        <a
                          href="https://www.keelvar.com/sourcing-automation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:decoration-purple-400"
                        >
                          sourcing automation product
                        </a>{" "}
                        into high growth and the era of AI agents.
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Lead curator of Keelvars design system. Mentoring Junior and mid level designers to promotion.
                      </i>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6 leading-loose">
                    <p className="text-lg font-bold pb-4">
                      <a href="https://keelvar.com/" target="_blank" className="hover:decoration-purple-400" rel="noopener noreferrer">Keelvar</a> drives better procurement outcomes for Coca-cola, Siemens, Samsung and many others, by simplifying the complex and automating the simple across sourcing needs.
                    </p>

                    <p className="pb-4">
                      For the design team at Keelvar, simplifying the complex defines our priority on any project. While this is an essential aim for any product team, the tasks that procurement professionals face on a daily basis can be highly specialized, labour intensive, and can require a high cognitive load. By gaining a deep knowledge in the product team of our customers needs and pain points, and by using the design thinking process to Empathize, Define, Ideate, Prototype and Test, we aim to simplify the complex in measurable ways.
                    </p>

                    <p className="pb-4">
                      As an example, lets take rate management. In mid sized to large businesses, procurement teams have various methods of storing the agreed prices for contracts, in what is called a Rate Card - for instance, a contract for a shipping container of raw materials going from Southampton to Cork for the year. Initial customer interviews revealed that procurement teams were struggling with fragmented systems, labor-intensive manual processes, and inefficient rate tracking and reporting.
                    </p>

                  </div>
                </div>
              </div>


              <QuoteBlock
                bgColorClasses="quoteBlockbg--kl"
                quote="These challenges highlighted a clear problem statement; a need for a centralized platform to manage, monitor, and search rate data easily and efficiently."
              />

              <Image
                src={KIMG_2}
                alt="lo-fi rate manager wireframe"
                className="rounded-md pb-8"
                placeholder="blur"
              />

              <Image
                src={KIMG_3}
                alt="lo-fi rate manager wireframe"
                className="rounded-md pb-8"
                placeholder="blur"
              />

              <div className="md:flex flex-row pb-8 bg-gray-800 rounded-md p-4 md:p-6 mb-10 leading-loose">

                <p className="pb-4 text-lg leading-loose">I began by exploring low-fidelity concepts, centering the design around a familiar tabular interface inspired by Excel, as this was the most familiar interface for our users. However, we aimed to go beyond Excel by incorporating powerful features like advanced filtering to facilitate managing vast rate cards - some with up to 100,000 rates.</p>
              </div>
              <div className="mb-8">
                    <Image
                      src={KIMG_1}
                      alt="Rate manager cards"
                      className="rounded-md"
                      placeholder="blur"
                    />
                  </div>

              <div className="md:flex flex-row pb-8 bg-gray-800 rounded-md p-4 md:p-6 mb-10">

                <p className="text-lg pb-4 leading-loose">After multiple rounds of iterations on prototypes, validating high level concepts with customers, a development team was assembled. I worked closely with engineers to ensure technical feasibility of designs. I also contributed to front-end QA, leveraging my technical background to test in-app designs before deployment. After launching the alpha version, I led think out loud user testing sessions with customers, internal stakeholders, and non-expert users, validating uncovering critical usability insights before launch. </p>

              </div>

               <div className="mb-8">
                    <Image
                      src={KIMG_6}
                      alt="Rate manager cards"
                      className="rounded-md"
                      placeholder="blur"
                    />
                  </div>

              <div className="md:flex flex-row pb-8 bg-gray-800 rounded-md p-4 md:p-6 mb-10 ">

                <p className="pb-4 text-lg leading-loose">The final release has since gained paying customers and strong usability scores. Now, we're extending Rate Manager&apos;s capabilities, integrating it into a larger solution where AI agents autonomously negotiate and store rates—a solution I&apos;m currently leading design on as part of the Autonomous sourcing product.</p>

              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-8 italic">This work was created at &amp; is property of Keelvar.</p>


              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to Waerlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800  wl"
                num="Next Project"
                company="WAERLINX"
                skill_1="Redesigning a 20 year old application to be user first."
              />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
