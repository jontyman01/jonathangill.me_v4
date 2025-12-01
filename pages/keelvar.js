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

import KIMG_1 from "../src/img/keelvar/Keelvar1.png";
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
          className="mb-12 md:mb-16 xl:mb-8"
        >
          <Container>
            <m.div variants={fade}>
             {/*  <Image
                src={KIMG_1}
                alt="Rate manager cards"
                placeholder="blur"
                className="rounded-xl"
              /> */}
              <div style={{ aspectRatio:'16/9' }} className="rounded-xl overflow-hidden" >
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/1058941973?h=e85d9c3e7c?transparent=true" style={{ backgroundColor:'black' }} width="100%" height="100%" frameborder="0" colors="000000,00adef,ffffff,000000" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 md:p-6 my-8">

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-xl basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-4 font-light">
                    <h1 className="font-bold text-xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r inline-block from-k_purple-400 to-k_purple-600">
                      Keelvar
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                    <p>
                      <i>
                        Leading design of a{" "}
                        <a
                          href="https://www.keelvar.com/rate-manager"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:decoration-purple-400"
                        >
                          rate management product
                        </a>{" "}
                        product from scratch to launch and beyond, guided by user research.
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
                        into 10x monthly usage and the era of AI agents.
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        Lead curator of Keelvars design system. Mentoring junior and mid level designers to promotion.
                      </i>
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-xl basis-1/1 md:basis-3/4 md:p-6 leading-loose">
                    <p className="text-lg font-bold pb-4 leading-loose">
                      <a href="https://keelvar.com/" target="_blank" className="hover:decoration-purple-400" rel="noopener noreferrer">Keelvar</a> drives better procurement outcomes for Coca-Cola, Siemens, Samsung and many others, by simplifying the complex and automating the simple across sourcing needs.
                    </p>

                    <p className="text-lg leading-loose">
                      For the design team at Keelvar, simplifying the complex defines our priority on any project. While this is an essential aim for any product team, the tasks that procurement professionals face on a daily basis can be highly specialised, labour intensive, and can require a high cognitive load. By gaining a deep knowledge in the product team of our customers needs and pain points, and by using the design thinking process to empathize, define, ideate, prototype and test, we aim to simplify the complex in measurable ways. For example, during my time leading design for <a
                        href="https://www.keelvar.com/sourcing-automation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:decoration-purple-400"
                      >
                        Autonomous Sourcing
                      </a>
                      , <strong>monthly event usage has increased by nearly 10x -</strong> whilst at the same time, the product receives only <strong>one support ticket for every ten</strong> app-wide.
                    </p>

                  </div>
                </div>
              </div>

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 mb-8 leading-loose">

                <p className="text-lg leading-loose">As another example, lets take rate management. In mid sized to large businesses, procurement teams have various methods of storing the agreed prices for contracts, in what is called a Rate Card; for instance, a contract for a shipping container of raw materials going from Southampton to Cork for the year. Initial customer interviews revealed that procurement teams were struggling with fragmented systems, labor-intensive manual processes, and inefficient rate tracking and reporting.</p>
              </div>


              <QuoteBlock
                bgColorClasses="quoteBlockbg--kl"
                quote="These challenges highlighted a clear problem statement; a need for a centralized platform to manage, monitor, and search rate data easily and efficiently."
              />

              <Image
                src={KIMG_2}
                alt="lo-fi rate manager wireframe"
                className="rounded-xl"
                placeholder="blur"
              />

              <div style={{ height: '1.8rem' }} />

              <Image
                src={KIMG_3}
                alt="lo-fi rate manager wireframe"
                className="rounded-xl"
                placeholder="blur"
              />


              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8 leading-loose">

                <p className="text-lg leading-loose">I began by exploring low-fidelity concepts, centering the design around a familiar tabular interface inspired by Excel, as this was the most familiar interface for our users. However, we aimed to go beyond Excel by incorporating powerful features like advanced filtering to facilitate managing vast rate cards - some with up to 100,000 rates.</p>
              </div>

              <Image
                src={KIMG_5}
                alt="Rate manager rates"
                className="rounded-xl"
                placeholder="blur"
              />

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8">

                <p className="text-lg leading-loose">After multiple rounds of iterations on prototypes, validating high level concepts with customers, a development team was assembled. I worked closely with engineers to ensure technical feasibility of designs. I also contributed to front-end QA, leveraging my technical background to test in-app designs before deployment. After launching the alpha version, I led think out loud user testing sessions with customers, internal stakeholders, and non-expert users, uncovering critical usability insights before launch. </p>

              </div>

              <Image
                src={KIMG_6}
                alt="Rate manager cards"
                className="rounded-xl"
                placeholder="blur"
              />

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8 ">

                <p className="text-lg leading-loose">A year after release, Rate Manager now integrates seemlessly into exsisting workflows to become the single point of truth for a large portion of Keelvar users. Plus, it's integrated into a larger solution, where AI agents autonomously negotiate and store rates on behalf of customers.</p>
              </div>



              <p className="bg-gray-800 rounded-xl p-4 md:p-6 mb-8 italic text-lg leading-loose">This work was created at &amp; is property of Keelvar.</p>


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
