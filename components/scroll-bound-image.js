import { useEffect, useRef } from "react";
import Image from "@/components/image";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function ScrollBoundImage({ image }) {

  const { scrollYProgress } = useScroll()
  const scaleElement = useRef(null);
  let progress = 0;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest
    scaleElement.current.style.transform = `scale(${1 + latest / 2.5})`
  })

  // useEffect(() => {
  //   if (scroll) {
  //     scroll.on('scroll', ({ limit, scroll }) => {
  //       const progress = (scroll.y / limit.y) / 3
  //       scaleElement.current.style.transform = `scale(${1 + progress})`
  //     })
  //   }
  // }, [scroll, progress])

  return (
    <div ref={scaleElement} className="w-full z-0 absolute inset-0 h-full object-cover object-center">
      <Image
        image={image}
        layout="fill"
        focalPoint={image.hotspot}
        widthOverride={1920}
        className="w-full z-0 absolute inset-0 h-full object-cover object-center"
      />
    </div>
  )
}