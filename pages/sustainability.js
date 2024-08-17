import { Fragment, useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade, scaleDelay, reveal, fadeDelay, revealDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import ScrollBoundImage from '@/components/scroll-bound-image'
import { IntroContext } from '@/context/intro'

const query = `{
  "sustainability": *[_type == "sustainability"][0]{
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
    content,
    commitments[] {
      title,
      text,
      image {
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
  const { data: { sustainability, contact } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title={sustainability.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Loader /> */}

          <m.div variants={fade}>

              <Header />
              
              <main className="">
                <div className="">
                  <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                    <div className="col-span-9">
                      {/* <div className="absolute top-0 left-0 grid grid-cols-9 z-10">
                        <div className="col-span-9 md:col-span-3 xl:col-span-2 bg-white pt-[20vw] p-3">
                          <div className="w-full leading-tight md:pr-[20px]">
                            <m.div variants={fadeDelay}>
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.heroText} />
                            </m.div>
                          </div>
                        </div>
                      </div> */}
                      
                      <div className="pt-[80px] md:pt-[12vw] lg:pt-[10vw] pb-[50px] md:pb-[6vw]">
                        <span className="block leading-none text-xs md:text-xl md:leading-none font-mono mx-auto text-center mb-4 md:mb-5 lg:mb-8">Striving for a healthier environment</span>
                        <h1 className="text-[11.5vw] md:text-[11vw] leading-[0.86] md:leading-[0.86] mt-auto w-auto px-3 mx-auto text-center max-w-[80%]">
                          Sustainability at JBS
                        </h1>
                      </div>
                      

                      <div className="w-full h-[80vw] md:h-[75vw] xl:h-[66vw] max-h-[1300px] relative overflow-hidden flex flex-wrap flex-col">
                        <div className="grid grid-cols-9 flex-1 h-full relative overflow-hidden pt-[38px] md:pt-[100px]">
                          <div data-scroll data-scroll-speed={-0.5} className={`absolute top-0 left-0 w-full h-full z-[10] md:mt-[45px] ml-[10vw]`}>
                            <div className={`w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] max-w-[280px] rounded-full`}>
                              <img src="/images/badge.webp" alt="JBS Logo Badge" className="w-full" />
                            </div>
                          </div>
                          <div className="relative overflow-hidden mb-auto col-span-9 h-full">
                            <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                              <ScrollBoundImage id="studio" image={sustainability.heroImage} />
                            </m.div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h2 className="text-[10vw] md:text-[7.5vw] leading-[0.85] md:leading-[0.85] md:hidden">
                          <span className="block text-left">JBS is fully committed to doing our part for the planet</span>
                        </h2>

                        <h2 className="text-[7.4vw] md:text-[7.25vw] leading-[1] md:leading-[0.85] hidden md:block">
                          <span className="block text-right">JBS Is Fully</span>
                          <span className="block text-left">Committed to doing our part</span>
                          <span className="block text-left">To help the planet</span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 mt-[10vw] md:mt-0">
                    <div className="grid grid-cols-9 mb-20 md:mb-[10vw] xl:mb-[13vw] 2xl:mb-[13vw]">
                      <div className="col-span-8 md:col-span-3 col-start-1 md:col-start-5 leading-snug max-w-[550px]">
                        <div className="content text-sm md:text-base">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={sustainability.content} />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-9 gap-3 gap-y-12 md:gap-x-3 md:gap-y-20 xl:gap-y-24 mb-12 md:mb-0">
                      {sustainability.commitments?.map((e, i) =>
                        i == 2 ? (
                          <Fragment key={i}>
                            <div className="hidden md:block col-span-9 md:col-span-3 xl:col-span-3">
                            </div>
                            <div className="col-span-9 md:col-span-2 xl:col-span-2">
                              <div className="mb-3 relative overflow-hidden h-[120vw] md:h-[30vw]">
                                <div className={`z-10 transition-all ease-in-out duration-1000 absolute inset-0 h-full object-cover object-center`}>
                                    <Image
                                      image={e.image}
                                      focalPoint={e.image.hotspot}
                                      widthOverride={900}
                                      className="w-full"
                                      noCaption
                                      layout="fill"
                                    />
                                  </div>
                                </div>
                                <span className="block leading-none text-xs md:leading-none mt-[15px] mb-[5px] md:mb-[8px]">Commitment {i+1}</span>
                                <span className="block leading-[1.1] text-lg md:text-lg md:leading-none mb-[18px] md:mb-[20px]">{e.title}</span>
                                <span className="block text-[11px] leading-[1.2]">{e.text}</span>
                            </div>  
                          </Fragment>
                        ) : (
                          <Fragment key={i}>
                            { i == 4 && (
                              <div className="hidden md:block col-span-9 md:col-span-2 xl:col-span-2">
                              </div>
                            )}
                            { i == 5 && (
                              <div className="hidden md:block col-span-9 md:col-span-1 xl:col-span-1">
                              </div>
                            )}
                            <div className={`col-span-9 md:col-span-2 xl:col-span-2`}>
                              <div className="mb-3 relative overflow-hidden h-[120vw] md:h-[30vw]">
                                <div className="w-full absolute inset-0 h-full object-cover object-center overflow-hidden" data-scroll >
                                  <div className={`z-10 transition-all ease-in-out duration-1000 absolute inset-0 h-full object-cover object-center`}>
                                    <Image
                                      image={e.image}
                                      focalPoint={e.image.hotspot}
                                      widthOverride={900}
                                      className="w-full"
                                      noCaption
                                      layout="fill"
                                    />
                                  </div>
                                </div>
                                
                              </div>

                              
                              <span className="block leading-none text-xs md:leading-none mt-[15px] mb-[5px] md:mb-[8px]">Commitment {i+1}</span>
                              <span className="block leading-[1.1] text-lg md:text-lg md:leading-none mb-[18px] md:mb-[20px]">{e.title}</span>
                              <span className="block text-[11px] leading-[1.2]">{e.text}</span>
                            </div>  
                          </Fragment>
                        )
                      )}
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