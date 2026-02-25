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
import ModularTextBlock from '@/components/modular-text-block'

const query = `{
  "filmNarrative": *[_type == "filmNarrative"][0]{
    title,
    heroMetaText,
    heroHeading,
    heroText,
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
    bodyHeading,
    bodyText,
    filmsHeading,
    films[] {
      film -> {
        title,
        slug {
          current
        },
        teaserImage {
          asset-> {
            ...,
            caption,
            alt,
            hotspot {
              x,
              y
            }
          },
        }
      },
      image {
        asset-> {
          ...,
          caption,
          alt,
          hotspot {
            x,
            y
          }
        }
      },
      showJBSIconBadge,
      containWidth,
      text,
    },
    logosImage {
      asset-> {
        ...,
        caption,
        alt,
        hotspot {
          x,
          y
        }
      }
    },
    imageGrid[] {
      externalLink,
      asset-> {
        ...,
        externalLink,
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
                      
                      <div className="pt-[80px] md:pt-[12vw] lg:pt-[10vw] pb-[75px] md:pb-[8vw]">
                        {filmNarrative.heroMetaText && (
                        <span className="block leading-none text-xs md:text-xl md:leading-none font-mono mx-auto text-center mb-4 md:mb-5 lg:mb-8">{filmNarrative.heroMetaText}</span>
                        )}
                        {filmNarrative.heroHeading && (
                        <h1 className="text-[13vw] md:text-[8vw] leading-[0.86] md:leading-[0.86] mt-auto w-auto px-3 mx-auto text-center max-w-[80%] mb-6 md:mb-10">
                          {filmNarrative.heroHeading}
                        </h1>
                        )}
                        {filmNarrative.heroText && (
                          <div className="w-11/12 md:w-10/12 mx-auto text-center max-w-[1080px]">
                            <PortableText value={filmNarrative.heroText} />
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4">
                          
                          {filmNarrative.filmsHeading && (
                            <div className="col-span-12">
                              <h2 className="text-[5.5vw] md:text-[3.5vw] leading-[0.86] md:leading-[0.86] text-center mx-auto mb-4 md:mb-6">{filmNarrative.filmsHeading}</h2>
                            </div>
                          )}

                          {filmNarrative.films.map((film, index) => (
                              <div className={`col-span-12 md:col-span-6`} key={index}>
                                <div className={`relative`}>

                                  {/* {film.showJBSIconBadge && (
                                    <div
                                      data-scroll
                                      data-scroll-speed={-0.5}
                                      className={`absolute inset-0 w-full h-full z-[10] px-12 flex ${(index == 0 && film.showJBSIconBadge) && 'justify-start'} ${(index == 1 && film.showJBSIconBadge) && 'justify-end items-end hidden md:flex'} ${(index == 2 && film.showJBSIconBadge) && 'justify-start'} ${(index == 3 && film.showJBSIconBadge) && 'justify-end items-end hidden md:flex'}`}
                                    >
                                      <div className={`w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] max-w-[220px] rounded-full`}>
                                        <img src="/images/badge.webp" alt="JBS Logo Badge" className="w-full" />
                                      </div>
                                    </div>
                                  )} */}

                                  {film.film ? (
                                  <Link scroll={false} href={`/work/${film.film.slug?.current}`}>
                                    <a className="w-full aspect-[9/13] relative overflow-hidden flex flex-wrap flex-col group">
                                      <div className={`grid grid-cols-9 flex-1 h-full relative overflow-hidden`}>
                                        <div className="relative overflow-hidden mb-auto col-span-9 h-full">
                                          <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                                            <ScrollBoundImage amount={5} id="studio" image={film.image || film.film.teaserImage}  />
                                          </m.div>
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                  ) : (
                                    <div className="w-full aspect-[9/13] relative overflow-hidden flex flex-wrap flex-col group">
                                      <div className={`grid grid-cols-9 flex-1 h-full relative overflow-hidden`}>
                                        <div className="relative overflow-hidden mb-auto col-span-9 h-full">
                                          <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                                            <ScrollBoundImage amount={5} id="studio" image={film.image || film.film.teaserImage}  />
                                          </m.div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {film.text && (
                                  <div className={`grid grid-cols-9 mb-12 md:mb-16 px-3 md:px-0 py-3`}>
                                    <div className="col-span-9 md:col-span-9 max-w-[780px] text-center md:px-6 lg:px-12">
                                      <PortableText value={film.text}/>
                                    </div>
                                  </div>
                                )}
                              </div> 
                          ))}
                        </div> 
                      </div>
                    </div>
                  </div>

                  <div className="p-3 mt-[10vw] md:mt-0">
                    <div className="grid grid-cols-9 mb-20 md:mb-[6vw] xl:mb-[8vw] 2xl:mb-[8vw]">
                      <div className="col-span-9 md:col-span-7 col-start-1 md:col-start-2 text-center">

                        {filmNarrative.bodyHeading && (
                        <h2 className="text-[8.5vw] md:text-[7.25vw] leading-[1] md:leading-[0.85] mb-6 md:mb-10">
                            {filmNarrative.bodyHeading}
                          </h2>
                        )}

                        {filmNarrative.bodyText && (
                          <div className="content text-sm md:text-base leading-snug max-w-[900px] mx-auto">
                            <PortableText value={filmNarrative.bodyText} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-9 mb-12 md:mb-20">
                      <div className="col-span-9 md:col-span-7 col-start-1 md:col-start-2 text-center aspect-video relative overflow-hidden lg:mx-16">
                        <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                          <ScrollBoundImage id="laurels" image={filmNarrative.heroImage} />
                        </m.div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-center mx-auto mb-12 md:mb-20 text-xl md:text-2xl lg:text-3xl"><a href="https://www.allelsefollows.studio/" rel="noopener noreferrer" className="underline text-center" target="_blank">See more about Adam and Lucy here</a></h2>

                  {filmNarrative.logosImage && (
                    <Image image={filmNarrative.logosImage} className="w-full mb-6 px-3" />
                  )}

                  <div className="grid grid-cols-12">
                    {filmNarrative.imageGrid?.map((image, index) => (
                      <div className="col-span-6 md:col-span-4 aspect-[16/10] relative overflow-hidden bg-black/10" key={index}>
                        {image.externalLink ? (
                          <a href={image.externalLink} target="_blank" rel="noopener noreferrer" className="w-full h-full object-cover object-center absolute inset-0">
                            <Image image={image} layout="fill" className="w-full h-full object-cover object-center absolute inset-0" />
                          </a>
                        ) : (
                          <Image image={image} layout="fill" className="w-full h-full object-cover object-center absolute inset-0" />
                        )}
                      </div>
                    ))}
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