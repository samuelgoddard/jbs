import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "@/components/image";

export default function ScrollBoundStack({ image, image2, id, delay }) {
  const { scroll } = useLocomotiveScroll()
  const scaleElement = useRef(null);
  const scaleElement2 = useRef(null);
  let progress = 0;
  let computedDelay = 'delay-0'
  if (delay == 100) {
    computedDelay = 'delay-100'
  }
  if (delay == 200) {
    computedDelay = 'delay-200'
  }
  if (delay == 300) {
    computedDelay = 'delay-300'
  }

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (args) => {
        if (typeof args.currentElements[id] === 'object') {
          let progress = args.currentElements[id].progress
          if (progress > 0.33) {
            scaleElement.current.style.transform = `translate(0, -100%)`
            scaleElement2.current.style.transform = `translate(0, 0)`
          } else if (progress < 0.33) {
            scaleElement.current.style.transform = `translate(0, 0)`
            scaleElement2.current.style.transform = `translate(0, 100%)`
          }
        }
      })
    }
  }, [scroll, progress])

  return (
    <div className="w-full absolute inset-0 h-full object-cover object-center overflow-hidden" data-scroll data-scroll-id={id}>
      <div className={`z-10 transition-all ease-in-out duration-1000 absolute inset-0 h-full object-cover object-center ${computedDelay}`} ref={scaleElement}>
        <Image
          image={image2}
          focalPoint={image2.hotspot}
          widthOverride={550}
          className="w-full"
          noCaption
          layout="fill"
        />
      </div>

      <div className={`z-20 transition-all ease-in-out duration-1000 absolute inset-0 h-full object-cover object-center translate-y-full ${computedDelay}`} ref={scaleElement2}>
        <Image
          image={image}
          focalPoint={image.hotspot}
          widthOverride={550}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>
    </div>
  )
}