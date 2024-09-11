import { useEffect, useRef } from "react";
// import { useLocomotiveScroll } from "react-locomotive-scroll";
import { m, useMotionValueEvent, useScroll } from 'framer-motion'
import { revealDelay } from "@/helpers/transitions";
import { isMobile } from "react-device-detect";

export default function StudioTitle({ id }) {
  const { scrollYProgress } = useScroll()
  const scaleElement = useRef(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile && latest > 0.05) {
      scaleElement.current.style.transform = `translate(-68%, 0)`
    } else {
      scaleElement.current.style.transform = `translate(0, 0)`
    }
  })

  return (
    <div data-scroll data-scroll-id={id}>
      <h1 className="text-[20.5vw] md:text-[11vw] leading-[0.86] md:leading-[0.93] grid grid-cols-9 mt-auto h-auto w-auto pt-[5px] pb-[10px] px-3">
        <span className="block col-span-9 md:col-span-3 relative overflow-hidden">
        <m.span className="block" variants={revealDelay}>The</m.span></span>
        <span className="block md:col-start-7 col-span-9 md:col-span-3 md:text-right relative overflow-hidden transition-transform ease-in-out duration-1000" ref={scaleElement}><m.span className="block" variants={revealDelay}>Studio</m.span></span>
      </h1>
    </div>
  )
}