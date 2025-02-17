import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import { fade, scaleDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from '@/components/image'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import { NewsletterContext } from '@/context/newsletter'
import { ReelContext } from '@/context/reel'
import Footer from '@/components/footer'
import { useLenis } from '@studio-freight/react-lenis'
import { Masonry } from '@mui/lab';
import ConditionalWrap from 'conditional-wrap'
import { NewsletterContentContext } from '@/context/newsletter-content'


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
  "work": *[_type == "work" && $slug in categoryMulti[]->slug.current] | order(orderRank, asc) {
    title,
    categoryMulti[]-> {
      title,
      slug {
        current
      }
    },
    categoryNew-> {
      title,
      slug {
        current
      }
    },
    type,
    year,
    type,
    campaignTitle,
    location,
    teaserImage {
      asset-> {
        ...,
      },
      overrideVimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    teaserImageThumbnail {
      asset-> {
        ...,
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
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "snapshots": *[_type == "snapshot" && $slug in categoryMulti[]->slug.current] | order(orderRank, asc) {
    title,
    categoryMulti[]-> {
      title,
      slug {
        current
      }
    },
    categoryNew-> {
      title,
      slug {
        current
      }
    },
    workLink-> {
      slug {
        current
      }
    },
    teaserImage {
      asset-> {
        ...,
      },
      overrideVimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    teaserImageThumbnail {
      asset-> {
        ...,
      },
      overrideVimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    }
  },
  "menu": *[_type == "menu"][0]{
    reelUrl,
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
  "cats": *[_type == "category"] | order(orderRank, asc){
    orderRank,
    title,
    slug {
      current
    }
  },
  "currentCat": *[_type == "category" && slug.current == $slug][0]{
    title,
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

export default function Home(initialData) {
  const { data: { home, contact, menu, work, snapshots, cats, currentCat } } = pageService.getPreviewHook(initialData)()
  const [reelContext, setReelContext] = useContext(ReelContext)
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [filtersActive, setFiltersActive] = useState(false);
  const [newsletterContext, setNewsletterContext] = useContext(NewsletterContext);
  const [newsletterContentContext, setNewsletterContentContext] = useContext(NewsletterContentContext);
  
  const { scrollYProgress } = useScroll()
  const lenis = useLenis();

  useEffect(() => {
    setNewsletterContentContext({
      heading: menu.newsletterHeading,
      text: menu.newsletterText,
      image: menu.newsletterImage
    })
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.055) {
      setFiltersActive(true)
    }
    
    if (latest < 0.055) {
      setFiltersActive(false)
    }

    if (latest > 0.75) {
      setFiltersActive(false)
    }
  })

  const revealDelayTop = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 2.8, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: 0,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const revealDelayTop2 = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 3, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: 0,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const revealDelayTop3 = {
    initial: { x: '-100%' },
    enter: { 
      x: 0,
      transition: { delay: introContext ? 0 : 3.2, duration: 0.65, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      x: 0,
      transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const newsletterToggle = () => {
    if (newsletterContext) {
      setNewsletterContext(false)
    } else {
      setNewsletterContext(true)
    }
  }
  
  let newWork = []
  
  newWork = [...work, ...snapshots]

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
      
      <div className="relative overflow-hidden">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {/* <Loader /> */}

            <m.div variants={fade} className="pt-[120px] md:pt-[200px]">

              <AnimatePresence>
                {filtersActive && (
                  <m.div
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed top-0 px-3 py-3 md:px-4 md:py-2 lg:px-5 lg:py-2 left-0 right-0 z-[100] flex text-white bg-gradient-to-b from-black/40 via-black/20 to-transparent text-sm/none md:text-base/none lg:text-lg/none xl:text-xl/none tracking-tighter uppercase"
                  >
                    <button onClick={() => setReelContext(!reelContext)} className="uppercase hidden md:block group">
                      <span className="relative overflow-hidden block">
                        <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Play Reel (2:14)</span>
                        <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">Play Reel (2:14)</span>
                      </span>
                    </button>

                    <nav className="mx-auto">
                      <ul className="flex space-x-1 md:space-x-1 lg:space-x-1.5">
                        <li className="block">
                          <Link scroll={false} legacyBehavior href="/">
                            <a className="block uppercase px-2.5 lg:px-3.5 py-2 lg:py-3.5 relative group">
                              <span className="relative overflow-hidden block">
                                <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">All</span>
                                <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">All</span>
                              </span>
                              {/* <span className="block absolute inset-0 rounded-[130%] border-white border skew-y-[-5deg] scale-y-[1] scale-x-[1.075]"></span> */}
                            </a>
                          </Link>
                        </li>
                        {cats.map((e, i) => {
                          return (
                            <li className="block" key={i}>
                              <Link scroll={false} legacyBehavior href={`/cat/${e.slug.current}`}>
                                <a className="block uppercase px-2.5 lg:px-3.5 py-2 lg:py-3.5 relative group">
                                  <span className="relative overflow-hidden block">
                                    <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">{e.title}</span>
                                    <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">{e.title}</span>
                                  </span>
                                  {e.slug.current == currentCat.slug.current && (
                                    <span className="block absolute inset-0 rounded-[130%] border-white border skew-y-[-5deg] scale-y-[1] scale-x-[1.075]"></span>
                                  )}
                                </a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </nav>

                    <button onClick={ ()=> lenis?.scrollTo(0, {offset: 0, duration: 2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))})} className="hidden md:block uppercase group">
                      <span className="block relative overflow-hidden">
                        <span className="relative overflow-hidden block">
                          <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">To Top</span>
                          <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">To Top</span>
                        </span>
                      </span>
                    </button>
                  </m.div>
                )}
              </AnimatePresence>

              <m.header className="block z-10 absolute top-0 right-0 left-0 p-3">
                {home.headerTagline && (
                  <div className="">
                    <span className="text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] relative overflow-hidden">
                      <m.span className="block max-w-[25ch] md:max-w-[75ch]" variants={revealDelayTop}>{home.headerTagline}</m.span>
                    </span>
                  </div>
                )}
              </m.header>

              <div className="grid grid-cols-9 items-end p-3">
                <div className="col-span-2 md:col-span-3 relative overflow-hidden">
                  <m.svg variants={revealDelayTop} className="w-[40px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></m.svg>
                </div>

                <div className="col-span-2 relative overflow-hidden">
                  <m.svg variants={revealDelayTop2} className="w-[39px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></m.svg>
                </div>
                
                <div className="col-span-1 col-start-9 text-right relative overflow-hidden">
                  <m.svg variants={revealDelayTop3} className="w-[39px] md:w-[5.7vw] xl:w-[5.2vw] fill-current ml-auto" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></m.svg>
                </div>
              </div>

              <m.main className="mb-[20vw] md:mb-[10vw]">
                <Masonry columns={{ xs: 1, md:2, lg:3 }} spacing={0} classes="!gap-0">
                  {newWork.map((e, i) => {
                    let aspect = 'aspect-auto'

                    e.teaserImageThumbnail?.overrideVideoAspectRatio == '169' && (aspect = '!aspect-[16/9]')
                    e.teaserImageThumbnail?.overrideVideoAspectRatio == '45' && (aspect = '!aspect-[4/5]')
                    e.teaserImageThumbnail?.overrideVideoAspectRatio == '916' && (aspect = '!aspect-[9/16]')
                    e.teaserImageThumbnail?.overrideVideoAspectRatio == '11' && (aspect = '!aspect-[1/1]')

                    return e.slug ? (
                      <Link scroll={false} legacyBehavior href={`/work/${e.slug.current}`} key={i}>
                        <a className={`relative overflow-hidden block cursor-pointer ${aspect}`} variants={scaleDelay}>
                          <div className={`transition-all ease-custom duration-[600ms] opacity-100 group h-full`}>
                            <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-[20] flex flex-wrap opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-[400ms] text-white p-2">
                              <div className="w-full">
                                <h2 className="text-[8vw] md:text-[3vw] leading-none block mb-1">{e.title}</h2>
                                <h2 className="text-[3vw] md:text-[1.5vw] leading-none">{e.campaignTitle}</h2>
                              </div>

                              <div className="w-full mt-auto">
                                <span className="block text-xs leading-none mb-1">JBS.0{i+1}</span>
                                <span className="block text-xs leading-none">{e.type}, {e.categoryNew?.title}, {e.location}</span>
                                <span className="block text-xs leading-none">{e.year}</span>
                              </div>
                            </div>
                            
                            <m.div variants={scaleDelay} className="h-full">
                              <div className="scale-[1.05] h-full">
                              {e.teaserImageThumbnail && (
                                <Image 
                                  layout={e.teaserImageThumbnail.overrideVideoAspectRatio ? 'fill' : 'responsive'}
                                  image={e.teaserImageThumbnail}
                                  widthOverride={800}
                                  className={e.teaserImageThumbnail.overrideVideoAspectRatio ? 'w-full h-full absolute inset-0 object-center' : 'block w-full' }
                                />
                                )}
                              </div>
                            </m.div>
                          </div>
                        </a>
                      </Link>
                    ) : (
                      <ConditionalWrap
                        condition={!!e.workLink?.slug?.current}
                        wrap={children => (
                          <Link scroll={false} legacyBehavior href={`/work/${e.workLink.slug.current}`}>
                            <a>
                              {children}
                            </a>
                          </Link>
                        )}
                      >
                        <div className="relative overflow-hidden block" variants={scaleDelay}>
                          <div className={`transition-all ease-custom duration-[600ms] opacity-100 group item`}>
                            
                            <m.div variants={scaleDelay}>
                              <div className="scale-[1.05]">
                                {e.teaserImageThumbnail && (
                                  <Image 
                                    layout={e.teaserImageThumbnail.overrideVideoAspectRatio ? 'fill' : 'responsive'}
                                      image={e.teaserImageThumbnail}
                                      widthOverride={800}
                                      className={e.teaserImageThumbnail.overrideVideoAspectRatio ? 'w-full h-full absolute inset-0 object-center' : 'block w-full' }
                                  />
                                )}
                              </div>
                            </m.div>
                          </div>
                        </div>
                      </ConditionalWrap>
                    )
                  })}
                </Masonry>
              </m.main>
            </m.div>

            <Footer contact={contact} />
          </m.div>
        </LazyMotion>
      </div>
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
  const paths = await pageService.fetchPaths('category')
  return {
    paths: paths,
    fallback: false,
  };
}