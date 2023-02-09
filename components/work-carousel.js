import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from '@/components/image'
import { AnimatePresence, m } from 'framer-motion'
import { revealDelay, reveal, scaleDelay } from '@/helpers/transitions'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import ProgressBar from './progress-bar'

export default function WorkCarousel({ work, currentCat, currentType }) {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const { scroll } = useLocomotiveScroll()

  // function filterScrollUpdate() {
  //   scroll.update()
  //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
  // }

  function updateCurrent(e) {
    setCurrent(e)
    setHovering(true)
  }

  // useEffect(() => {
  //   if (scroll) {
  //     scroll.on('call', function(e) {
  //       setCurrent(e)
  //     });
  //   }
  // }, [scroll])

  return (
    <>
    <div className="grid grid-cols-9" id="sticky">
      <div className="fixed top-0 left-0 w-[85vw] md:w-[66.75vw]" data-scroll data-scroll-sticky data-scroll-target="#sticky">
      <Link href={`/work/${work[current].slug.current}`}>
        <a className="h-screen flex-col flex-wrap relative p-3 hidden md:flex group">  
          <div className="hidden md:flex w-full pb-3 md:pt-[12vw] xl:pt-[7.5vw] 2xl:pt-[5vw]">
            
            <div className="block overflow-hidden w-full">

              <AnimatePresence initial={false}>
                <span className="block overflow-hidden relative w-full">
                  <h1 className="text-5xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-[1.12] md:leading-[1.12] xl:leading-[1.12] 2xl:leading-[1.12] font-sans uppercase mb-[-5px] md:mb-[-1vw] relative overflow-hidden block w-full ml-[-0.3vw]">
                    {work.map((e, i) => {
                      return i == current ? (
                        <m.span
                          key={i}
                          className="block"
                          initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          animate={{ y: 0, transition: { delay: 0.15, duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
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

                  <h2 className="text-2xl xl:text-3xl leading-1 md:leading-1 xl:leading-[1.2] 2xl:leading-[1.2] font-sans uppercase mb-[0px] md:mb-[0px] relative overflow-hidden block w-full mt-3">
                    {work.map((e, i) => {
                      return i == current ? (
                        <m.span
                          key={i}
                          className="block"
                          initial={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          animate={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          exit={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                        >
                          {e.campaignTitle && (<>{e.campaignTitle} &bull; </>)}{e.type.replace(/-/g, ' ').replace(/and/g, '&').replace(/moving/g, 'motion').replace(/still/g, 'stills')}
                        </m.span>
                      ) : (
                        <m.span
                          key={i}
                          className="absolute inset-0"
                          initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                          exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                        >
                          {e.campaignTitle && (<>{e.campaignTitle} &bull; </>)}{e.type.replace(/-/g, ' ').replace(/and/g, '&').replace(/moving/g, 'motion').replace(/still/g, 'stills')}
                        </m.span>
                      )
                    })}
                  </h2>
                </span>
              </AnimatePresence>

            </div>
          </div>

          <div className="hidden md:block w-full flex-1">
            <div className="w-full h-full block">
                <div className="w-full h-full flex flex-col">
                  <div className="flex-1 relative overflow-hidden mb-1">
                    <m.div variants={scaleDelay} className="w-full h-full">
                      <Image
                        image={work[current].teaserImage}
                        widthOverride={1400}
                        layout="fill"
                        className="w-full h-full transition-transform ease-in-out duration-[500ms] group-hover:scale-[1.02]"
                        alt={work[current].title}
                      />
                    </m.div>
                  </div>

                  <div className="w-full grid grid-cols-6 pt-2 h-auto">
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
                                  JBS.{(i + 1) < 10 && ('0')}{i + 1}
                                </m.span>
                              ) : (
                                <m.span
                                  key={i}
                                  className="absolute inset-0"
                                  initial={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  animate={{ y: '100%', transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                  exit={{ y: 0, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
                                >
                                  JBS.{(i + 1) < 10 && ('0')}{i + 1}
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
                    <div className="col-span-2 text-right">
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
                    {/* <div className="col-span-1 text-right">
                      <span className="block leading-none text-sm overflow-hidden underline">
                        <m.span className="block" variants={reveal}>Case Study</m.span>
                      </span>
                    </div> */}
                  </div>
                </div>
            </div>
          </div>
        
        </a>
        </Link>
      </div>
      <div className="col-span-9 md:col-span-3 md:col-start-7 flex justify-center p-3">
        <div className="w-full md:w-9/12">
          <div className="pt-[16vw] md:pt-[10vw] pb-[15vw]">
            {[...Array(1)].map((index) => ( 
              <div key={index}>
                {work.map((e, i) => {
                  let width = 'w-full md:w-[75%] mx-auto'
                  
                  if (e.teaserImageThumbnail.asset.metadata.dimensions.height > e.teaserImageThumbnail.asset.metadata.dimensions.width) {
                    width = 'w-full md:w-[65%] mr-auto'
                  } else if (i % 2 === 0) {
                    width = 'w-full md:w-[75%] ml-auto'
                  } else if (i % 3 === 0) {
                    width = 'w-full md:w-[75%] mr-auto'
                  }
                  let active = 'md:opacity-100'

                  if (current == i && hovering) {
                    active = 'md:opacity-100'
                  }

                  if (current !== i && hovering) {
                    active = 'md:opacity-30 md:grayscale'
                  }

                  if (!hovering) {
                    active = 'md:opacity-100'
                  }
                  
                  return (currentType == 'all') ? (
                    <li className={`block mb-12 md:mb-[7vw] transition-all ease-in-out duration-[450ms] ${width} opacity-100 ${active}`} key={i} onMouseEnter={() => updateCurrent(i)}>
                      { e.teaserImageThumbnail && (
                        <>
                        <Link href={`/work/${e.slug.current}`}>
                          <a className="hidden md:block">
                            <m.div variants={scaleDelay} className="w-full h-full">
                              <Image
                                image={e.teaserImageThumbnail}
                                className="w-full"
                                widthOverride={650}
                                alt={e.title}
                              />
                              <div className="overflow-hidden relative">
                                <span className={`block text-right text-sm mt-1 transition-transform ease-in-out duration-[450ms] ${current == i ? 'translate-y-0' : 'translate-y-full'}`}>{e.title}{e.campaignTitle && (<> — {e.campaignTitle}</>)}</span>
                              </div>
                            </m.div>
                          </a>
                        </Link>
                        <Link href={`/work/${e.slug.current}`}>
                          <a className="w-full block md:hidden group">
                            <div className="h-[55vw] md:h-[75vw] relative overflow-hidden mb-1">
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

                            <div className="w-full grid-cols-6 mt-2 mb-1 hidden md:grid">
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

                            <h1 className="text-xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase md:hidden">{e.campaignTitle && (<>{e.campaignTitle} &bull; </>)}{e.type.replace(/-/g, ' ').replace(/and/g, '&').replace(/moving/g, 'motion').replace(/still/g, 'stills')}</h1>
                            
                          </a>
                        </Link>
                        </>
                      )}
                    </li>
                  ) : (
                    <>
                      {(e.type == currentType || e.type == 'still-and-moving') && (
                        <li className={`block mb-8 md:mb-[7vw] transition-all ease-in-out duration-[450ms]  ${width} ${current == i ? 'opacity-100 md:border md:p-4 md:border-black md:border-opacity-[0.15]' : 'md:opacity-100 border-opacity-0  p-0'}`} key={i} onMouseOver={() => setCurrent(i)}>
                        { e.teaserImageThumbnail && (
                          <>
                          <Link href={`/work/${e.slug.current}`}>
                            <a.div variants={scaleDelay} className="w-full h-full hidden md:block">
                              <Image
                                image={e.teaserImageThumbnail}
                                className="w-full"
                                widthOverride={650}
                                alt={e.title}
                              />
                            </a.div>
                          </Link>
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
                      )}
                    </>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}