import Link from "next/link";
import HashGridAnimated from "@/components/hash-grid-animated";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect, useState } from "react";

export default function Footer({ contact }) {
  const { scroll } = useLocomotiveScroll()
  let [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        if (progress > 98) {
          setShowLogo(true)
        } else {
          setShowLogo(false)
        } 
      })
    }
  }, [scroll, showLogo])
  
  return (
    <footer className="relative">
      <div className="w-full h-[70vw] md:h-[50vw]">
        <HashGridAnimated />
      </div>

      <div className="grid grid-cols-9 items-end p-3 relative z-10">
        <div className="col-span-1">
          <div className="relative overflow-hidden">
            <svg className={`w-[31px] md:w-[41px] xl:w-[51px] fill-current transition-transform ease-custom duration-[800ms] delay-[0ms] ${showLogo ? 'translate-x-0' : 'translate-x-[-110%]' }`} viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></svg>
          </div>
        </div>

        <div className="col-span-1 col-start-2 hidden md:block">
          <Link href="/">
            <a className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] underline mb-1 relative overflow-hidden group">
              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Home</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0 underline">Home</span>
            </a>
          </Link>
          <Link href="/studio">
            <a className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] underline mb-1 relative overflow-hidden group">
              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Studio</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0 underline">Studio</span>
            </a>
          </Link>
          <Link href="/work">
            <a className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] underline mb-1 relative overflow-hidden group">
              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Work</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0 underline">Work</span>
            </a>
          </Link>
          <Link href="/terms">
            <a className="block text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[13px] leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] underline mb-1 relative overflow-hidden group">
              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Privacy</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full group-hover:translate-y-0 underline">Privacy</span>
            </a>
          </Link>
        </div>

        <div className="col-span-2 col-start-3 -ml-6 md:ml-0 md:col-start-3 xl:col-start-4 flex space-x-4">
          <a href={`mailto:${contact.email}`} className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-[1.1] md:leading-[1.1] xl:leading-[1.1] 2xl:leading-[1.1] font-sans uppercase underline relative group overflow-hidden">
            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Contact</span>
            <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full underline group-hover:translate-y-0">Contact</span>  
          </a>

          {contact.socials.map((e, i) => {
            return e.title === 'Instagram' && (
              <a key={i} href={e.url} rel="noreferrer noopener" target="_blank" className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl leading-[1.1] md:leading-[1.1] xl:leading-[1.1] 2xl:leading-[1.1] font-sans uppercase underline hidden group md:block relative overflow-hidden"><span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Instagram</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full underline group-hover:translate-y-0">Instagram</span></a>
            )
          })}
        </div>

        {/* <div className="col-span-1 col-start-6 hidden md:flex">
          <Link href="/reel"><a className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl leading-[1.1] md:leading-[1.1] xl:leading-[1.1] 2xl:leading-[1.1] font-sans uppercase underline relative overflow-hidden group">
            <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300">Reel</span>
            <span className="block absolute inset-0 transition-transform ease-in-out duration-300 -translate-y-full underline group-hover:translate-y-0">Reel</span>
          </a></Link>
        </div> */}

        <div className="col-span-1 col-start-6 md:col-start-7">
          <div className="relative overflow-hidden">
            <svg className={`w-[30px] md:w-[40px] xl:w-[50px] fill-current transition-transform ease-custom duration-[800ms] delay-[60ms] ${showLogo ? 'translate-x-0' : 'translate-x-[-110%]' }`} viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></svg>
          </div>
        </div>
        
        <div className="col-span-2 md:col-span-1 col-start-7 md:col-start-8">
          <a href="#" className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.95] md:leading-[0.95] lg:leading-[0.95] 2xl:leading-[0.95] relative overflow-hidden group">
            <span className="flex space-x-1">
              <span className="block">By</span><span className="underline relative">
              <span className="block group-hover:translate-y-full transition-transform ease-in-out duration-300 underline">ShiftWalk</span>
              <span className="block absolute inset-0 transition-transform ease-in-out duration-300 underline -translate-y-full group-hover:translate-y-0">ShiftWalk</span>
            </span></span>
          </a>
        </div>
        
        <div className="col-span-1 col-start-9 text-right flex">
          <div className="relative overflow-hidden ml-auto">
            <svg className={`w-[30px] md:w-[40px] xl:w-[50px] fill-current ml-auto transition-transform ease-custom duration-[800ms] delay-[120ms] ${showLogo ? 'translate-x-0' : 'translate-x-[-110%]' }`} viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></svg>
          </div>
        </div>
      </div>
    </footer>
  )
}