// import { useLocomotiveScroll } from 'react-locomotive-scroll'
// import { useEffect, useState } from "react";

export default function HashGridAnimated() {
  // const { scroll } = useLocomotiveScroll()
  // let [showLogo, setShowLogo] = useState(false)

  // useEffect(() => {
  //   if (scroll) {
  //     scroll.on('scroll', ({ limit, scroll }) => {
  //       const progress = scroll.y / limit.y * 100
  //       if (progress > 95) {
  //         setShowLogo(true)
  //       } else {
  //         setShowLogo(false)
  //       } 
  //     })
  //   }
  // }, [scroll, showLogo])

  return (
    <div className="mx-auto grid grid-cols-9 grid-rows-3 h-full items-end py-12 md:pt-[10vw]">
      <div className="mx-auto col-span-1 row-span-1 col-start-2" data-scroll data-scroll-speed={-4}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-3" data-scroll data-scroll-speed={-3}>+</div>
      <div className="mx-auto col-span-1 row-span-1" data-scroll data-scroll-speed={-2.4}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-8" data-scroll data-scroll-speed={-4}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-9" data-scroll data-scroll-speed={-3.5}>+</div>
      <div className="mx-auto col-span-1 row-start-2 row-span-1" data-scroll data-scroll-speed={-4.2}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-3" data-scroll data-scroll-speed={-2}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-5" data-scroll data-scroll-speed={-3}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-7" data-scroll data-scroll-speed={-5.4}>+</div>
      <div className="mx-auto col-span-1 row-span-1 row-start-3 col-start-2" data-scroll data-scroll-speed={-2}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-5" data-scroll data-scroll-speed={-3.5}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-6" data-scroll data-scroll-speed={-6}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-8" data-scroll data-scroll-speed={-4}>+</div>
      <div className="mx-auto col-span-1 row-span-1 col-start-9" data-scroll data-scroll-speed={-2}>+</div>

      <div data-scroll data-scroll-speed={2} className={`absolute inset-0 w-full h-full flex items-center justify-center`}>
        <div className={`w-[12vw] h-[12vw] rounded-full mt-[-10vw] mr-[-23vw]`}>
          <img src="/images/badge.webp" alt="JBS Logo Badge" className="w-full" />
        </div>
      </div>
    </div>
  )
}