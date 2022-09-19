import Layout from '@/components/layout'
import { revealDelay, revealDelayTop, revealDelayBottom, scaleDelay, fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import Image from '@/components/image'
import Loader from '@/components/loader'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import { useRouter } from 'next/router'
import Div100vh from 'react-div-100vh'

const query = `{
  "home": *[_type == "home"][0]{
    backgroundImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    }
  },
  "menu": *[_type == "menu"][0]{
    backgroundImage {
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
    homeBackgroundImage {
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
    workBackgroundImage {
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
    studioBackgroundImage {
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
    reelBackgroundImage {
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
  },
  "contact": *[_type == "contact"][0]{
    email
  }
}`

const pageService = new SanityPageService(query)

export default function Menu(initialData) {
  const { data: { home, menu, contact } } = pageService.getPreviewHook(initialData)()
  const [currentHover, setCurrentHover] = useState(null)
  const [introContext, setIntroContext] = useContext(IntroContext);
  const router = useRouter()


  useEffect(() => {
    setIntroContext(true)
  },[]);

  const updateCurrentHover = (value) => {
    setCurrentHover(value)
  } 

  return (
    <Layout>
      <NextSeo title={"Menu"} />
      
      <Div100vh className="p-3  relative">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <m.div variants={fade}>

            <button onClick={() => router.back()} className="w-14 h-12 bg-transparent fixed top-0 right-0 z-[10000000000]"></button>

            {/* <Loader/> */}
            <m.header className="absolute top-0 left-0 right-0 z-10">
              <div className="p-3">
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

              {/* <div className="absolute top-0 left-0 right-0 grid grid-cols-9 p-3">
                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 relative overflow-hidden">
                  <m.span variants={revealDelayTop} className="block">(</m.span>
                </span>

                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-4 md:col-span-1 col-start-2 relative overflow-hidden">
                  <m.span variants={revealDelayTop} className="block">A Photography <span className="inline-block md:hidden relative overflow-hidden">++ Moving Image</span></m.span>
                </span>
                
                <span className="hidden md:block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-4 relative overflow-hidden">
                  <m.span variants={revealDelayTop} className="block">++</m.span>
                </span>

                <span className="hidden md:block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-5 relative overflow-hidden">
                  <m.span variants={revealDelayTop} className="block">Moving Image</m.span>
                </span>

                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-7 relative overflow-hidden">
                  <m.span variants={revealDelayTop} className="block">Studio</m.span>
                </span>
              </div> */}

              {/* <nav className="flex space-x-3 text-sm md:text-base w-auto p-3 absolute top-0 right-0">
                <Link href="/studio">
                  <a className="block w-[45px]">
                    <span className="block w-full h-[3px] mb-[5px] bg-current"></span>
                    <span className="block w-full h-[3px] mb-[5px] bg-current"></span>
                  </a>
                </Link>
              </nav> */}
            </m.header>

            <m.main className="">
              <div className="fixed left-0 top-0 bottom-0 w-[43vw] z-0 overflow-hidden hidden md:block">
                <m.div variants={scaleDelay} className="absolute inset-0 w-full h-full z-0 object-cover object-center bg-gray-200">
                  <Image 
                    image={menu.backgroundImage}
                    focalPoint={menu.backgroundImage.hotspot}
                    layout="fill"
                    widthOverride={1200}
                    className={`absolute inset-0 w-full h-full z-0 object-cover object-center transition-all ease-custom duration-[450ms] ${(currentHover == 'work' || currentHover == 'studio' || currentHover == 'home' || currentHover == 'reel') ? 'opacity-0 scale-1' : 'scale-1 opacity-100' }`}
                  />

                  <Image 
                    image={menu.homeBackgroundImage}
                    focalPoint={menu.homeBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={1200}
                    className={`absolute inset-0 w-full h-full z-0 object-cover object-center transition-all ease-custom duration-[450ms] ${currentHover == 'home' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}
                  />
                  <Image 
                    image={menu.workBackgroundImage}
                    focalPoint={menu.workBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={1200}
                    className={`absolute inset-0 w-full h-full z-0 object-cover object-center transition-all ease-custom duration-[450ms] ${currentHover == 'work' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}
                  />
                  <Image 
                    image={menu.studioBackgroundImage}
                    focalPoint={menu.studioBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={1200}
                    className={`absolute inset-0 w-full h-full z-0 object-cover object-center transition-all ease-custom duration-[450ms] ${currentHover == 'studio' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}
                  />
                  <Image 
                    image={menu.reelBackgroundImage}
                    focalPoint={menu.reelBackgroundImage.hotspot}
                    layout="fill"
                    widthOverride={1200}
                    className={`absolute inset-0 w-full h-full z-0 object-cover object-center transition-all ease-custom duration-[450ms] ${currentHover == 'reel' ? 'opacity-100 scale-1' : 'scale-1 opacity-0' }`}
                  />
                </m.div>

                <div className="w-1/2 h-1/4 bg-white absolute top-0 right-0"></div>
              </div>

              <div className="md:ml-[43vw] mt-[18vh] md:mt-[23.7vh]">
                <nav className="border-t border-black">
                  <ul>
                    {/* <li className="block border-b border-black">
                      <Link href="/">
                        <a
                          onMouseEnter={() => updateCurrentHover('home')}
                          onMouseLeave={() => updateCurrentHover(null)}
                          className="text-5xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Home</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Home</span>
                          </m.span>
                        </a>
                      </Link>
                    </li> */}
                    <li className="hidden md:block border-b border-black">
                      <Link href="/work">
                        <a
                          onMouseEnter={() => updateCurrentHover('work')}
                          onMouseLeave={() => updateCurrentHover(null)}
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Work</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Work</span>
                          </m.span>
                        </a>
                      </Link>
                    </li>
                    <li className="hidden md:block border-b border-black">
                      <Link href="/studio">
                        <a
                          onMouseEnter={() => updateCurrentHover('studio')}
                          onMouseLeave={() => updateCurrentHover(null)}
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Studio</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Studio</span>
                          </m.span>
                        </a>
                      </Link>
                    </li>
                    <li className="hidden md:block border-b border-black">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/jasonbaileystudio"
                        onMouseEnter={() => updateCurrentHover('reel')}
                        onMouseLeave={() => updateCurrentHover(null)}
                        className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                      >
                        <m.span variants={revealDelay} className="block relative">
                          <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Insta</span>
                          <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Insta</span>
                        </m.span>
                      </a>
                    </li>
                    <li className="hidden md:block border-b border-black">
                        <a href={`mailto:${contact.email}`}
                          onMouseEnter={() => updateCurrentHover('home')}
                          onMouseLeave={() => updateCurrentHover(null)}
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Email</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Email</span>
                          </m.span>
                        </a>
                    </li>


                    <li className="block md:hidden border-b border-black">
                      <Link href="/work">
                        <a
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Work</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Work</span>
                          </m.span>
                        </a>
                      </Link>
                    </li>
                    <li className="block md:hidden border-b border-black">
                      <Link href="/studio">
                        <a
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Studio</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Studio</span>
                          </m.span>
                        </a>
                      </Link>
                    </li>
                    <li className="block md:hidden border-b border-black">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/jasonbaileystudio"
                        className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                      >
                        <m.span variants={revealDelay} className="block relative">
                          <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Insta</span>
                          <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Insta</span>
                        </m.span>
                      </a>
                    </li>
                    <li className="block md:hidden border-b border-black">
                        <a href={`mailto:${contact.email}`}
                          className="text-6xl md:text-[7vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.92] md:leading-[0.92] xl:leading-[0.92] 2xl:leading-[0.92] font-sans uppercase block relative overflow-hidden mt-2 mb-3 group"
                        >
                          <m.span variants={revealDelay} className="block relative">
                            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Email</span>
                            <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 text-orange">Email</span>
                          </m.span>
                        </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </m.main>

            <m.footer className="absolute bottom-0 left-0 right-0 z-10 p-3">
              <div className="md:ml-[43vw] grid grid-cols-5 items-end">
                {/* <div className="grid-col-1 hidden md:block">
                  <a href="https://www.instagram.com/jasonbaileystudio" className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] relative overflow-hidden group">
                    <m.span variants={revealDelayBottom} className="block relative">
                      <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms]">Instagram</span>
                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0">Instagram</span>
                    </m.span>
                  </a>
                </div> */}

                {/* <div className="grid-col-1 hidden md:block">
                  <a href="#" className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] relative overflow-hidden group">
                    <m.span variants={revealDelayBottom} className="block relative">
                      <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms] underline">Email Us</span>
                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 underline">Email Us</span>
                    </m.span>
                  </a>
                </div> */}

                <div className="grid-col-1 col-start-1 hidden md:block text-center">
                  {/* <Link href="/terms">
                    <a className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] relative overflow-hidden group">
                      <m.span variants={revealDelayBottom} className="block relative">
                        <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms] underline">Privacy</span>
                        <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] -translate-y-full group-hover:translate-y-0 underline">Privacy</span>
                      </m.span>
                    </a>
                  </Link> */}
                </div>

                <div className="col-span-3 col-start-1 block">
                  <a href="https://www.shiftwalk.studio/" rel="noopener noreferrer" target="_blank" className="block text-[13px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] relative overflow-hidden group">
                    <m.span variants={revealDelayBottom} className="flex space-x-1">
                      <span className="block">Site By</span><span className="underline relative">
                      <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-[450ms] underline">ShiftWalk</span>
                      <span className="block absolute inset-0 transition-transform ease-in-out duration-[450ms] underline -translate-y-full group-hover:translate-y-0">ShiftWalk</span>
                    </span></m.span>
                  </a>
                </div>

                {/* <div className="grid-col-1 col-start-5">
                  <Link href="/">
                    <a className="mb-1 md:mb-0 block w-[45px] md:w-[60px] ml-auto relative overflow-hidden">
                      <m.svg variants={revealDelayBottom} className="block w-full" viewBox="0 0 111 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9088 52.2402C27.7683 52.2402 33.8176 45.9723 33.8176 34.0924V0H23.4682V34.8212C23.4682 39.9959 21.5733 42.9112 16.9088 42.9112C12.3172 42.9112 10.3493 40.4332 10.3493 34.4568H0C0 46.3367 6.3408 52.2402 16.9088 52.2402Z" fill="#212121"/>
                        <path d="M36.9389 51.1366H53.3375C61.5733 51.1366 69.4446 45.7433 69.4446 35.6126C69.4446 29.3447 66.8208 24.8988 62.1563 22.7852V22.4937C64.7801 21.036 67.5496 17.8292 67.5496 12.6545C67.5496 4.3459 62.0106 0 52.9731 0H36.9389V51.1366ZM47.2882 18.6309V9.15616H52.6087C55.2325 9.15616 57.2003 10.4681 57.2003 13.8935C57.2003 17.4648 55.2325 18.6309 52.6087 18.6309H47.2882ZM47.2882 42.0992V27.0853H52.4629C56.4715 27.0853 59.0952 29.4904 59.0952 34.5922C59.0952 39.694 56.4715 42.0992 52.4629 42.0992H47.2882Z" fill="#212121"/>
                        <path d="M87.1158 51.5439C96.9549 51.5439 102.786 45.1334 102.786 36.679C102.786 28.8077 98.777 25.7279 89.5209 21.5735C83.0343 18.6582 81.5038 16.9819 81.5038 13.4836C81.5038 10.4225 83.7632 8.45465 87.0429 8.45465C90.9786 8.45465 92.7277 10.714 92.7277 13.9209H102.421C102.348 5.75799 97.3922 0.000251422 87.0429 0.000251422C78.5885 0.000251422 71.8833 4.30033 71.8833 13.7751C71.8833 20.6261 76.7664 25.0178 83.9089 28.1517C90.4684 30.9942 93.165 32.962 93.165 36.679C93.165 40.5418 90.4684 42.3639 87.1158 42.3639C82.597 42.3639 80.6292 39.3028 80.2648 35.1485H70.7172C71.3002 45.6436 77.3495 51.5439 87.1158 51.5439Z" fill="#212121"/>
                        <path d="M106.826 0C104.505 0 102.642 1.70285 102.642 4.19591C102.642 6.66671 104.505 8.35843 106.826 8.35843C109.136 8.35843 111 6.66671 111 4.19591C111 1.70285 109.136 0 106.826 0ZM106.826 7.59048C104.952 7.59048 103.501 6.21039 103.501 4.19591C103.501 2.14804 104.952 0.779082 106.826 0.779082C108.735 0.779082 110.152 2.14804 110.152 4.19591C110.152 6.21039 108.735 7.59048 106.826 7.59048ZM107.931 4.79692C107.775 5.40905 107.317 5.63165 106.815 5.63165C106.157 5.63165 105.677 5.11968 105.677 4.10687C105.677 3.1052 106.168 2.61549 106.815 2.61549C107.362 2.61549 107.775 2.96051 107.909 3.56152L108.835 3.30553C108.623 2.45967 107.92 1.82528 106.849 1.82528C105.521 1.82528 104.673 2.70453 104.673 4.10687C104.673 5.52035 105.443 6.42186 106.815 6.42186C107.92 6.42186 108.623 5.79859 108.869 5.03064L107.931 4.79692Z" fill="#212121"/>
                      </m.svg>
                    </a>
                  </Link>
                </div> */}
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