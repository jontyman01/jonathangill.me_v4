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
          className="mb-12 md:mb-16 xl:mb-8"
        >
          <Container>
            <m.article variants={fade}>
              <div className="md:flex flex-row pb-4">
                <div className="md:mr-2 rounded-md basis-1/1 md:basis-2/3 bg-gradient-to-r from-green-800 to-blue-900 p-4 md:p-6 mb-4 md:mb-0 flex items-center">
                  <p className="text-3xl">
                    Hi, I'm Jon 👋 I have nearly a decade of experience
                    designing and delivering bespoke, user focussed digital
                    products, grounded in clear rationale.
                  </p>
                </div>

                <div className="md:ml-2 rounded-md basis-1/1 md:basis-1/3 bg-gradient-to-r from-slate-800 to-slate-800 p-4 md:p-6">
                  <p className="text-gray-400 pb-2">I've Worked With</p>
                  <p className="text-4xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-orange-800 pr-2">
                      SPEEDO
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-yellow-400 to-yellow-500 pr-2">
                      WAER SYSTEMS
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-400 to-blue-600 pr-2">
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
                  <p className="pt-2">+ Many More</p>
                </div>
              </div>

              <div className="mb-4 p-4 md:p-6 rounded-md bg-gradient-to-r from-gray-800 to-purple-900">
                <p className="text-gray-400 pb-4">Specializing In</p>
                <Collapsible
                  trigger="UI DESIGN &amp; DESIGN SYSTEMS"
                  transitionTime="150"
                >
                  <p className="pb-4">I create bespoke UI designs and design systems - in other words, I translate any user experience requirements gathered into re-usable UI components.</p>
                  <p className="pb-4"> From simple elements like buttons, all the way to whole screens that can be arranged and scaled to any screen size.</p>
                </Collapsible>

                <Collapsible
                  trigger="REQUIREMENTS GATHERING &amp; WIREFRAMING"
                  transitionTime="150"
                >
                  <p className="pb-4">I aim to understand the user's needs and pain points on any project in order to create the best design for them possible.</p>
                  <p className="pb-4">Whether that's asking directly via workshops, surveys, or observing via site visits and analytics, I can gather these requirements and translate them into wireframes for feedback before the UI phase.</p>
                </Collapsible>

                <Collapsible
                  trigger="FRONTEND DESIGN"
                  transitionTime="150"
                >
                  <p className="pb-4">I've been coding websites for as long as I've been designing. I have proven experience integrating into software teams to build designs and can advise on best UI development practices.</p> 
                  <p className="pb-4">Whatever the context of the project, whether it's React, .NET, has a CMS like wordpress, or anything in-between, I aim to create functional and great looking experiences on any device.</p>
                </Collapsible>
              </div>

              <LinkBlock
                destination="/waerlinx"
                a11yText="Navigate to WAERlinx"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="dark:bg-gray-800 bg-gray-200 wl"
                num="01"
                company="WAER Systems"
                skill_1="Lead Product Designer"
              />

              <LinkBlock
                destination="/speedo"
                a11yText="Navigate to Speedo"
                title="SPEEDO.COM"
                textColorClasses="from-red-500 to-orange-800"
                bgColorClasses="dark:bg-gray-800 bg-gray-200 speedo"
                num="02"
                company="Pentland Brands"
                skill_1="Lead UI Designer"
              />

              <LinkBlock
                destination="/rightindem"
                a11yText="Navigate to RightIndem"
                title="RIGHTINDEM : INSURANCE CLAIMS PLATFORM"
                textColorClasses="from-green-500 to-emerald-800"
                bgColorClasses="dark:bg-gray-800 bg-gray-200 ri"
                num="03"
                company="RightIndem"
                skill_1="UI/UX Design &bull; Front End Development &bull; Branding"
              />

              <LinkBlock
                destination="/berghaus"
                a11yText="Navigate to Berghaus"
                title="BERGHAUS.COM HOMEPAGE"
                textColorClasses="from-red-400 to-blue-600"
                bgColorClasses="dark:bg-gray-800 bg-gray-200"
                num="04"
                company="Pentland Brands"
                skill_1="UI/UX Design"
              />

            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
