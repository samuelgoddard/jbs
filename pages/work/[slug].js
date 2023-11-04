import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, revealDelay, revealDelayTop } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import Link from 'next/link'
import Carousel from '@/components/carousel'
import BodyRenderer from '@/components/body-renderer'
import { IntroContext } from '@/context/intro'

const query = `*[_type == "work" && slug.current == $slug][0]{
  title,
  orderRank,
  content,
  heroCarouselImages[] {
    asset-> {
      ...
    },
    alt,
    caption
  },
  year,
  location,
  type,
  campaignTitle,
  contentBlocks[] {
    ...,
    image {
      asset-> {
        ...
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      alt,
      caption
    },
    image1 {
      asset-> {
        ...
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      alt,
      caption
    },
    image2 {
      asset-> {
        ...
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      alt,
      caption
    },
    images[] {
      asset-> {
        ...
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      alt,
      caption
    },
    items[] {
      ...,
      image {
        asset-> {
          ...
        },
        overrideVideo {
          asset-> {
            ...
          }
        },
        alt,
        caption
      },
    }
  },
  tags,
  credits[] {
    job,
    name
  },
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  slug {
    current
  },
  "moreWork": *[_type == "work" && slug.current != $slug && orderRank > ^.orderRank] | order(orderRank asc)[0..2] {
    title,
    campaignTitle,
    teaserImage {
      asset-> {
        ...,
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    }
  },
  "moreWorkLoop": *[_type == "work" && slug.current != $slug] | order(orderRank asc)[0..2] {
    title,
    campaignTitle,
    teaserImage {
      asset-> {
        ...,
      },
      overrideVideo {
        asset-> {
          ...
        }
      },
      overrideVimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
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

export default function WorkSlug(initialData) {
  const { data: { title, heroCarouselImages, moreWork, moreWorkLoop, location, year, campaignTitle, tags, credits, contact, contentBlocks, type, seo }  } = pageService.getPreviewHook(initialData)()

  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title={seo?.metaTitle ? seo?.metaTitle : title}
        description={seo?.metaDesc ? seo?.metaDesc : null}
        openGraph={{
          title: seo?.metaTitle ? seo?.metaTitle : title,
          description: seo?.metaDesc ? seo?.metaDesc : null,
          images: seo?.shareGraphic?.asset || heroCarouselImages[0] ? [
            {
              url: seo?.shareGraphic?.asset.url ? seo?.shareGraphic?.asset.url : heroCarouselImages[0].asset.url,
              width: seo?.shareGraphic?.asset.metadata.dimensions.width ? seo?.shareGraphic?.asset.metadata.dimensions.width : heroCarouselImages[0].asset.metadata.dimensions.width,
              height: seo?.shareGraphic?.asset.metadata.dimensions.height ? seo?.shareGraphic?.asset.metadata.dimensions.height : heroCarouselImages[0].asset.metadata.dimensions.height,
              type: 'image/jpeg',
            }
          ] : null
        }}
      />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Loader /> */}
          <m.div variants={fade}>
          <LocomotiveScrollProvider
            options={{ smooth: true, lerp: 0.1 }}
            containerRef={containerRef}
            watch={[]}
          >
            <div data-scroll-container ref={containerRef} id="scroll-container">
              <div data-scroll-section>

                <div className="p-3 self-start absolute top-0 left-0 z-[1001]" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
                  <Link href="/">
                    <a className={`mb-1 md:mb-0 block w-[60px] overflow-hidden text-black relative z-[400]`}>
                      <m.div variants={revealDelayTop}>
                        <svg className="w-full" viewBox="0 0 111 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.9088 52.2402C27.7683 52.2402 33.8176 45.9723 33.8176 34.0924V0H23.4682V34.8212C23.4682 39.9959 21.5733 42.9112 16.9088 42.9112C12.3172 42.9112 10.3493 40.4332 10.3493 34.4568H0C0 46.3367 6.3408 52.2402 16.9088 52.2402Z" fill="currentColor"/>
                          <path d="M36.9389 51.1366H53.3375C61.5733 51.1366 69.4446 45.7433 69.4446 35.6126C69.4446 29.3447 66.8208 24.8988 62.1563 22.7852V22.4937C64.7801 21.036 67.5496 17.8292 67.5496 12.6545C67.5496 4.3459 62.0106 0 52.9731 0H36.9389V51.1366ZM47.2882 18.6309V9.15616H52.6087C55.2325 9.15616 57.2003 10.4681 57.2003 13.8935C57.2003 17.4648 55.2325 18.6309 52.6087 18.6309H47.2882ZM47.2882 42.0992V27.0853H52.4629C56.4715 27.0853 59.0952 29.4904 59.0952 34.5922C59.0952 39.694 56.4715 42.0992 52.4629 42.0992H47.2882Z" fill="currentColor"/>
                          <path d="M87.1158 51.5439C96.9549 51.5439 102.786 45.1334 102.786 36.679C102.786 28.8077 98.777 25.7279 89.5209 21.5735C83.0343 18.6582 81.5038 16.9819 81.5038 13.4836C81.5038 10.4225 83.7632 8.45465 87.0429 8.45465C90.9786 8.45465 92.7277 10.714 92.7277 13.9209H102.421C102.348 5.75799 97.3922 0.000251422 87.0429 0.000251422C78.5885 0.000251422 71.8833 4.30033 71.8833 13.7751C71.8833 20.6261 76.7664 25.0178 83.9089 28.1517C90.4684 30.9942 93.165 32.962 93.165 36.679C93.165 40.5418 90.4684 42.3639 87.1158 42.3639C82.597 42.3639 80.6292 39.3028 80.2648 35.1485H70.7172C71.3002 45.6436 77.3495 51.5439 87.1158 51.5439Z" fill="currentColor"/>
                          <path d="M106.826 0C104.505 0 102.642 1.70285 102.642 4.19591C102.642 6.66671 104.505 8.35843 106.826 8.35843C109.136 8.35843 111 6.66671 111 4.19591C111 1.70285 109.136 0 106.826 0ZM106.826 7.59048C104.952 7.59048 103.501 6.21039 103.501 4.19591C103.501 2.14804 104.952 0.779082 106.826 0.779082C108.735 0.779082 110.152 2.14804 110.152 4.19591C110.152 6.21039 108.735 7.59048 106.826 7.59048ZM107.931 4.79692C107.775 5.40905 107.317 5.63165 106.815 5.63165C106.157 5.63165 105.677 5.11968 105.677 4.10687C105.677 3.1052 106.168 2.61549 106.815 2.61549C107.362 2.61549 107.775 2.96051 107.909 3.56152L108.835 3.30553C108.623 2.45967 107.92 1.82528 106.849 1.82528C105.521 1.82528 104.673 2.70453 104.673 4.10687C104.673 5.52035 105.443 6.42186 106.815 6.42186C107.92 6.42186 108.623 5.79859 108.869 5.03064L107.931 4.79692Z" fill="currentColor"/>
                        </svg>
                      </m.div>
                    </a>
                  </Link>
                </div>

                <m.header className="flex justify-center z-[1000] relative" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
                  <div className="flex space-x-1 p-3">
                    <Link href="/work">
                      <a className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase relative overflow-hidden block group">
                        <m.span variants={revealDelayTop} className="block">
                          <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms] opacity-20">Work</span>
                          <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">Work</span>
                        </m.span>
                      </a>
                    </Link>
                    <span className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase opacity-20 block relative overflow-hidden">
                      <m.span variants={revealDelayTop} className="block">/</m.span>
                    </span>
                    <span className="text-lg md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase block relative overflow-hidden">
                      <m.span variants={revealDelayTop} className="block">{title}</m.span>
                    </span>
                  </div>
                </m.header>

                <m.main className=" mb-16 md:mb-24 xl:mb-32">
                  <article>
                    <div className="flex items-start my-[10vh] p-3">
                      <div className="w-1/2 text-left">
                        <div className="mb-8">
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1 relative overflow-hidden">
                            <m.span variants={revealDelayTop} className="block">JBS.02</m.span>
                          </span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1 relative overflow-hidden">
                            <m.span variants={revealDelayTop} className="block">{title}</m.span>
                          </span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1 relative overflow-hidden">
                            <m.span variants={revealDelayTop} className="block">{campaignTitle}</m.span>
                          </span>
                          <span className="text-sm md:text-base block leading-none md:leading-none mb-1 relative overflow-hidden">
                            <m.span variants={revealDelayTop} className="block">{year}</m.span>
                          </span>
                        </div>
                        { tags && (
                          <div className="mb-8">
                            {tags.map((e, i) => {
                              return (
                                <span key={i} className="text-sm md:text-base block leading-none md:leading-none mb-1 relative overflow-hidden">
                                  <m.span variants={revealDelayTop} className="block">{e}</m.span>
                                </span>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    <h1 className="text-[14vw] md:text-[13vw] xl:text-[12vw] ml-[0vw] leading-[0.88] md:leading-[0.9] xl:leading-[0.9] relative overflow-hidden block mb-0 md:mb-0 px-3 md:px-0">
                      <m.span variants={revealDelay} className="block">{title}</m.span>
                    </h1>
                    <div className="flex items-end mb-1 md:mb-3 px-3">
                    
                      <h2 className="block text-2xl md:text-3xl xl:text-4xl leading-1 md:leading-1 xl:leading-[1.2] 2xl:leading-[1.2] font-sans uppercase relative overflow-hidden">
                        <m.span variants={revealDelay} className="block">{campaignTitle}</m.span>
                      </h2>
                    </div>

                    {/* <div className="mb-4">
                      <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
                    </div> */}

                    { heroCarouselImages.length > 1 ? (
                      <div className="mb-[12vw]">
                        <Carousel slides={heroCarouselImages} id="hero-carousel" />
                      </div>
                    ) : (
                      <div className="mb-[12vw]">
                        <div className={`embla`}>
                          <div className="embla__viewport">
                            <div className="embla__container">
                              <div className="embla__slide" >
                                <div className="embla__slide__inner">
                                  <div className="absolute inset-0">
                                    <Image
                                      image={heroCarouselImages[0]}
                                      layout="fill"
                                      widthOverride={1920}
                                      className="w-full"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <BodyRenderer body={contentBlocks} />
                    
                    <div className="flex flex-wrap p-3 mb-[35vw] md:mb-[15vh] mt-[12vw] md:mt-0">
                      { credits && (
                        <div className="w-full md:w-6/12 mb-5 md:mb-0">
                          <h2 className="block text-4xl md:text-3xl xl:text-4xl leading-[1] md:leading-[1] xl:leading-[1] 2xl:leading-[1] font-sans uppercase relative overflow-hidden">
                            <m.span variants={revealDelay} className="block">Credits</m.span>
                          </h2>
                        </div>
                      )}
                      <div className="flex-1 md:max-w-[430px] md:ml-auto">
                        { credits && (
                          <>
                            {credits.map((e, i) => {
                              return (
                                <div className="mb-[7px] flex flex-wrap" key={i}>
                                  <span className="text-sm md:text-sm block leading-none md:leading-none mb-1 relative overflow-hidden flex-1">
                                    <m.span variants={revealDelayTop} className="block">{e.job}</m.span>
                                  </span>
                                  <span className="text-sm md:text-sm block leading-none md:leading-none mb-1 relative overflow-hidden mr-auto text-right">
                                    <m.span variants={revealDelayTop} className="block">{e.name}</m.span>
                                  </span>
                                </div>
                              )
                            })}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex border-b border-black pb-3 text-sm md:text-base">
                        <span className="block">More Work</span>
                        <Link href="/work"><a className="block underline text-right ml-auto">Back To Gallery</a></Link>
                      </div>
                      { moreWork.length > 2 ? (
                        <>
                          {moreWork.map((e, i) => {
                            return (
                              <Link href={`/work/${e.slug.current}`} key={i}>
                                <a className={`flex items-center w-full border-b border-black py-3 group overflow-hidden relative ${i == 1 ? 'md:text-right md:justify-end' : '' }`}>
                                  <div className={`w-[30%] max-w-[330px] md:w-[16.5%] md:max-w-[230px] min-h-[18vw] md:min-h-[9vw] xl:min-h-[8.4vw] bg-gray-100 relative overflow-hidden ${ i == 1 ? 'md:order-2' : 'order-1' }`}>
                                    <Image
                                      image={e.teaserImage}
                                      className="w-full"
                                      widthOverride={750}
                                      alt={e.title}
                                      layout="fill"
                                    />
                                  </div>
                                  <div className={`px-3 md:px-4 xl:px-5 ${ i == 1 ? 'order-1 md:order-1' : 'order-1 md:order-2' }`}>
                                    <h2 className={`block text-[7.6vw] md:text-[5.75vw] leading-[1.125] md:leading-[1.125] mb-1 md:mb-2 relative overflow-hidden -mt-2`}>
                                      <span className="block md:group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.title}</span>
                                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full md:group-hover:translate-y-0 text-orange">{e.title}</span>
                                    </h2>
                                    <span className="block text-base md:text-2xl xl:text-3xl leading-[1] md:leading-[1] xl:leading-[1] 2xl:leading-[1] font-sans uppercase relative overflow-hidden -mt-1 md:-mt-3">
                                      <span className="block md:group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.campaignTitle}</span>
                                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full md:group-hover:translate-y-0 text-orange">{e.campaignTitle}</span>
                                    </span>
                                  </div>
                                </a>
                              </Link>
                            )
                          })}
                        </>
                      ) : (
                        <>
                          {moreWorkLoop.map((e, i) => {
                            return (
                              <Link href={`/work/${e.slug.current}`} key={i}>
                                <a className={`flex items-center w-full border-b border-black py-3 group ${i == 1 ? 'md:text-right md:justify-end' : '' }`}>
                                  <div className={`w-[25%] max-w-[330px] md:w-[16.5%] md:max-w-[230px] min-h-[14vw] md:min-h-[9vw] xl:min-h-[8.4vw] bg-gray-100 relative overflow-hidden ${ i == 1 ? 'md:order-2' : 'md:order-1' }`}>
                                    <Image
                                      image={e.teaserImage}
                                      className="w-full"
                                      widthOverride={750}
                                      alt={e.title}
                                      layout="fill"
                                    />
                                  </div>
                                  <div className={`px-3 md:px-4 xl:px-5 ${ i == 1 ? 'md:order-1' : 'md:order-2' }`}>
                                  <h2 className={`block text-[7.6vw] md:text-[5.75vw] leading-[1.125] md:leading-[1.125] mb-1 md:mb-2 relative overflow-hidden -mt-2`}>
                                      <span className="block md:group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.title}</span>
                                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full md:group-hover:translate-y-0 text-orange">{e.title}</span>
                                    </h2>
                                    <span className="block text-base md:text-2xl xl:text-3xl leading-[1] md:leading-[1] xl:leading-[1] 2xl:leading-[1] font-sans uppercase relative overflow-hidden -mt-1 md:-mt-3">
                                      <span className="block md:group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.campaignTitle}</span>
                                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full md:group-hover:translate-y-0 text-orange">{e.campaignTitle}</span>
                                    </span>
                                  </div>
                                </a>
                              </Link>
                            )
                          })}
                        </>
                      )}
                    </div>
                  </article>
                </m.main>
                
                <m.div className="p-3">
                  <Footer contact={contact} />
                </m.div>
              </div>
            </div>
          </LocomotiveScrollProvider>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}