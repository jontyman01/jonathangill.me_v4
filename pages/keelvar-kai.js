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

import KAIIMG_1 from "../src/img/keelvar-kai/hero.png";
import KAIIMG_2 from "../src/img/keelvar-kai/kai-workshop.jpg";
import KAIIMG_3 from "../src/img/keelvar-kai/concepts1.png";
import KAIIMG_4 from "../src/img/keelvar-kai/concepts2.png";
import KAIIMG_5 from "../src/img/keelvar-kai/hifi1.png";
import KAIGIF from "../src/img/keelvar-kai/wireframe-flow.gif";
import KAIGIFTHUMB from "../src/img/keelvar-kai/wireframe-flow-thumb.png";


export default function keelvar() {
  return (
    <Layout>
      <NextSeo title="Keelvar AI (Kai)" />

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
              <Image
                src={KAIIMG_1}
                alt="Rate manager cards"
                placeholder="blur"
                className="rounded-xl"
              />

              <div className="bg-gray-800 rounded-xl p-4 md:p-6 my-8">

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-xl basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-4 font-light">
                    <h1 className="font-bold text-xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r inline-block from-cyan-400 to-cyan-500">
                      KEELVAR AI (KAI)
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                    <p> <i>
                      UX research - helped the team define the problem and align on a shared design goal
                    </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        User testing - validated ideas and identified areas for improvement before launch
                      </i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      UI design - established a look and feel for AI interface.
                    </p>
                  </div>

                  <div className="md:ml-2 rounded-xl basis-1/1 md:basis-3/4 md:p-6 leading-loose">
                    <p className="text-lg font-bold pb-4 leading-loose">
                      With the rise of agentic AI, Keelvar saw an immediate opportunity to simplify the user experience of their product. But what does real value mean to Keelvars users when it comes to AI? When should, or shouldn&apos;t, you use AI to help your users?
                    </p>

                    <p className="text-lg leading-loose">
                      We needed to answer these questions, and firstly, understand where would hit hardest in terms of the user experience improvement in the shortest space of time, so we could experiment and get feedback.
                    </p>

                  </div>
                </div>
              </div>

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 mb-8 leading-loose">

                <p className="text-lg leading-loose">Autonomous Sourcing users aren&apos;t always procurement professionals; they often make ad-hoc, tactical purchases—like sourcing football shirts for an event, hiring a marketing agency for a campaign, or ordering raw materials to meet a surge in demand. These requests typically require a Keelvar super user within an organisation to build workflows, curate suppliers, and configure settings. Requestors then choose the correct workflow and manually fill out forms. </p>
              </div>


              <QuoteBlock
                bgColorClasses="quoteBlockbg--kl-ai"
                quote="Analytics showed that in some cases, users were never completing their requests because configurations were too complex, or forms were too complicated to fill in."
              />


              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8 leading-loose">

                <p className="text-lg leading-loose">From these issues, we identified our initial goals: reduce the time taken to launch autonomous sourcing requests and improve the drop-off rate for launching a request.</p>
              </div>
              <Image
                src={KAIIMG_4}
                alt="concept designs for Kai"
                placeholder="blur"
                className="rounded-xl"
              />
              <div style={{ height: '1.8rem' }} />
              <Image
                src={KAIIMG_3}
                alt="concept designs for Kai"
                placeholder="blur"
                className="rounded-xl"
              />
              <div style={{ height: '1.8rem' }} />

              <Image
                src={KAIIMG_2}
                alt="Kai workshop"
                placeholder="blur"
                className="rounded-xl"
              />

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8">

                <p className="text-lg leading-loose">
                  After creating inital concept designs, I facilitated an in-person workshop combining competitive analysis and sketching exercises, based on Google Design Sprint methods. This allowed me to rapidly align the team around a shared UX direction.
                </p>

              </div>

               {/* <Image
                src={KAIGIF}
                alt="wireame flow of Kai interaction"
                className="rounded-xl"
                placeholder="blur"
                blurDataURL={KAIGIFTHUMB}
                width={KAIGIF.width} 
                height={KAIGIF.height}
              /> */}
              <img src={KAIGIF.src || KAIGIF} alt="wireframe flow of Kai interaction" className="rounded-xl" />

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8">
                <p className="text-lg leading-loose">
                  Ultimately, the team decided that a &apos;Canvas&apos; view that separates AI output from the chat, enabling both AI and manual edits where needed, as the best starting point for a solution, as pages already exisited in-app we could fork and modify.
                </p>
              </div>

             
              <div style={{ aspectRatio: '16/9' }} className="rounded-xl overflow-hidden" >
               <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/ktlufpvBrtM?si=LGsjwKXef9DA04H8&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
              
              </div>

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8 ">

                <p className="text-lg leading-loose">After designing the initial UI using our design system guidelines, handing over to developers and establishing the end-to-end flow for the newly named “Kai” (Keelvar AI), I ran 13 user tests with customers and internal users. </p>

              </div>



              <QuoteBlock
                bgColorClasses="quoteBlockbg--kl-ai"
                quote="'This will really make it so nobody has to be trained on how to do anything. That's what it needs to get to to be super, super successful.'"
              />

              <div className="md:flex flex-row bg-gray-800 rounded-xl p-4 md:p-6 my-8 ">

                <p className="text-lg leading-loose">They appreciated the speed and how vague prompts became concrete requests, but details mattered that were at times surprising. For example, we expected that &apos;thinking&apos; messages for Kai would be deemed as noisy and background information. However we found the opposite was true, with users wanting visibility into Kai&apos;s &apos;thinking&apos;, for transparency into it&apos;s conclusions, so we kept these messages in an accordion.</p>
              </div>

              <Image
                src={KAIIMG_5}
                alt="Kai polished designs"
                placeholder="blur"
                className="rounded-xl"
              />

              <p className="bg-gray-800 rounded-xl p-4 md:p-6 my-8 text-lg leading-loose">This is only the beginning for Keelvar and Kai, but early results show that both initial aims are on track, with times to launch reduced and drop-off reducing. To further remove friction from the user experience, prompt suggestion and further methods for inputting information into Kai such as documents will be key to adoption.</p>

              <p className="bg-gray-800 rounded-xl p-4 md:p-6 mb-8 italic text-lg leading-loose">This work was created at &amp; is property of Keelvar.</p>


              <LinkBlock
                destination="/keelvar"
                a11yText="Navigate to Keelvar Rate Manager"
                title="KEELVAR RATE MANAGER"
                textColorClasses="from-k_purple-400 to-k_purple-600"
                bgColorClasses="bg-gray-800 kl"
                num="Next Project"
                company="Keelvar"
                skill_1="Leading design across multiple products through high growth."
              />
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
