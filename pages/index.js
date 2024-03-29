import { useContext, useEffect, useState } from 'react'
import Layout from '@/components/layout'
import { fade, fadeDelay, scaleDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from '@/components/image'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import Div100vh from 'react-div-100vh'
import { NewsletterContext } from '@/context/newsletter'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    content,
    headerTagline,
    backgroundImage {
      asset-> {
        ...
      },
      caption,
      alt
    },
    workBackgroundImage {
      asset-> {
        ...
      },
      caption,
      alt
    },
    studioBackgroundImage {
      asset-> {
        ...
      },
      caption,
      alt
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "menu": *[_type == "menu"][0]{
    reelUrl,
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

export default function Home(initialData) {
  const { data: { home, contact, menu } } = pageService.getPreviewHook(initialData)()
  const [currentHover, setCurrentHover] = useState(null)
  const [reelActive, setReelActive] = useState(false)
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [newsletterContext, setNewsletterContext] = useContext(NewsletterContext);

  const revealDelayBottom = {
    initial: { y: '-100%' },
    enter: { 
      y: 0,
      transition: { delay: introContext ? 0 : 2.8, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  }
  
  
  const revealDelayTop = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 2.8, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: '-100%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const revealDelayTop2 = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: '-100%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const revealDelayTop3 = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 3.2, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: '-100%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const newsletterToggle = () => {
    if (newsletterContext) {
      setNewsletterContext(false)
    } else {
      setNewsletterContext(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 2950);
  },[]);

  const updateCurrentHover = (value) => {
    setCurrentHover(value)
  } 

  return (
    <Layout>
      <NextSeo
        title={home.seo?.metaTitle ? home.seo?.metaTitle : home.title}
        description={home.seo?.metaDesc ? home.seo?.metaDesc : null}
        openGraph={{
          title: home.seo?.metaTitle ? home.seo?.metaTitle : home.title,
          description: home.seo?.metaDesc ? home.seo?.metaDesc : null,
          images: home.seo?.shareGraphic?.asset ? [
            {
              url: home.seo?.shareGraphic?.asset.url ? home.seo?.shareGraphic?.asset.url : null,
              width: home.seo?.shareGraphic?.asset.metadata.dimensions.width ? home.seo?.shareGraphic?.asset.metadata.dimensions.width : null,
              height: home.seo?.shareGraphic?.asset.metadata.dimensions.height ? home.seo?.shareGraphic?.asset.metadata.dimensions.height : null,
              type: 'image/jpeg',
            }
          ] : null
        }}
      />
      
      <Div100vh className="p-3 relative">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {/* <Loader /> */}

            <AnimatePresence>
              {reelActive && (
                <m.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.66, ease: [0.83, 0, 0.17, 1] }} className="fixed inset-0 w-full h-full bg-white bg-opacity-90 z-[10000000000000000000] flex items-center justify-center">
                  <button
                    onClick={() => setReelActive(!reelActive)}
                    className="absolute top-0 right-0 z-[1000000000000000000] block w-[75px] bg-transparent p-3 group"
                  >
                    <div class="relative"><span class="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] rotate-[45deg] scale-x-[0.55] translate-x-[9px] translate-y-2"></span><span class="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] rotate-[-45deg] scale-x-[0.55] translate-x-2"></span></div>
                  </button>

                  <div className="grid grid-cols-9 p-3 md:p-3 border-b border-white md:border-0">
                    <div className="col-span-9 md:col-span-7 md:col-start-2">
                      <video 
                        controls
                        preload="metadata"
                        className="w-full h-[66vw] md:h-[40vw] relative z-10 block object-cover object-center"
                        autoPlay={true}
                      >
                        <source src={menu.reelUrl} type="video/mp4"/>
                        Sorry. Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            <m.div variants={fade}>
            <m.header className="absolute bottom-0 md:bottom-auto md:top-0 left-0 right-0 z-10">
              <div className="grid grid-cols-9 p-3">
                <div className="col-span-6 md:col-span-5 relative overflow-hidden">
                  <m.svg variants={revealDelayTop} className="w-[40px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></m.svg>
                </div>

                <div className="col-span-2 relative overflow-hidden">
                  <m.svg variants={revealDelayTop2} className="w-[39px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></m.svg>
                </div>
                
                <div className="col-span-1 md:col-start-8 xl:col-start-9 text-right relative overflow-hidden">
                  <m.svg variants={revealDelayTop3} className="w-[39px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></m.svg>
                </div>
              </div>
              
              {home.headerTagline && (
                <div className="absolute top-0 left-0 right-0 grid grid-cols-9 p-3">
                  <span className="text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-4 col-start-2 relative overflow-hidden hidden md:block">
                    <m.span className="block" variants={revealDelayTop}>{home.headerTagline}</m.span>
                  </span>
                </div>
              )}
            </m.header>

            <m.main className="">
              <m.div variants={scaleDelay} className="fixed inset-0 z-0 object-cover object-center">
                <div className={`transition-all ease-custom duration-[450ms] ${(currentHover == 'work' || currentHover == 'studio' ) ? 'opacity-0 scale-1' : 'scale-1 opacity-100' }`}>
                  <Image 
                    image={home.backgroundImage}
                    layout="fill"
                    widthOverride={2000}
                    className={`hidden md:block fixed inset-0 z-0 object-cover object-enter `}
                  />
                </div>

                <div className={`transition-all ease-custom duration-[450ms] home-image-mobile ${(currentHover == 'work' || currentHover == 'studio' ) ? 'opacity-0 scale-1' : 'scale-1 opacity-100' }`}>
                  <Image 
                    image={home.backgroundImage}
                    layout="fill"
                    widthOverride={1200}
                    className={`block md:hidden fixed inset-0 z-0 home-image-mobile `}
                  />
                </div>

                <div className={`transition-all ease-custom duration-[450ms] ${currentHover == 'work' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}>
                  <Image 
                    image={home.workBackgroundImage}
                    focalPoint={home.workBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={2000}
                    className={`fixed inset-0 z-0 object-cover object-enter`}
                  />
                </div>

                <div className={`transition-all ease-custom duration-[450ms] ${currentHover == 'studio' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}>
                  <Image 
                    image={home.studioBackgroundImage}
                    focalPoint={home.studioBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={2000}
                    className={`fixed inset-0 z-0 object-cover object-enter`}
                  />
                </div>
              </m.div>

              <article className="absolute bottom-0 top-auto md:bottom-auto md:top-0 right-0 left-0 z-10 w-full md:mt-[20vh] mb-[8vh] md:mb-0 p-3 indent-8 text-sm md:text-base leading-tight md:leading-tight grid grid-cols-9">
                <m.div variants={fadeDelay} className="col-span-9 md:col-span-3 md:col-start-7 pr-12 xl:pr-20">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.content} />
                </m.div>
              </article>
            </m.main>

            <m.footer className="absolute top-0 md:top-auto md:bottom-0 left-0 right-0 z-10 p-3">
              <div className="grid grid-cols-9 items-end">
                <div className="col-span-3 md:col-span-2 text-left">
                  <Link href="/work">
                    <a
                      className="-mt-1 md:mt-0 text-4xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase relative hidden md:block overflow-hidden group"
                      onMouseEnter={() => updateCurrentHover('work')}
                      onMouseLeave={() => updateCurrentHover(null)}
                    >
                      <m.span className="block relative overflow-hidden" variants={revealDelayBottom}>
                        <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Work</span>
                        <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">Work</span>
                      </m.span>
                    </a>
                  </Link>
                  <Link href="/work">
                    <a
                      className="-mt-1 md:mt-0 text-4xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase relative block md:hidden overflow-hidden group"
                    >
                      <m.span className="block relative overflow-hidden" variants={revealDelayBottom}>
                        <span className="block">Work</span>
                      </m.span>
                    </a>
                  </Link>
                </div>

                <div className="hidden md:flex col-span-5 col-start-3 text-center md:space-x-7 justify-center">

                  <button onClick={() => setReelActive(!reelActive)}>
                    <a className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase group relative overflow-hidden hidden md:block">
                      <m.span variants={revealDelayBottom} className="hidden md:inline-block relative overflow-hidden">
                        <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Reel</span>
                        <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">Reel</span>
                      </m.span>
                      <m.span variants={revealDelayBottom} className="inline-block md:hidden">Reel</m.span>
                    </a>
                  </button>

                  <button aria-label={newsletterContext ? 'Close newsletter modal' : 'Open newsletter modal' } onClick={newsletterToggle} className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase group relative overflow-hidden hidden md:block">
                    <m.span variants={revealDelayBottom} className="hidden md:inline-block relative overflow-hidden">
                      <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Newsletter</span>
                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">Newsletter</span>
                    </m.span>
                    <m.span variants={revealDelayBottom} className="inline-block md:hidden">Newsletter</m.span>
                    </button>

                  <a href={`mailto:${contact.email}`} className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase group hidden md:block relative overflow-hidden ml-5">
                    <m.span variants={revealDelayBottom} className="hidden md:inline-block relative overflow-hidden">
                      <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Get in touch</span>
                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">Get in touch</span>
                    </m.span>
                    <m.span variants={revealDelayBottom} className="inline-block md:hidden">Contact</m.span>
                  </a>

                  {contact.socials.map((e, i) => {
                    return e.title === 'Instagram' && (
                      <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase hover:underline focus:underline ml-3 hidden md:block relative overflow-hidden group">
                        <m.span className="inline-block" variants={revealDelayBottom}>
                          <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.title}</span>
                          <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">{e.title}</span>
                        </m.span>
                      </a>
                    )
                  })}
                </div>
                
                <div className="col-span-4 md:col-span-2 col-start-4 md:col-start-8 md:text-right">
                  <Link href="/studio">
                    <a
                      className="-mt-1 md:mt-0 text-4xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase relative hidden md:block overflow-hidden group"
                      onMouseEnter={() => updateCurrentHover('studio')}
                      onMouseLeave={() => updateCurrentHover(null)}
                    >
                      <m.span className="block" variants={revealDelayBottom}>
                        <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Studio</span>
                        <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-white">Studio</span>
                      </m.span>
                    </a>
                  </Link>

                  <Link href="/studio">
                    <a
                      className="-mt-1 md:mt-0 text-4xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-[0.9] md:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] font-sans uppercase relative block overflow-hidden group md:hidden"
                    >
                      <m.span className="block" variants={revealDelayBottom}>
                        <span className="block">Studio</span>
                      </m.span>
                    </a>
                  </Link>
                </div>
              </div>
            </m.footer>
            </m.div>
          </m.div>
        </LazyMotion>
      </Div100vh>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}