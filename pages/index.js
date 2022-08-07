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
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.article variants={fade}>
              <div className="md:flex flex-row pb-4">
                <div className="md:mr-2 rounded-md basis-1/1 md:basis-2/3 bg-gradient-to-r from-green-800 to-blue-900 p-6 mb-4 md:mb-0 flex items-center">
                  <p className="text-3xl">
                    With nearly a decade of experience, I aim to deliver
                    customer centred digital designs tailored to their needs,
                    and backed up by clear rationale.
                  </p>
                </div>
                <div className="md:ml-2 rounded-md basis-1/1 md:basis-1/3 bg-gradient-to-r from-slate-800 to-slate-800 p-6">
                <p className="text-gray-400 pb-2">I've Worked With</p>
                <p className="text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-500 to-red-900 pr-2">SPEEDO</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-yellow-400 to-yellow-500 pr-2">WAER SYSTEMS</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-400 to-blue-600 pr-2">BERGHAUS</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-red-600 to-red-900 pr-2">SIG</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-orange-400 to-red-700 pr-2">ELLESSE</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block from-green-600 to-emerald-500 pr-2">RIGHTINDEM</span>
                </p>
                <p className="pt-2">+ Many More</p>
                </div>
              </div>

              <div className="mb-4 p-4 rounded-md bg-gradient-to-r from-gray-800 to-purple-900">
              <p className="text-gray-400 pb-2">Specializing In</p>
                <Collapsible trigger="UI DESIGN &amp; DESIGN SYSTEMS" transitionTime="150" >
                <p className="pb-4">
                    Stuff about design systems
                  </p>
                </Collapsible>

                <Collapsible trigger="REQUIREMENTS GATHERING &amp; WIREFRAMING" transitionTime="150">
                  <p className="pb-4">
                    Stuff about design systems
                  </p>
                </Collapsible>

                <Collapsible trigger="BESPOKE HTML &amp; CSS" transitionTime="150">
                <p className="pb-4">
                    Stuff about design systems
                  </p>
                </Collapsible>
              </div>


              <LinkBlock
                destination="/waer-systems"
                a11yText="Navigate to WAER Systems"
                title="WAERLINX"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="dark:bg-gray-800 bg-gray-200"
                num="01"
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
