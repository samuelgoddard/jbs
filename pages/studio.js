import { Fragment, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade, scaleDelay, reveal, fadeDelay, revealDelay } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import HashGrid from '@/components/hash-grid'
import FadeInWhenVisible from '@/components/fade-in-when-visible'
// import Loader from '@/components/loader'
import { SplitText } from '@cyriacbr/react-split-text'
import ScrollBoundImage from '@/components/scroll-bound-image'
import ScrollBoundStack from '@/components/scroll-bound-stack'
import StudioTitle from '@/components/studio-title'

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
    heroText,
    content,
    clientList,
    servicesList,
    contentSupportingImage {
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
  const { data: { studio, contact } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={studio.title} />

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

              <Header light/>
              
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
                      
                      <div className="w-full h-[83vh] md:h-screen relative overflow-hidden flex flex-wrap flex-col">
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

                  <div className="p-3">
                    <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                      <div className="hidden md:block col-span-2 relative  h-[28.5vw]">
                        <ScrollBoundStack
                          image={studio.contentSupportingImage}
                          image2={studio.contentSupportingImage}
                          id="supporting-image"
                        />

                        <span className="text-xs mt-2 absolute top-auto bottom-0 left-0 z-10 block -mb-6">"{studio.contentSupportingImage.caption}"</span>
                      </div>
                      
                      <div className="col-span-7 md:col-span-3 col-start-1 md:col-start-5 leading-snug max-w-[550px]">
                        <div className="content">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.content} />
                        </div>
                      </div>
                    </div>

                    <h2 className="font-bold text-[7.5vw] leading-none mb-8 md:mb-16 xl:mb-20">
                      <span className="block text-right">JBS Is a</span>
                      <span className="block text-left">Photography + Production</span>
                      <span className="block text-left">Studio Specialising In</span>
                      <span className="block text-left">Lifestyle, Food + Drink</span>
                    </h2>

                    <div className="grid grid-cols-9 gap-3 md:gap-x-3 md:gap-y-12 xl:gap-y-16 mb-12 md:mb-28 xl:mb-32 2xl:mb-48">
                      {studio.teamMembers.map((e, i) =>
                        i == 2 ? (
                          <Fragment key={i}>
                            <div className="col-span-8 md:col-span-3 xl:col-span-3">
                            </div>
                            <div className="col-span-8 md:col-span-2 xl:col-span-2">
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
                              <span className="block text-xs leading-none mb-[2px]">{e.jobTitle}</span>
                              <span className="block leading-none md:text-lg">{e.name}</span>
                            </div>  
                          </Fragment>
                        ) : (
                          <Fragment key={i}>
                            { i == 4 && (
                              <div className="col-span-8 md:col-span-2 xl:col-span-2">
                              </div>
                            )}
                            { i == 5 && (
                              <div className="col-span-8 md:col-span-1 xl:col-span-1">
                              </div>
                            )}
                            <div className={`col-span-8 md:col-span-2 xl:col-span-2`}>
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

                              <span className="block text-xs leading-none mb-[2px]">{e.jobTitle}</span>
                              <span className="block leading-none md:text-lg">{e.name}</span>
                            </div>  
                          </Fragment>
                        )
                      )}
                    </div>


                    <div className="grid grid-cols-9 gap-3">
                      <div className="col-span-9 md:col-span-1 mb-5 md:mb-0">
                        <span className="block leading-none mb-1">Clients &amp; <span className="block">Info</span></span>
                      </div>
                      
                      <div className="col-span-9 md:col-span-2 md:col-start-3 mb-6 md:mb-0">
                        {studio.clientList.map((e, i) => {
                          return (
                            <span className="block leading-none mb-1" key={i}>{e}</span>
                          )
                        })}
                      </div>

                      <div className="col-span-9 md:col-span-2 md:col-start-5 mb-6 md:mb-0">
                        {studio.servicesList.map((e, i) => {
                          return (
                            <span className="block leading-none mb-1" key={i}>{e}</span>
                          )
                        })}
                      </div>

                      <div className="col-span-9 md:col-span-2 md:col-start-8">
                        { contact.email && (<a href={`mailto:${contact.email}`} className="block leading-none mb-1 group relative overflow-hidden underline"><span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Email</span>
                              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full underline group-hover:translate-y-0">Email</span></a>)}

                        {contact.socials.map((e, i) => {
                          return (
                            <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="block leading-none mb-1 underline group relative overflow-hidden">
                              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">{e.title}</span>
                              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full underline group-hover:translate-y-0">{e.title}</span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <Footer contact={contact} />
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
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}