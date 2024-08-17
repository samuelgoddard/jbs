import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, revealDelay, revealDelayTop } from '@/helpers/transitions'
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


            {/* <m.header className="absolute top-0 left-0 right-0 flex justify-center z-[100000000]" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
              <div className="flex space-x-1 p-3">
                <Link legacyBehavior href="/work">
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
            </m.header> */}

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
                    <Link legacyBehaviour href="/work"><a className="block underline text-right ml-auto">Back To Gallery</a></Link>
                  </div>
                  { moreWork.length > 2 ? (
                    <>
                      {moreWork.map((e, i) => {
                        return (
                          <Link legacyBehaviour href={`/work/${e.slug.current}`} key={i}>
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