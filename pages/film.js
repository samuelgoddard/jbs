import { Fragment, useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, scaleDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import ScrollBoundImage from '@/components/scroll-bound-image'
import { IntroContext } from '@/context/intro'
import {PortableText} from '@portabletext/react'
import Link from 'next/link'

const query = `{
  "filmNarrative": *[_type == "filmNarrative"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    films[]-> {
      title,
      slug {
        current
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        }
      }
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email,
    socials[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Sustainability(initialData) {
  const { data: { filmNarrative, contact } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title={filmNarrative.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Loader /> */}

          <m.div variants={fade}>
              
              <main className="">
                <div className="">
                  <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                    <div className="col-span-9">
                      
                      <div className="pt-[80px] md:pt-[12vw] lg:pt-[10vw] pb-[50px] md:pb-[6vw]">
                        <span className="block leading-none text-xs md:text-xl md:leading-none font-mono mx-auto text-center mb-4 md:mb-5 lg:mb-8">Film + Narrative</span>
                        <h1 className="text-[10vw] md:text-[8vw] leading-[0.86] md:leading-[0.86] mt-auto w-auto px-3 mx-auto text-center max-w-[80%] mb-6 md:mb-10">
                        Boutique Creative + Premium Production
                        </h1>

                        <p className="w-11/12 md:w-10/12 mx-auto text-center max-w-[1080px]">Cinematic brand storytelling with the same specialist craft and efficiency that&apos;s at the heart of our vibrant photography. We develop concepts, write scripts, and produce everything in-house. Brand films, commercials, social content - anywhere a good story can be told. One tight-knit team from brief to delivery.</p>
                      </div>


                      {filmNarrative.films.map((film, index) => (
                        <div key={index}>
                          <Link scroll={false} href={`/work/${film.slug?.current}`}>
                            <a className="w-full h-[80vw] md:h-[75vw] xl:h-[66vw] max-h-[1300px] relative overflow-hidden flex flex-wrap flex-col group">
                              <div className={`grid grid-cols-9 flex-1 h-full relative overflow-hidden ${index == 0 && 'pt-[38px] md:pt-[100px]'} ${index == 1 && 'pb-[38px] md:pb-[100px]'} ${index == 2 && 'pt-[38px] md:pt-[100px]'} ${index == 3 && 'pb-[38px] md:pb-[100px]'}`}>
                                <div
                                  data-scroll
                                  data-scroll-speed={-0.5}
                                  className={`absolute inset-0 w-full h-full z-[10] flex px-12 ${index == 0 && 'justify-start'} ${index == 1 && 'justify-end items-end'}`}
                                >
                                  <div className={`w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] max-w-[220px] rounded-full`}>
                                    <img src="/images/badge.webp" alt="JBS Logo Badge" className="w-full" />
                                  </div>
                                </div>
                                <div className="relative overflow-hidden mb-auto col-span-9 h-full">
                                  <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                                    <ScrollBoundImage id="studio" image={film.teaserImage}  />
                                  </m.div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 mt-[10vw] md:mt-0">
                    <div className="grid grid-cols-9 mb-20 md:mb-[10vw] xl:mb-[13vw] 2xl:mb-[13vw]">
                      <div className="col-span-9 md:col-span-7 col-start-1 md:col-start-2 text-center">

                        <h2 className="text-[8.5vw] md:text-[7.25vw] leading-[1] md:leading-[0.85] mb-6 md:mb-10">
                          It's a family thing
                        </h2>
                        
                        <div className="content text-sm md:text-base leading-snug max-w-[900px] mx-auto">
                          <p>Our film team is led by JBS founder Jason Bailey alongside Adam Bailey and Lucy Mastrullo — yes, literally Jason's brother and sister-in-law. Adam and Lucy are a married writing and filmmaking duo based between London and Los Angeles. Together, they bring over 35 years of specialised experience creating award-winning campaigns for global brands, like PepsiCo, Squarespace, Penguin Books, Warner Brothers, Twitter (X), the Los Angeles Times, the Grammys, Nissan, Grey Goose, and Dickies Workwear. See their film and brand work (HERE).</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-9">
                      <div className="col-span-9 md:col-span-7 col-start-1 md:col-start-2 text-center aspect-video relative overflow-hidden lg:mx-16">
                        <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                          <ScrollBoundImage id="laurels" image={filmNarrative.heroImage} />
                        </m.div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}