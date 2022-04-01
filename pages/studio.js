import { Fragment, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
// import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import HashGrid from '@/components/hash-grid'

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
}`

const pageService = new SanityPageService(query)

export default function Studio(initialData) {
  const { data: { studio } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={studio.title} />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <Header/>

              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main className="">
                  <div className="">
                    <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                      <div className="col-span-9 md:mr-[1vw] mt-[25vw] md:mt-0">
                        <div className="absolute top-0 left-0 grid grid-cols-9 z-10">
                          <div className="col-span-9 md:col-span-3 xl:col-span-2 bg-white pt-[20vw] p-3">
                            <div className="w-10/12 leading-tight indent-8">
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.heroText} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-full h-[83vh] md:h-screen relative overflow-hidden flex flex-wrap flex-col">
                          <div className="grid grid-cols-9 flex-1 h-full">
                            <div className="relative overflow-hidden mb-auto col-span-9 md:col-span-8 h-full">
                              <Image
                                image={studio.heroImage}
                                layout="fill"
                                focalPoint={studio.heroImage.hotspot}
                                widthOverride={500}
                                className="w-full z-0 absolute inset-0 h-full object-cover object-center"
                              />
                            </div>
                          </div>
                          
                          <h1 className="font-bold text-[11vw] leading-none grid grid-cols-9 mt-auto h-auto w-auto">
                            <span className="block col-start-1">The</span>
                            <span className="block col-start-7 col-span-3 text-right">Studio</span>
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                        <div className="hidden md:block col-span-2">
                          <Image
                            image={studio.contentSupportingImage}
                            focalPoint={studio.contentSupportingImage.hotspot}
                            widthOverride={200}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="col-span-7 md:col-span-3 col-start-1 md:col-start-5 leading-snug content max-w-[550px]">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.content} />
                        </div>
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
                                  widthOverride={150}
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
                                widthOverride={150}
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
                          <span className="block leading-none mb-1">Bacardi</span>
                          <span className="block leading-none mb-1">Banks Rum</span>
                          <span className="block leading-none mb-1">Bar Swift</span>
                          <span className="block leading-none mb-1">Bombay Sapphire</span>
                          <span className="block leading-none mb-1">British Land</span>
                          <span className="block leading-none mb-1">Coya</span>
                          <span className="block leading-none mb-1">Dandelyan</span>
                          <span className="block leading-none mb-1">Driscoll's Berries</span>
                          <span className="block leading-none mb-1">Edition Hotels</span>
                          <span className="block leading-none mb-1">ETM Group</span>
                          <span className="block leading-none mb-1">Food & Travel Magazine</span>
                          <span className="block leading-none mb-1">GQ Magazine</span>
                          <span className="block leading-none mb-1">Grey Goose</span>
                          <span className="block leading-none mb-1">Highland Spring</span>
                          <span className="block leading-none mb-1">Imbibe Magazine</span>
                          <span className="block leading-none mb-1">Lurpak Butter</span>
                          <span className="block leading-none mb-1">Marriott Hotels</span>
                          <span className="block leading-none mb-1">Martini</span>
                          <span className="block leading-none mb-1">Mondrian London</span>
                          <span className="block leading-none mb-1">Morgans Hotel Group</span>
                          <span className="block leading-none mb-1">Nobu</span>
                          <span className="block leading-none mb-1">Pernod Ricard</span>
                          <span className="block leading-none mb-1">Punch Magazine</span>
                          <span className="block leading-none mb-1">Punch Room</span>
                          <span className="block leading-none mb-1">Red Rooster</span>
                          <span className="block leading-none mb-1">St.Germain Liqueur</span>
                          <span className="block leading-none mb-1">The Autograph Collection</span>
                          <span className="block leading-none mb-1">The Curtain Hotel</span>
                          <span className="block leading-none mb-1">The Glenlivet</span>
                          <span className="block leading-none mb-1">Vogue</span>
                        </div>

                        <div className="col-span-9 md:col-span-2 md:col-start-5 mb-6 md:mb-0">
                          <span className="block leading-none mb-1">Photography</span>
                          <span className="block leading-none mb-1">Set Design</span>
                          <span className="block leading-none mb-1">Moving Image</span>
                          <span className="block leading-none mb-1">Production</span>
                          <span className="block leading-none mb-1">Retouching</span>
                          <span className="block leading-none mb-1">Film</span>
                        </div>

                        <div className="col-span-9 md:col-span-2 md:col-start-8">
                          <span className="block leading-none mb-1 underline">Email</span>
                          <span className="block leading-none mb-1 underline">Instagram</span>
                          <span className="block leading-none mb-1 underline">Facebook</span>
                          <span className="block leading-none mb-1 underline">Twitter</span>
                          <span className="block leading-none mb-1 underline">Pinterest</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </m.main>

                <Footer />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}