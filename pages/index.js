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
                    Hi, I'm Jon 👋 I have over a decade of experience
                    designing and delivering bespoke, user focussed digital
                    products, grounded in clear rationale.
                  </p>
                </div>

                <div className="md:ml-2 rounded-md basis-1/1 md:basis-1/3 bg-gradient-to-r from-slate-800 to-slate-800 p-4 md:p-6">
                  <p className="text-gray-400 pb-2">I've Worked With</p>
                  <p className="text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-purple-400 to-purple-600 pr-2">
                      KEELVAR
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-orange-800 pr-2">
                      SPEEDO
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-yellow-400 to-yellow-500 pr-2">
                      WAER SYSTEMS
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-blue-600 to-red-400 pr-2">
                      BERGHAUS
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-600 to-red-900 pr-2">
                      SIG
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-orange-400 to-red-700 pr-2">
                      ELLESSE
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-green-600 to-emerald-500 pr-2">
                      RIGHTINDEM
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
                    I aim to understand customers needs and pain points on any
                    project in order to create the best design for them
                    possible, and to be able to track success in clear ways. 
                  </p>

                 <p className="pb-4 pt-2"> Whether that's enganging with customers directly by quantitative or qualatitive means, or by working closely with stakeholders, I can gather design requirements and translate them into prototypes at any fidelity ready for feedback and quick iteration.</p>
                </Collapsible>
                <Collapsible
                  trigger="MANAGING 'THE ART OF THE POSSIBLE'"
                  transitionTime="150"
                  tabIndex="2"
                >
               <p className="pb-4 pt-2">I have experience designing and delivering solutions of all sizes, from small features to entre new products from scratch for some of the worlds largest companies.</p>
                  <p className="pb-4">
                  I believe the most effective way to see through a design to smooth release is 
                  to be embedded in both delivery and product teams. This keeps communication strong, allowing for quick reaction to any technical roadblocks and negotiating the 'art of the possible' quickly and effectively.
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
                    into re-usable, accessible UI components.
                  </p>
                  <p className="pb-4">
                    From simple elements like buttons, all the way to whole
                    screens that can be arranged and scaled to any screen size, all whilst enganging with delivery teams to ensure smooth implementation.
                  </p>
                </Collapsible>


                <Collapsible
                  trigger="DESIGN MENTORING"
                  transitionTime="150"
                  tabIndex="3"
                >
                  <p className="pb-4 pt-2">
                    I have proven experience in helping level up junior and mid-level designers to promotion through constructive and honest feedback, and through running upskilling sessions.
                  </p>
                </Collapsible>
              </div>

              <p className="bg-gradient-to-r from-red-900 to-pink-900 rounded-md p-4 md:p-6 mb-4 md:text-2xl text-xl">
                Selected Projects
              </p>
              <LinkBlock
                destination="#"
                a11yText="Navigate to Keelvar"
                title="KEELVAR"
                textColorClasses="from-purple-400 to-purple-600"
                bgColorClasses="bg-gray-800"
                num="01"
                company="KEELVAR"
                skill_1="Case study coming soon"
              />
              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
                num="02"
                company="WAER Systems"
                skill_1="Lead Product Designer"
              />

              <LinkBlock
                destination="/speedo"
                a11yText="Navigate to Speedo"
                title="SPEEDO.COM"
                textColorClasses="from-red-500 to-orange-800"
                bgColorClasses="bg-gray-800 speedo"
                num="03"
                company="Pentland Brands"
                skill_1="Lead UI Designer"
              />

              <LinkBlock
                destination="/rightindem"
                a11yText="Navigate to RightIndem"
                title="RIGHTINDEM : INSURANCE CLAIMS PLATFORM"
                textColorClasses="from-green-500 to-emerald-800"
                bgColorClasses="bg-gray-800 ri"
                num="04"
                company="RightIndem"
                skill_1="UI/UX Design | Front End Development | Branding"
              />

              <LinkBlock
                destination="/berghaus"
                a11yText="Navigate to Berghaus"
                title="BERGHAUS.COM HOMEPAGE"
                textColorClasses="from-blue-600 to-red-400"
                bgColorClasses="bg-gray-800 bh"
                num="05"
                company="Pentland Brands"
                skill_1="UI Design"
              />

              <LinkBlock
                destination="/waerbi"
                a11yText="Navigate to waerb.i"
                title="WAERb.i"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
                num="06"
                company="WAER Systems"
                skill_1="Lead Product Designer"
              />

            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
