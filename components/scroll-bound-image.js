import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "@/components/image";

export default function ScrollBoundImage({ image }) {
  const { scroll } = useLocomotiveScroll()
  const scaleElement = useRef(null);
  let progress = 0;

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = (scroll.y / limit.y) / 3
        scaleElement.current.style.transform = `scale(${1 + progress})`
      })
    }
  }, [scroll, progress])

  return (
    <div ref={scaleElement} className="w-full z-0 absolute inset-0 h-full object-cover object-center">
      <Image
        image={image}
        layout="fill"
        focalPoint={image.hotspot}
        widthOverride={1200}
        className="w-full z-0 absolute inset-0 h-full object-cover object-center"
      />
    </div>
  )
}