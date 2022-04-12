import { Fragment, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { scaleDelay, reveal, fadeDelay, revealDelay } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import HashGrid from '@/components/hash-grid'
import FadeInWhenVisible from '@/components/fade-in-when-visible'
import Loader from '@/components/loader'
import { SplitText } from '@cyriacbr/react-split-text'

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
          <Loader />

          <LocomotiveScrollProvider
            options={{ smooth: true, lerp: 0.15 }}
            containerRef={containerRef}
            watch={[]}
          >
            <div data-scroll-container ref={containerRef} id="scroll-container">
              <div data-scroll-section>

              <Header/>
              
              <m.main className="">
                <div className="">
                  <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                    <div className="col-span-9 md:mr-[1vw] mt-[25vw] md:mt-0">
                      <div className="absolute top-0 left-0 grid grid-cols-9 z-10">
                        <div className="col-span-9 md:col-span-3 xl:col-span-2 bg-white pt-[20vw] p-3">
                          <div className="w-full md:w-10/12 leading-tight md:pr-[20px]">
                            <m.div variants={fadeDelay}>
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.heroText} />
                            </m.div>

                            {/* <p className="w-full">
                              <SplitText
                                LineWrapper={({ lineIndex, children }) => (
                                  <m.span variants={revealDelay} className="wrapper max-w-full block">
                                    {children}
                                  </m.span>
                                )}
                              >Jbs is a collective of artists and technicians dedicated to one simple thing — elevating the craft and science of photography + film.</SplitText>
                            </p> */}
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full h-[83vh] md:h-screen relative overflow-hidden flex flex-wrap flex-col">
                        <div className="grid grid-cols-9 flex-1 h-full">
                          <div className="relative overflow-hidden mb-auto col-span-9 md:col-span-8 h-full">
                            <m.div variants={scaleDelay} className="absolute inset-0 h-full object-cover object-center">
                              <Image
                                image={studio.heroImage}
                                layout="fill"
                                focalPoint={studio.heroImage.hotspot}
                                widthOverride={1200}
                                className="w-full z-0 absolute inset-0 h-full object-cover object-center"
                              />
                            </m.div>
                          </div>
                        </div>
                        
                        <h1 className="font-bold text-[11vw] leading-[0.8] grid grid-cols-9 mt-auto h-auto w-auto pt-[10px]">
                          <span className="block col-start-1 col-span-3 relative overflow-hidden">
                          <m.span className="block" variants={revealDelay}>The</m.span></span>
                          <span className="block col-start-7 col-span-3 text-right relative overflow-hidden"><m.span className="block" variants={revealDelay}>Studio</m.span></span>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                      <FadeInWhenVisible className="hidden md:block col-span-2">
                        <Image
                          image={studio.contentSupportingImage}
                          focalPoint={studio.contentSupportingImage.hotspot}
                          widthOverride={550}
                          className="w-full"
                        />
                      </FadeInWhenVisible>
                      
                      <FadeInWhenVisible className="col-span-7 md:col-span-3 col-start-1 md:col-start-5 leading-snug max-w-[550px]">
                        <div className="content">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.content} />
                        </div>
                      </FadeInWhenVisible>
                    </div>

                    <h2 className="font-bold text-[7.5vw] leading-none mb-8 md:mb-16 xl:mb-20">
                      <span className="block text-right">JBS Is a</span>
                      <span className="block text-left">Photography + Production</span>
                      <span className="block text-left">Studio Specialising In</span>
                      <span className="block text-left">Lifestyle, Food + Drink</span>
                    </h2>

                    <div className="grid grid-cols-9 gap-3 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                      {studio.teamMembers.map((e, i) =>
                        i == 2 ? (
                          <Fragment key={i}>
                            <div className="col-span-8 md:col-span-3 xl:col-span-3">
                              <HashGrid />
                            </div>
                            <div className="col-span-8 md:col-span-2 xl:col-span-2">
                              <Image
                                image={e.image}
                                focalPoint={e.image.hotspot}
                                widthOverride={550}
                                className="w-full mb-3"
                              />
                              <span className="block text-xs leading-none mb-2">{e.jobTitle}</span>
                              <span className="block leading-none">{e.name}</span>
                            </div>  
                          </Fragment>
                        ) : (
                          <div className="col-span-8 md:col-span-2 xl:col-span-2" key={i}>
                            <Image
                              image={e.image}
                              focalPoint={e.image.hotspot}
                              widthOverride={550}
                              className="w-full mb-3"
                            />
                            <span className="block text-xs leading-none mb-2">{e.jobTitle}</span>
                            <span className="block leading-none">{e.name}</span>
                          </div>  
                        )
                      )}
                    </div>


                    <div className="grid grid-cols-9 gap-3 mb-20 md:mb-32 xl:mb-48 2xl:mb-64">
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
                        { contact.email && (<a href={`mailto:${contact.email}`} className="block leading-none mb-1 underline">Email</a>)}

                        {contact.socials.map((e, i) => {
                          return (
                            <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="block leading-none mb-1 underline">{e.title}</a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </m.main>

              <Footer contact={contact} />
              </div>
            </div>
          </LocomotiveScrollProvider>
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