import { useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'

const query = `{
  "reel": *[_type == "reel"][0]{
    title,
    images[] {
      asset-> {
        ...
      },
      alt,
      caption
    },
  },
}`

const pageService = new SanityPageService(query)

export default function Reel(initialData) {
  const { data: { reel } } = pageService.getPreviewHook(initialData)()
  const [stackClass, setStackClass] = useState('image-stack-in')

  useEffect(() => {
    const intervalId = setInterval(() => { 
      setStackClass(stackClass === 'image-stack-in' ? 'image-stack-out' : 'image-stack-in')
    }, 6000);
  
    return () => clearInterval(intervalId);
  }, [stackClass])

  return (
    <Layout>
      <NextSeo title="Reel" />
      <div className="relative h-screen">

        <div className="absolute bottom-0 left-0 right p-3 z-20">
          <Link href="/menu"><a className={`text-sm md:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.65vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase`}>
            <span className="block">Close</span>
          </a></Link>
        </div>

        <div className="p-3">
          
          <LazyMotion features={domAnimation}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <m.main className="mt-[25vh]">
                <article>
                  <div className="grid grid-cols-9 p-3">
                    <div className="col-span-6">
                      <svg className="w-[31px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></svg>
                    </div>

                    <div className="col-span-2">
                      <svg className="w-[30px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></svg>
                    </div>
                    
                    <div className="col-span-1 text-right">
                      <svg className="w-[30px] md:w-[5.7vw] xl:w-[5.2vw] fill-current ml-auto" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></svg>
                    </div>
                  </div>


                  <div className="absolute inset-0 flex flex-wrap items-center justify-center">
                    <div className="w-[70vw] h-[80vh] relative">
                      <div className="fixed top-0 left-0 bg-black text-white block z-100">{stackClass}</div>
                      {reel.images.map((e, i) => {
                        let wrapper = 'w-[90%] z-0'
                        let innerWrapper = 'h-[70vh] z-0'
                        
                        if (i === 0) {
                          wrapper = 'w-10/12 top-auto bottom-0 right-0 z-0'
                          innerWrapper = 'h-[85%] mt-auto'
                        } else if (i === 1) {
                          wrapper = 'w-10/12 top-0 left-0 z-10'
                          innerWrapper = 'h-[85%]'
                        } else if (i === 2) {
                          wrapper = 'w-full z-20 inset-0'
                          innerWrapper = 'w-[75%] h-[70%] m-auto rotate-[7deg]'
                        } else if (i === 3) {
                          wrapper = 'w-8/12 z-30 bottom-0 right-0'
                          innerWrapper = 'h-[65%] mt-auto rotate-[-2deg] translate-x-[1.5vw] translate-y-[1.5vw]'
                        } else if (i === 4) {
                          wrapper = 'w-8/12 z-40 top-0 left-0'
                          innerWrapper = 'h-[65%] mb-auto rotate-[2deg] translate-x-[-1.5vw] translate-y-[-1.5vw]'
                        } else if (i === 5) {
                          wrapper = 'w-full z-50 inset-0'
                          innerWrapper = 'w-[75%] h-[70%] m-auto rotate-[2deg]'
                        }
                        
                        return (
                          <div key={i} className={`${wrapper} h-full absolute flex flex-wrap opacity-0 ${stackClass} ${stackClass}-${i}`}>
                            <div className={`${innerWrapper} w-full relative overflow-hidden`}>
                              <Image
                                image={e}
                                className="w-full inset-0 h-full"
                                layout="fill"
                                widthOverride={1000}
                                alt={e.title}
                              />
                              <span className="block absolute top-0 left-0 bg-black text-white">Image {i}</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </article>
              </m.main>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}