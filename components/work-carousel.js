import Link from 'next/link'
import Image from '@/components/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from 'react'


export default function WorkCarousel({ work }) {
  const { scroll } = useLocomotiveScroll()
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (scroll) {
      scroll.on('call', function(e) {
        setCurrent(e)
      });
    }
  }, [scroll])

  return (
    <div className="grid grid-cols-9">
      <div className="fixed top-0 left-0 w-[66.75vw]" data-scroll data-scroll-sticky data-scroll-target="#sticky">
        <div className="h-screen flex flex-col flex-wrap relative p-3">
          <div className="w-full flex space-x-6 items-center pb-3">
            <div className="w-8/12 flex space-x-6">
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">All</span>
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">Drinks</span>
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">Food</span>
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">Lifestyle</span>
            </div>
            <div className="w-4/12 justify-end flex space-x-6">
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">All</span>
              <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">Drinks</span>
            </div>
          </div>
          
          <Link href={`/work/${work[current].slug.current}`}>
            <a className="w-full flex-1 group">
              <div className="h-[70vh] relative overflow-hidden mb-1">
                <Image
                  image={work[current].images[0]}
                  widthOverride={550}
                  layout="fill"
                  className="w-full h-full transition-transform ease-in-out duration-200 group-hover:scale-110"
                  alt={work[current].title}
                />
              </div>

              <div className="w-full grid grid-cols-6">
                <div className="col-span-1">
                  <span className="block leading-none text-sm">JBS.{current < 10 && ('0')}{current}</span>
                </div>
                <div className="col-span-1">
                  <span className="block leading-none text-sm">{work[current].title}</span>
                </div>
                <div className="col-span-2">
                  <span className="block leading-none text-sm">Ready to drink campaign</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="block leading-none text-sm">London, UK</span>
                </div>
                <div className="col-span-1 text-right">
                  <span className="block leading-none text-sm underline">Case Study</span>
                </div>
              </div>
            </a>
          </Link>
          
          <div className="w-full flex items-end">
            <Link href="/">
              <a className="w-[33px] md:w-[48px]">
                <svg className="w-full" viewBox="0 0 111 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9088 52.2402C27.7683 52.2402 33.8176 45.9723 33.8176 34.0924V0H23.4682V34.8212C23.4682 39.9959 21.5733 42.9112 16.9088 42.9112C12.3172 42.9112 10.3493 40.4332 10.3493 34.4568H0C0 46.3367 6.3408 52.2402 16.9088 52.2402Z" fill="#212121"/>
                  <path d="M36.9389 51.1366H53.3375C61.5733 51.1366 69.4446 45.7433 69.4446 35.6126C69.4446 29.3447 66.8208 24.8988 62.1563 22.7852V22.4937C64.7801 21.036 67.5496 17.8292 67.5496 12.6545C67.5496 4.3459 62.0106 0 52.9731 0H36.9389V51.1366ZM47.2882 18.6309V9.15616H52.6087C55.2325 9.15616 57.2003 10.4681 57.2003 13.8935C57.2003 17.4648 55.2325 18.6309 52.6087 18.6309H47.2882ZM47.2882 42.0992V27.0853H52.4629C56.4715 27.0853 59.0952 29.4904 59.0952 34.5922C59.0952 39.694 56.4715 42.0992 52.4629 42.0992H47.2882Z" fill="#212121"/>
                  <path d="M87.1158 51.5439C96.9549 51.5439 102.786 45.1334 102.786 36.679C102.786 28.8077 98.777 25.7279 89.5209 21.5735C83.0343 18.6582 81.5038 16.9819 81.5038 13.4836C81.5038 10.4225 83.7632 8.45465 87.0429 8.45465C90.9786 8.45465 92.7277 10.714 92.7277 13.9209H102.421C102.348 5.75799 97.3922 0.000251422 87.0429 0.000251422C78.5885 0.000251422 71.8833 4.30033 71.8833 13.7751C71.8833 20.6261 76.7664 25.0178 83.9089 28.1517C90.4684 30.9942 93.165 32.962 93.165 36.679C93.165 40.5418 90.4684 42.3639 87.1158 42.3639C82.597 42.3639 80.6292 39.3028 80.2648 35.1485H70.7172C71.3002 45.6436 77.3495 51.5439 87.1158 51.5439Z" fill="#212121"/>
                  <path d="M106.826 0C104.505 0 102.642 1.70285 102.642 4.19591C102.642 6.66671 104.505 8.35843 106.826 8.35843C109.136 8.35843 111 6.66671 111 4.19591C111 1.70285 109.136 0 106.826 0ZM106.826 7.59048C104.952 7.59048 103.501 6.21039 103.501 4.19591C103.501 2.14804 104.952 0.779082 106.826 0.779082C108.735 0.779082 110.152 2.14804 110.152 4.19591C110.152 6.21039 108.735 7.59048 106.826 7.59048ZM107.931 4.79692C107.775 5.40905 107.317 5.63165 106.815 5.63165C106.157 5.63165 105.677 5.11968 105.677 4.10687C105.677 3.1052 106.168 2.61549 106.815 2.61549C107.362 2.61549 107.775 2.96051 107.909 3.56152L108.835 3.30553C108.623 2.45967 107.92 1.82528 106.849 1.82528C105.521 1.82528 104.673 2.70453 104.673 4.10687C104.673 5.52035 105.443 6.42186 106.815 6.42186C107.92 6.42186 108.623 5.79859 108.869 5.03064L107.931 4.79692Z" fill="#212121"/>
                </svg>
              </a>
            </Link>
            
            <Link href={`/work/${work[current].slug.current}`}>
              <a className="block">
                <h1 className="text-5xl md:text-[6.5vw] xl:text-[7vw] 2xl:text-[7.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase mb-[-5px] md:mb-[-0.78vw] ml-2 md:ml-8">{work[current].title}</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-3 col-start-7 p-3 pl-0 -mt-8 flex justify-center">
        <div className="w-9/12">
          {work.map((e, i) => {
            let width = 'w-11/12'
            
            if (e.images[0].asset.metadata.dimensions.height > e.images[0].asset.metadata.dimensions.width) {
              width = 'w-[51%]'
            } else if (i % 2 === 0) {
              width = 'w-9/12'
            } else if (i % 3 === 0) {
              width = 'w-1/3'
            }
            return (
              <li className={`block mb-16 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%" onClick={() => setCurrent(i)}>
                { e.images && (
                  <div>
                    <Image
                      image={e.images[0]}
                      className="w-full"
                      widthOverride={340}
                      alt={e.title}
                    />
                  </div>
                )}
              </li>
            )
          })}
          {work.map((e, i) => {
            let width = 'w-11/12'
            
            if (e.images[0].asset.metadata.dimensions.height > e.images[0].asset.metadata.dimensions.width) {
              width = 'w-[51%]'
            } else if (i % 2 === 0) {
              width = 'w-9/12'
            } else if (i % 3 === 0) {
              width = 'w-1/3'
            }
            return (
              <li className={`block mb-16 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%" onClick={() => setCurrent(i)}>
                { e.images && (
                  <div>
                    <Image
                      image={e.images[0]}
                      className="w-full"
                      widthOverride={340}
                      alt={e.title}
                    />
                  </div>
                )}
              </li>
            )
          })}
          {work.map((e, i) => {
            let width = 'w-11/12'
            
            if (e.images[0].asset.metadata.dimensions.height > e.images[0].asset.metadata.dimensions.width) {
              width = 'w-[51%]'
            } else if (i % 2 === 0) {
              width = 'w-9/12'
            } else if (i % 3 === 0) {
              width = 'w-1/3'
            }
            return (
              <li className={`block mb-16 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%" onClick={() => setCurrent(i)}>
                { e.images && (
                  <div>
                    <Image
                      image={e.images[0]}
                      className="w-full"
                      widthOverride={340}
                      alt={e.title}
                    />
                  </div>
                )}
              </li>
            )
          })}
          {work.map((e, i) => {
            let width = 'w-11/12'
            
            if (e.images[0].asset.metadata.dimensions.height > e.images[0].asset.metadata.dimensions.width) {
              width = 'w-[51%]'
            } else if (i % 2 === 0) {
              width = 'w-9/12'
            } else if (i % 3 === 0) {
              width = 'w-1/3'
            }
            return (
              <li className={`block mb-16 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%" onClick={() => setCurrent(i)}>
                { e.images && (
                  <div>
                    <Image
                      image={e.images[0]}
                      className="w-full"
                      widthOverride={340}
                      alt={e.title}
                    />
                  </div>
                )}
              </li>
            )
          })}
          {work.map((e, i) => {
            let width = 'w-11/12'
            
            if (e.images[0].asset.metadata.dimensions.height > e.images[0].asset.metadata.dimensions.width) {
              width = 'w-[51%]'
            } else if (i % 2 === 0) {
              width = 'w-9/12'
            } else if (i % 3 === 0) {
              width = 'w-1/3'
            }
            return (
              <li className={`block mb-16 ${width}`} key={i} data-scroll data-scroll-repeat data-scroll-call={i} data-scroll-offset="80%, 20%" onClick={() => setCurrent(i)}>
                { e.images && (
                  <div>
                    <Image
                      image={e.images[0]}
                      className="w-full"
                      widthOverride={340}
                      alt={e.title}
                    />
                  </div>
                )}
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}