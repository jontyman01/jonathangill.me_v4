import Image from "next/image";

import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import LinkBlock from "@/components/linkBlock";
import QuoteBlock from "@/components/quoteBlock";
import { FiExternalLink } from 'react-icons/fi';

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

import bhHeader from "../src/img/berghaus-homepage/home2.jpg";
import buttons from '../src/img/berghaus-homepage/buttons.png';
import competitors from '../src/img/berghaus-homepage/competitors.jpg';
import hifiDesktop from '../src/img/berghaus-homepage/hifi-desktop.jpg';
import hifiMobile from '../src/img/berghaus-homepage/hifi-mobile.jpg';
import wireframeDesktop from '../src/img/berghaus-homepage/wireframe-desktop.jpg';
import wireframeMobile from '../src/img/berghaus-homepage/wireframe-mobile.png';
import slideshow from '../src/img/berghaus-homepage/slideshow.jpg';


export default function berghaus() {
  return (
    <Layout>
      <NextSeo title="Berghaus.com Homepage" />

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
                  src={bhHeader}
                  alt="Picture of walkers"
                  className="rounded-md"
                  layout="responsive"
                  placeholder="blur"
                />
              </div>

              <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-8">
                <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4" />

                <div className="md:flex flex-row">
                  <div className="md:pr-2 rounded-md basis-1/1 md:basis-1/4 bg-gradient-to-r mb-4 md:mb-0 font-light">
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-400 inline-block">
                      BERGHAUS.COM HOMEPAGE
                    </h1>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>UI Research - comparing competitors</i>
                    </p>

                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />

                    <p>
                      <i>
                        UI Design - Design built in Figma. Components
                        optimized for desktop and mobile screen sizes.
                      </i>
                    </p>
                    <hr className="h-px border-b border-gray-500 bg-gray-500 mb-4 mt-4" />
                  </div>

                  <div className="md:ml-2 rounded-md basis-1/1 md:basis-3/4 md:p-6">
                    <p className="text-lg font-bold pb-4">
                      One of my first tasks when joining Pentland brands was to redesign the user interface of the Berghaus homepage. The brand was beginning a repositioning with a new campaign named ‘Time to get out’, aiming to target a younger audience that includes ‘Urban explorers’ - 18-30 year olds who live or reside in urban areas, have an interest in outdoor wear fashion, and get involved in outdoor activities.</p>

                    <p className="text-lg pb-4">One of the key aims of the user experience redesign was for customers to find the product category &amp; landing pages more easily. From results on other projects in the Pentland Portfolio we knew that quick links were effective in doing this - tabs for men, women and kids with popular products. Below are wireframes created with the UX team.</p>

                  </div>
                </div>
              </div>

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={wireframeMobile}
                    alt="Wireframe of homepage mobile"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />

                  <Image
                    src={wireframeDesktop}
                    alt="Wireframe of homepage desktop"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">As the brand direction was focused on a younger audience, the UI needed to be updated to reflect this. This meant researching competitors UI.</p>

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={competitors}
                    alt="Picture of bh competitors"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />
                </div>
              </div>


              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">Shown here are the north face and patagonia site homepage. Both use a neutral colour palette for UI components and use white space effectively for spacing between sections. This approach allows the imagery and content to be the focal point. This approach can also be seen on products such as instagram and depop.</p>


              <QuoteBlock
                bgColorClasses="quoteBlockbg--bh"
                quote="As a result of this research, I opted for a cleaner UI that removed the angles, increased the white space between sections and made full width use for imagery, whilst still keeping in line with brand guidelines. I also opted for some titles to be over a dark gradient - an approach that closely ties an image and it’s caption in a contemporary way, and is used extensively on products such as netflix."
              />

              <div className="md:flex flex-row pb-8 justify-center text-center">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={buttons}
                    alt="Picture of bh buttons"
                    className="rounded-md text-center"
                    placeholder="blur"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">As part of the new brand direction, instagram influencers specialising in beautiful outdoor imagery were commissioned to photograph burghaus products in the northern English countryside. To showcase this I designed a carousel that could show the images in full width view, with an added feature that showcases the products in the image with links to the products description page.</p>

              <Image
                src={slideshow}
                alt="Picture of bh homepage slideshow component"
                className="rounded-md w-full"
                placeholder="blur"
                layout="responsive"
              />

              <p className="bg-gray-800 rounded-md p-4 md:p-6 mb-2 mt-4 text-lg">Comparing the implemented design change to the same time 9 weeks after Launch:</p>
              
              <div className="md:flex flex-row pb-8 bg-gray-800 rounded-md p-4 md:p-6 mb-10 text-lg">
                <div className="md:basis-1/2 md:pr-1">
                  <p style={{ marginBottom: '0' }}><b>Homepage Bounce Rate</b></p>
                  <h2>-29%</h2>
                </div>

                <div className=" md:basis-1/2 md:pl-1">
                  <p style={{ marginBottom: '0' }}><b>Session Duration</b></p>
                  <h2>+11%</h2>
                </div>

                <div className="md:basis-1/2 md:pr-1">
                  <p style={{ marginBottom: '0' }}><b>Conversion Rate</b></p>
                  <h2>+18%</h2>
                </div>

                <div className=" md:basis-1/2 md:pl-1">
                  <p style={{ marginBottom: '0' }}><b>Sessions</b></p>
                  <h2>+32%</h2>
                </div>
              </div>

              <Image
                src={hifiDesktop}
                alt="Picture of Hi-Fi Design Desktop"
                className="rounded-md"
                placeholder="blur"
                layout="responsive"
              />

              <div className="md:flex flex-row pb-8 justify-center text-center pt-2">
                <div className="md:basis-1/2 md:pr-1">
                  <Image
                    src={hifiMobile}
                    alt="Picture of Hi-Fi Design Mobile"
                    className="rounded-md"
                    placeholder="blur"
                  />
                </div>
              </div>

              <p className="bg-gray-800 rounded-md p-4 md:p-6 my-8 italic">This work was created at &amp; is property of Pentland Brands.</p>

              <LinkBlock
                destination="/waerbi"
                a11yText="Navigate to WAERb.i"
                title="WAERb.i"
                textColorClasses="from-yellow-500 to-yellow-800"
                bgColorClasses="bg-gray-800 wl"
                num="Next Project"
                company="WAERb.i"
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
