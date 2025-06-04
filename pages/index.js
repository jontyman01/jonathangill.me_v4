import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import LinkBlock from "@/components/linkBlock";

import Collapsible from "react-collapsible";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

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
          className="mb-12 md:mb-16 xl:mb-8 md:pt-2"
        >
          <Container>
            <m.article variants={fade}>
              <div className="md:flex flex-row pb-4">
                <div className="md:mr-2 rounded-md basis-1/1 md:basis-2/3 bg-gradient-to-r from-green-800 to-blue-900 p-4 md:p-6 mb-4 md:mb-0 flex items-center">
                  <p className="md:text-3xl text-2xl">
                    Hi, I'm Jon. I have over a decade of experience researching, designing and delivering human centred products, grounded in clear business rationale.
                  </p>
                </div>

                <div className="md:ml-2 rounded-md basis-1/1 md:basis-1/3 bg-gradient-to-r from-slate-800 to-slate-800 p-4 md:p-6">
                  <p className="text-gray-400 pb-2">I've designed solutions for</p>
                  <p className="text-3xl font-bold uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-orange-800 pr-2">
                      Coca-Cola
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-teal-500 to-teal-800 pr-2">
                      Siemens
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-amber-500 to-amber-800 pr-2">
                      Nestlé
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-blue-500 to-blue-800 pr-2">
                      Mars
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-orange-800 pr-2">
                      Speedo
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-green-600 to-green-400 pr-2">
                      Berghaus
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-red-800 pr-2">
                      SIG
                    </span>
                    </p>
                    <p className="text-gray-400 pt-2">+ Many More</p>
                </div>
              </div>

              <div className="mb-4 p-4 md:p-6 rounded-md bg-gradient-to-r from-gray-800 to-purple-900">
                <p className="text-gray-400 pb-4">Specialising In</p>
                <Collapsible
                  trigger="DISCOVERY & IDEATION"
                  transitionTime="150"
                  tabIndex="2"
                >
                  <p className="pb-4 pt-2">
                  I’m an advocate of the design thinking process - empathise, define, ideate, prototype, and test to deliver the best solutions possible. I’ve followed this process to deliver designs to some of the worlds largest businesses in measurably successful ways. For example, during my time leading design for <a
                          href="https://www.keelvar.com/sourcing-automation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:decoration-purple-400"
                        >
                         Autonomous Sourcing
                        </a>{" "}
                         at Keelvar, <strong>monthly event usage has increased by nearly 10x -</strong> whilst at the same time, the product receives only <strong>one support ticket for every ten</strong> app-wide.
                  </p>

                </Collapsible>
                <Collapsible
                  trigger="MANAGING THE ART OF THE POSSIBLE"
                  transitionTime="150"
                  tabIndex="2"
                >
               <p className="pb-4 pt-2">
               I believe the most effective way to see through a design to smooth release is to be embedded in both delivery and product teams. This keeps communication strong, allowing for quick reaction to any technical roadblocks and negotiation of the art of the possible for a design to reach the best compromise for both users and the business.
                </p>
                </Collapsible>
                <Collapsible
                  trigger="UI DESIGN &amp; DESIGN SYSTEMS"
                  transitionTime="150"
                  tabIndex="1"
                >
                  <p className="pb-4 pt-2">
                    I can create and develop bespoke UI designs and design systems - in other
                    words, I translate any user experience requirements gathered
                    into re-usable, WCAG compliant UI components.
                  </p>
                  <p className="pb-4">
                    From simple elements like buttons, all the way to whole
                    screens that can be arranged and scaled to any screen size, all whilst engaging with delivery teams to ensure smooth implementation.
                  </p>
                </Collapsible>


                <Collapsible
                  trigger="DESIGN MENTORING"
                  transitionTime="150"
                  tabIndex="3"
                >
                  <p className="pb-4 pt-2">
                    I have proven experience in helping level up junior and mid-level designers to promotion through constructive feedback, and through running upskilling sessions.
                  </p>
                </Collapsible>
              </div>

              <p className="bg-gradient-to-r from-red-900 to-pink-900 rounded-md p-4 md:p-6 mb-4 md:text-2xl text-xl">
                Selected Case Studies
              </p>
              <LinkBlock
                destination="/keelvar"
                a11yText="Navigate to Keelvar"
                title="KEELVAR"
                textColorClasses="from-k_purple-400 to-k_purple-600"
                bgColorClasses="bg-gray-800"
                num="01"
                company="KEELVAR"
                skill_1="Leading design across multiple products through high growth."
              />
              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
                num="02"
                company="WAER Systems"
                skill_1="Redesigning a 20 year old application to be user first."
              />

              <LinkBlock
                destination="/speedo"
                a11yText="Navigate to Speedo"
                title="SPEEDO.COM"
                textColorClasses="from-red-500 to-orange-800"
                bgColorClasses="bg-gray-800 speedo"
                num="03"
                company="Pentland Brands"
                skill_1="Creating a design system from scratch for a global brand."
              />

              <LinkBlock
                destination="/rightindem"
                a11yText="Navigate to RightIndem"
                title="RIGHTINDEM : INSURANCE CLAIMS PLATFORM"
                textColorClasses="from-green-500 to-emerald-800"
                bgColorClasses="bg-gray-800 ri"
                num="04"
                company="RightIndem"
                skill_1="Rethinking the insurace claim process."
              />

              <LinkBlock
                destination="/berghaus"
                a11yText="Navigate to Berghaus"
                title="BERGHAUS.COM HOMEPAGE"
                textColorClasses="from-blue-600 to-red-400"
                bgColorClasses="bg-gray-800 bh"
                num="05"
                company="Pentland Brands"
                skill_1="Increasing conversions and sessions."
              />

              <LinkBlock
                destination="/waerbi"
                a11yText="Navigate to waerb.i"
                title="WAERb.i"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
                num="06"
                company="WAER Systems"
                skill_1="Bespoke warehouse analytics."
              />

            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
