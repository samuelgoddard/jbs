import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import Link from 'next/link'
import FancyLink from '@/components/fancyLink'
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
    content,
    teamMembers[] {
      name,
      jobTitle,
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
                    <div className="grid grid-cols-9">
                      <div className="col-span-9 md:col-span-8 md:mr-[1vw] mt-[25vw] md:mt-0">
                        <div className="w-full h-screen relative overflow-hidden">
                          <Image
                            image={studio.heroImage}
                            layout="fill"
                            focalPoint={studio.heroImage.hotspot}
                            className="w-full z-0 absolute inset-0 h-full object-cover object-center"
                          />
                        </div>
                        <div className="absolute top-0 left-0 grid grid-cols-9 z-10">
                          <div className="col-span-9 md:col-span-3 xl:col-span-2 bg-white pt-[20vw] p-3">
                            <div className="w-10/12 leading-tight indent-8">
                              <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.content} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <h1 className="font-bold text-[11vw] leading-none grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40 -mt-[1vw]">
                        <span className="block col-start-1">The</span>
                        <span className="block col-start-7 col-span-3 text-right">Studio</span>
                      </h1>

                      <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                        <div className="hidden md:block col-span-2">
                          <img src="https://place.dog/640/900" className="w-full" />
                        </div>
                        
                        <div className="col-span-7 md:col-span-3 col-start-1 md:col-start-5 leading-snug content max-w-[550px]">
                          <p>Our collective expertise spans decades in the design, comms, packaged goods, and hospitality industries. We love what we do and we think it shows in our work. We specialize in drinks, but above all, our studio is united around the pursuit of compelling stories. Every assignment is a new opportunity to collaborate with our partners and build a meaningful journey expressed through purposeful imagery.</p>
                          
                          <p>No matter the brief, JBS unites a core team of dedicated professionals from start to finish: Director, Photographer, Stylist, and Producer. A crucial part of our process is the integration of our client partners into our workflow. Communication is everything. One team, one dream.</p>
                          
                          <p>Our base of operations is our newly renovated studio in East London. Big or small, this amazing space is where we build new worlds and bring our shared vision to life. As a small and passionate group, the opportunity to partner with incubation brands inspires us every day.</p>
                          
                          <p>We have worked and continue to shoot campaigns for the with the world’s leading drinks brands including Bacardí, Tanqueray, The Singleton, Ballentine’s Grey Goose, Patrón Tequila & MORE.</p>
                        </div>
                      </div>

                      <h2 className="font-bold text-[7.5vw] leading-none mb-8 md:mb-16 xl:mb-20">
                        <span className="block text-right">JBS Is a</span>
                        <span className="block text-left">Photography + Production</span>
                        <span className="block text-left">Studio Specialising In</span>
                        <span className="block text-left">Lifestyle, Food + Drink</span>
                      </h2>

                      <div className="grid grid-cols-9 gap-3 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                        <div className="col-span-8 md:col-span-2 xl:col-span-2">
                          <img src="https://place.dog/640/900" className="w-full mb-3" />
                          <span className="block text-xs leading-none mb-2">Photographer</span>
                          <span className="block leading-none">Jason Bailey</span>
                        </div>
                        <div className="col-span-8 md:col-span-2 xl:col-span-2">
                          <img src="https://place.dog/640/900" className="w-full mb-3" />
                          <span className="block text-xs leading-none mb-2">Mixologist</span>
                          <span className="block leading-none">Oliver Blackburn</span>
                        </div>
                        <div className="col-span-8 md:col-span-3 xl:col-span-3">
                          <HashGrid />
                        </div>
                        <div className="col-span-8 md:col-span-2 xl:col-span-2 xl:col-start-8">
                          <img src="https://place.dog/640/900" className="w-full mb-3" />
                          <span className="block text-xs leading-none mb-2">Photographer</span>
                          <span className="block leading-none">Jason Bailey</span>
                        </div>
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

                      <div className="w-full h-[30vw] max-h-[650px]">
                        <HashGrid />
                      </div>
                    </div>
                  </div>
                </m.main>

                <m.footer className="relative">
                  <div className="grid grid-cols-9 items-end p-3">
                    <div className="col-span-1">
                      <svg className="w-[31px] md:w-[41px] xl:w-[51px] fill-current" viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></svg>
                    </div>

                    <div className="col-span-1 col-start-2">
                      <span className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] underline mb-1">Home</span>
                      <span className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] underline mb-1">Studio</span>
                      <span className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] underline mb-1">Work</span>
                      <span className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] underline mb-1">Privacy</span>
                    </div>

                    <div className="col-span-2 col-start-4 md:col-start-3 xl:col-start-4 flex space-x-4">
                      <a href="#" className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase underline">Contact</a>

                      <a href="#" className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase underline hidden md:block">Instagram</a>
                    </div>

                    <div className="col-span-1 col-start-6 hidden md:flex">
                      <Link href="/reel"><a className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase underline">Reel</a></Link>
                    </div>

                    <div className="col-span-1 col-start-7">
                      <svg className="w-[30px] md:w-[40px] xl:w-[50px] fill-current" viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></svg>
                    </div>
                    
                    <div className="col-span-1 col-start-8">
                      <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85]">By <span className="underline">ShiftWalk</span></span>
                    </div>
                    
                    <div className="col-span-1 col-start-9 text-right">
                      <svg className="w-[30px] md:w-[40px] xl:w-[50px] fill-current ml-auto" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></svg>
                    </div>
                  </div>
                </m.footer>
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