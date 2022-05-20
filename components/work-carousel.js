import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from '@/components/image'
import { AnimatePresence, m } from 'framer-motion'
import { revealDelay, reveal, scaleDelay } from '@/helpers/transitions'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function WorkCarousel({ work, currentCat, currentType }) {
  const [current, setCurrent] = useState(0);
  const { scroll } = useLocomotiveScroll()

  function filterScrollUpdate() {
    scroll.update()
    scroll.scrollTo(0, { duration: 0, disableLerp: true })
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        setCurrent(e)
      });
    }
  }, [scroll])

  return (
    <div className="grid grid-cols-9" id="sticky">
      <div className="fixed top-0 left-0 w-[85vw] md:w-[66.75vw]" data-scroll data-scroll-sticky data-scroll-target="#sticky">
        <div className="h-screen flex-col flex-wrap relative p-3 hidden md:flex pt-[2vw]">
          <div className="hidden md:block w-full flex-1">
            <div className="w-full block group">
              <Link href={`/work/${work[current].slug.current}`}>
                <a className="w-full block group">
                  <div className="h-[70vh] relative overflow-hidden mb-1">
                    <m.div variants={scaleDelay} className="w-full h-full">
                      <Image
                        image={work[current].teaserImage}
                        widthOverride={1400}
                        layout="fill"
                        className="w-full h-full transition-transform ease-in-out duration-[350ms] group-hover:scale-[1.05]"
                        alt={work[current].title}
                      />
                    </m.div>
                  </div>

                  <div className="w-full grid grid-cols-6">
                    <div className="col-span-1">
                      <span className="block leading-none text-sm overflow-hidden w-full">
                        <AnimatePresence>
                          <span className="block overflow-hidden relative w-full">
                            {work.map((e, i) => {
                              return i == current ? (
                                <m.span
                                  key={i}
                                  className="block"
                                  initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  JBS.{i < 10 && ('0')}{i}
                                </m.span>
                              ) : (
                                <m.span
                                  key={i}
                                  className="absolute inset-0"
                                  initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  JBS.{i < 10 && ('0')}{i}
                                </m.span>
                              )
                            })}
                          </span>
                        </AnimatePresence>
                      </span>
                    </div>
                    <div className="col-span-1">
                      <span className="block leading-none text-sm overflow-hidden w-full">
                        <AnimatePresence>
                          <span className="block overflow-hidden relative w-full">
                            {work.map((e, i) => {
                              return i == current ? (
                                <m.span
                                  key={i}
                                  className="block"
                                  initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.title}
                                </m.span>
                              ) : (
                                <m.span
                                  key={i}
                                  className="absolute inset-0"
                                  initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.title}
                                </m.span>
                              )
                            })}
                          </span>
                        </AnimatePresence>
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="block leading-none text-sm overflow-hidden w-full">
                        <AnimatePresence>
                          <span className="block overflow-hidden relative w-full">
                            {work.map((e, i) => {
                              return i == current ? (
                                <m.span
                                  key={i}
                                  className="block"
                                  initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.campaignTitle}
                                </m.span>
                              ) : (
                                <m.span
                                  key={i}
                                  className="absolute inset-0"
                                  initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.campaignTitle}
                                </m.span>
                              )
                            })}
                          </span>
                        </AnimatePresence>

                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <span className="block leading-none text-sm overflow-hidden w-full">
                        <AnimatePresence>
                          <span className="block overflow-hidden relative w-full">
                            {work.map((e, i) => {
                              return i == current ? (
                                <m.span
                                  key={i}
                                  className="block"
                                  initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.location}
                                </m.span>
                              ) : (
                                <m.span
                                  key={i}
                                  className="absolute inset-0"
                                  initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  {e.location}
                                </m.span>
                              )
                            })}
                          </span>
                        </AnimatePresence>
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <span className="block leading-none text-sm overflow-hidden underline">
                        <m.span className="block" variants={reveal}>Case Study</m.span>
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex w-full items-end">
            <Link href="/">
              <a className="w-[33px] md:w-[48px] overflow-hidden">
                <m.span className="block" variants={reveal}>
                  <svg className="w-full" viewBox="0 0 111 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9088 52.2402C27.7683 52.2402 33.8176 45.9723 33.8176 34.0924V0H23.4682V34.8212C23.4682 39.9959 21.5733 42.9112 16.9088 42.9112C12.3172 42.9112 10.3493 40.4332 10.3493 34.4568H0C0 46.3367 6.3408 52.2402 16.9088 52.2402Z" fill="#212121"/>
                    <path d="M36.9389 51.1366H53.3375C61.5733 51.1366 69.4446 45.7433 69.4446 35.6126C69.4446 29.3447 66.8208 24.8988 62.1563 22.7852V22.4937C64.7801 21.036 67.5496 17.8292 67.5496 12.6545C67.5496 4.3459 62.0106 0 52.9731 0H36.9389V51.1366ZM47.2882 18.6309V9.15616H52.6087C55.2325 9.15616 57.2003 10.4681 57.2003 13.8935C57.2003 17.4648 55.2325 18.6309 52.6087 18.6309H47.2882ZM47.2882 42.0992V27.0853H52.4629C56.4715 27.0853 59.0952 29.4904 59.0952 34.5922C59.0952 39.694 56.4715 42.0992 52.4629 42.0992H47.2882Z" fill="#212121"/>
                    <path d="M87.1158 51.5439C96.9549 51.5439 102.786 45.1334 102.786 36.679C102.786 28.8077 98.777 25.7279 89.5209 21.5735C83.0343 18.6582 81.5038 16.9819 81.5038 13.4836C81.5038 10.4225 83.7632 8.45465 87.0429 8.45465C90.9786 8.45465 92.7277 10.714 92.7277 13.9209H102.421C102.348 5.75799 97.3922 0.000251422 87.0429 0.000251422C78.5885 0.000251422 71.8833 4.30033 71.8833 13.7751C71.8833 20.6261 76.7664 25.0178 83.9089 28.1517C90.4684 30.9942 93.165 32.962 93.165 36.679C93.165 40.5418 90.4684 42.3639 87.1158 42.3639C82.597 42.3639 80.6292 39.3028 80.2648 35.1485H70.7172C71.3002 45.6436 77.3495 51.5439 87.1158 51.5439Z" fill="#212121"/>
                    <path d="M106.826 0C104.505 0 102.642 1.70285 102.642 4.19591C102.642 6.66671 104.505 8.35843 106.826 8.35843C109.136 8.35843 111 6.66671 111 4.19591C111 1.70285 109.136 0 106.826 0ZM106.826 7.59048C104.952 7.59048 103.501 6.21039 103.501 4.19591C103.501 2.14804 104.952 0.779082 106.826 0.779082C108.735 0.779082 110.152 2.14804 110.152 4.19591C110.152 6.21039 108.735 7.59048 106.826 7.59048ZM107.931 4.79692C107.775 5.40905 107.317 5.63165 106.815 5.63165C106.157 5.63165 105.677 5.11968 105.677 4.10687C105.677 3.1052 106.168 2.61549 106.815 2.61549C107.362 2.61549 107.775 2.96051 107.909 3.56152L108.835 3.30553C108.623 2.45967 107.92 1.82528 106.849 1.82528C105.521 1.82528 104.673 2.70453 104.673 4.10687C104.673 5.52035 105.443 6.42186 106.815 6.42186C107.92 6.42186 108.623 5.79859 108.869 5.03064L107.931 4.79692Z" fill="#212121"/>
                  </svg>
                </m.span>
              </a>
            </Link>
            
            <Link href={`/work/${work[current].slug.current}`}>
              <a className="block overflow-hidden group w-full">

              <AnimatePresence>
                <span className="block overflow-hidden relative w-full">
                  <h1 className="text-5xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-1 md:leading-1 xl:leading-1 2xl:leading-1 font-sans uppercase mb-[-5px] md:mb-[-0.78vw] ml-2 md:ml-8 relative overflow-hidden block w-full">
                    {work.map((e, i) => {
                      return i == current ? (
                        <m.span
                          key={i}
                          className="block"
                          initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                        >
                          {e.title}
                        </m.span>
                      ) : (
                        <m.span
                          key={i}
                          className="absolute inset-0"
                          initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                        >
                          {e.title}
                        </m.span>
                      )
                    })}
                  </h1>
                </span>
              </AnimatePresence>

              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-9 md:col-span-3 md:col-start-7 flex justify-center p-3">
        <div className="w-full md:w-9/12">
          <div className="pt-[15vw] pb-[25vw]">
            {[...Array(5)].map((index) => ( 
              <div key={index}>
                {work.map((e, i) => {
                  let width = 'w-full md:w-[60%] mx-auto'
                  
                  if (e.teaserImageThumbnail.asset.metadata.dimensions.height > e.teaserImageThumbnail.asset.metadata.dimensions.width) {
                    width = 'w-full md:w-[40%] mr-auto'
                  } else if (i % 2 === 0) {
                    width = 'w-full md:w-[50%] ml-auto'
                  } else if (i % 3 === 0) {
                    width = 'w-full md:w-[50%] mr-auto'
                  }
                  
                  return (e.category == currentCat || currentCat == 'all') & (e.type == currentType || currentType == 'all') ? (
                    <li className={`block mb-8 md:mb-[7vw] transition-all ease-in-out duration-300  ${width} ${current == i ? 'opacity-100 md:border md:p-4 md:border-black md:border-opacity-[0.15]' : 'md:opacity-50 border-opacity-0 md:grayscale p-0'}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="60%, 40%" onClick={() => setCurrent(i)}>
                      { e.teaserImageThumbnail && (
                        <>
                        <div className="hidden md:block">
                          <m.div variants={scaleDelay} className="w-full h-full">
                            <Image
                              image={e.teaserImageThumbnail}
                              className="w-full"
                              widthOverride={800}
                              alt={e.title}
                            />
                          </m.div>
                        </div>
                        <Link href={`/work/${e.slug.current}`}>
                          <a className="w-full block md:hidden group">
                            <div className="h-[75vw] relative overflow-hidden mb-1">
                              <m.div variants={scaleDelay} className="w-full h-full">
                                <Image
                                  image={e.teaserImage}
                                  widthOverride={1400}
                                  layout="fill"
                                  className="w-full h-full transition-transform ease-in-out duration-200 group-hover:scale-110"
                                  alt={e.title}
                                />
                              </m.div>
                            </div>

                            <div className="w-full grid grid-cols-6 mt-2 mb-1">
                              <div className="col-span-1">
                                <span className="block leading-none text-xs">JBS.{i < 10 && ('0')}{i}</span>
                              </div>
                              <div className="col-span-3 col-start-3">
                                <span className="block leading-none text-xs">{e.campaignTitle}</span>
                              </div>
                              <div className="col-span-1 text-right col-start-8">
                                <span className="block leading-none text-xs">{e.location}</span>
                              </div>
                            </div>

                            <h1 className="text-5xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">{e.title}</h1>
                          </a>
                        </Link>
                        </>
                      )}
                    </li>
                  ) : (
                    null
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}