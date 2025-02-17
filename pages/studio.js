import { Fragment, useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade, scaleDelay, reveal, fadeDelay, revealDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import HashGrid from '@/components/hash-grid'
import FadeInWhenVisible from '@/components/fade-in-when-visible'
// import Loader from '@/components/loader'
import ScrollBoundImage from '@/components/scroll-bound-image'
import ScrollBoundStack from '@/components/scroll-bound-stack'
import StudioTitle from '@/components/studio-title'
import { IntroContext } from '@/context/intro'
import ScrollBoundFlicker from '@/components/scroll-bound-flicker'
import {PortableText} from '@portabletext/react'
import BodyRenderer from '@/components/body-renderer'
import { NewsletterContentContext } from '@/context/newsletter-content'

const query = `{
  "studio": *[_type == "studio"][0]{
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
    pulloutText,
    content,
    clientList,
    servicesList,
    contentSupportingImages[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      }
    },
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
    teamMembers[] {
      name,
      jobTitle,
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
  "menu": *[_type == "menu"][0] {
    newsletterHeading,
    newsletterText,
    newsletterImage {
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
  "contact": *[_type == "contact"][0]{
    email,
    socials[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Studio(initialData) {
  const { data: { studio, contact, menu } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [newsletterContentContext, setNewsletterContentContext] = useContext(NewsletterContentContext);

  useEffect(() => {
    setNewsletterContentContext({
      heading: menu.newsletterHeading,
      text: menu.newsletterText,
      image: menu.newsletterImage
    })
  },[]);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title={studio.seo?.metaTitle ? studio.seo?.metaTitle : studio.title}
        description={studio.seo?.metaDesc ? studio.seo?.metaDesc : null}
        openGraph={{
          title: studio.seo?.metaTitle ? studio.seo?.metaTitle : studio.title,
          description: studio.seo?.metaDesc ? studio.seo?.metaDesc : null,
          images: studio.seo?.shareGraphic?.asset ? [
            {
              url: studio.seo?.shareGraphic?.asset.url ? studio.seo?.shareGraphic?.asset.url : null,
              width: studio.seo?.shareGraphic?.asset.metadata.dimensions.width ? studio.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: studio.seo?.shareGraphic?.asset.metadata.dimensions.height ? studio.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
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
              
              <main className="">
                <div className="">
                  <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                    <div className="col-span-9">
                      
                      <div className="w-full h-[60vh] md:h-screen relative overflow-hidden flex flex-wrap flex-col">
                        <div className="grid grid-cols-9 flex-1 h-full">
                          <div className="relative overflow-hidden mb-auto col-span-9 h-full">
                            <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                              <ScrollBoundImage id="studio" image={studio.heroImage} />
                            </m.div>
                          </div>
                        </div>
                        
                        <StudioTitle id="studio-title" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 mt-[25vw] md:mt-0">
                    <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                      <div className="hidden md:block col-span-2 relative  h-[28.5vw]">
                        <ScrollBoundFlicker
                          images={studio.contentSupportingImages}
                          id="supporting-image"
                        />
                      </div>
                      
                      <div className="col-span-8 md:col-span-3 col-start-1 md:col-start-5 leading-snug max-w-[550px]">
                        <div className="content text-sm md:text-base">
                          <PortableText value={studio.content}/>
                        </div>
                      </div>
                    </div>

                    {studio.pulloutText && (
                      <>
                        <h2 className="text-[11.4vw] md:text-[7.5vw] leading-[0.85] md:leading-[0.85] mb-8 md:mb-16 xl:mb-20 md:hidden">
                          <span className="block">{studio.pulloutText}</span>
                        </h2>
                        <h2 className="text-[7.4vw] md:text-[7.5vw] leading-[1] md:leading-[0.85] mb-8 md:mb-16 xl:mb-20 hidden md:block text-left first-line:text-right first-line:ml-auto">
                          {studio.pulloutText}
                        </h2>
                      </>
                    )}

                    {/* <div className="grid grid-cols-9 gap-3 gap-y-12 md:gap-x-3 md:gap-y-20 xl:gap-y-24 mb-12 md:mb-28 xl:mb-32 2xl:mb-48">
                      {studio.teamMembers.map((e, i) =>
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
                                <span className="block leading-none text-2xl md:text-2xl md:leading-none font-sans mt-[-3px] mb-[3px] md:mb-[5px]">{e.name}</span>
                                <span className="block text-xs leading-none">{e.jobTitle}</span>
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

                              
                              <span className="block leading-none text-2xl md:text-2xl md:leading-none font-sans mt-[-3px] mb-[3px] md:mb-[5px]">{e.name}</span>
                              <span className="block text-xs leading-none">{e.jobTitle}</span>
                            </div>  
                          </Fragment>
                        )
                      )}
                    </div> */}

                    <BodyRenderer body={studio.contentBlocks} />


                    <div className="grid grid-cols-9 gap-3 mt-[20vw] md:mt-0">
                      <div className="col-span-9 md:col-span-1 mb-5 md:mb-0">
                        <span className="block leading-none mb-1 text-sm md:text-base">Clients &amp; <span className="block">Info</span></span>
                      </div>
                      
                      <div className="col-span-9 md:col-span-2 md:col-start-3 mb-6 md:mb-0 text-sm md:text-base">
                        {studio.clientList.map((e, i) => {
                          return (
                            <span className="block leading-none mb-1" key={i}>{e}</span>
                          )
                        })}
                      </div>

                      <div className="col-span-9 md:col-span-2 md:col-start-5 mb-6 md:mb-0 text-sm md:text-base">
                        {studio.servicesList.map((e, i) => {
                          return (
                            <span className="block leading-none mb-1" key={i}>{e}</span>
                          )
                        })}
                      </div>

                      <div className="col-span-9 md:col-span-2 md:col-start-8 text-sm md:text-base">
                        { contact.email && (<a href={`mailto:${contact.email}`} className="block leading-none mb-1 group relative overflow-hidden underline"><span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Email</span>
                              <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full underline group-hover:translate-y-0">Email</span></a>)}

                        {contact.socials.map((e, i) => {
                          return (
                            <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="block leading-none mb-1 underline group relative overflow-hidden">
                              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.title}</span>
                              <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full underline group-hover:translate-y-0">{e.title}</span>
                            </a>
                          )
                        })}
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