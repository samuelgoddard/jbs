import { useEffect, useRef } from "react";
// import { useLocomotiveScroll } from "react-locomotive-scroll";
import Image from "@/components/image";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function ScrollBoundFlicker({ images, id }) {
  const { scrollYProgress } = useScroll()

  const scaleElement = useRef(null);
  const scaleElement2 = useRef(null);
  const scaleElement3 = useRef(null);
  const scaleElement4 = useRef(null);
  const scaleElement5 = useRef(null);
  const scaleElement6 = useRef(null);
  const scaleElement7 = useRef(null);
  const scaleElement8 = useRef(null);
  const scaleElement9 = useRef(null);
  const scaleElement10 = useRef(null);
  const scaleElement11 = useRef(null);
  const scaleElement12 = useRef(null);
  let progress = 0;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.15) {
      scaleElement2.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.15) {
      scaleElement2.current.style.transform = `translate(0, -100%)`
      scaleElement3.current.style.transform = `translate(0, -100%)`
      scaleElement4.current.style.transform = `translate(0, -100%)`
      scaleElement5.current.style.transform = `translate(0, -100%)`
      scaleElement6.current.style.transform = `translate(0, -100%)`
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.175) {
      scaleElement3.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.175) {
      scaleElement3.current.style.transform = `translate(0, -100%)`
      scaleElement4.current.style.transform = `translate(0, -100%)`
      scaleElement5.current.style.transform = `translate(0, -100%)`
      scaleElement6.current.style.transform = `translate(0, -100%)`
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.2) {
      scaleElement4.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.2) {
      scaleElement4.current.style.transform = `translate(0, -100%)`
      scaleElement5.current.style.transform = `translate(0, -100%)`
      scaleElement6.current.style.transform = `translate(0, -100%)`
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.225) {
      scaleElement5.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.225) {
      scaleElement5.current.style.transform = `translate(0, -100%)`
      scaleElement6.current.style.transform = `translate(0, -100%)`
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.25) {
      scaleElement6.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.25) {
      scaleElement6.current.style.transform = `translate(0, -100%)`
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.275) {
      scaleElement7.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.275) {
      scaleElement7.current.style.transform = `translate(0, -100%)`
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.3) {
      scaleElement8.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.3) {
      scaleElement8.current.style.transform = `translate(0, -100%)`
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.325) {
      scaleElement9.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.325) {
      scaleElement9.current.style.transform = `translate(0, -100%)`
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.35) {
      scaleElement10.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.35) {
      scaleElement10.current.style.transform = `translate(0, -100%)`
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.375) {
      scaleElement11.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.375) {
      scaleElement11.current.style.transform = `translate(0, -100%)`
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }

    if (latest > 0.4) {
      scaleElement12.current.style.transform = `translate(0, 0)`
    } else if (latest < 0.4) {
      scaleElement12.current.style.transform = `translate(0, -100%)`
    }
  })

  // useEffect(() => {
  //   if (scroll) {
  //     scroll.on('scroll', (args) => {
  //       if (typeof args.currentElements[id] === 'object') {
  //         let progress = args.currentElements[id].progress
          
  //         if (latest > 0.25) {
  //           scaleElement2.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.25) {
  //           scaleElement2.current.style.transform = `translate(0, -100%)`
  //           scaleElement3.current.style.transform = `translate(0, -100%)`
  //           scaleElement4.current.style.transform = `translate(0, -100%)`
  //           scaleElement5.current.style.transform = `translate(0, -100%)`
  //           scaleElement6.current.style.transform = `translate(0, -100%)`
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.3) {
  //           scaleElement3.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.3) {
  //           scaleElement3.current.style.transform = `translate(0, -100%)`
  //           scaleElement4.current.style.transform = `translate(0, -100%)`
  //           scaleElement5.current.style.transform = `translate(0, -100%)`
  //           scaleElement6.current.style.transform = `translate(0, -100%)`
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.35) {
  //           scaleElement4.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.35) {
  //           scaleElement4.current.style.transform = `translate(0, -100%)`
  //           scaleElement5.current.style.transform = `translate(0, -100%)`
  //           scaleElement6.current.style.transform = `translate(0, -100%)`
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.4) {
  //           scaleElement5.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.4) {
  //           scaleElement5.current.style.transform = `translate(0, -100%)`
  //           scaleElement6.current.style.transform = `translate(0, -100%)`
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.45) {
  //           scaleElement6.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.45) {
  //           scaleElement6.current.style.transform = `translate(0, -100%)`
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.5) {
  //           scaleElement7.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.5) {
  //           scaleElement7.current.style.transform = `translate(0, -100%)`
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.55) {
  //           scaleElement8.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.55) {
  //           scaleElement8.current.style.transform = `translate(0, -100%)`
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.6) {
  //           scaleElement9.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.6) {
  //           scaleElement9.current.style.transform = `translate(0, -100%)`
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.65) {
  //           scaleElement10.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.65) {
  //           scaleElement10.current.style.transform = `translate(0, -100%)`
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.7) {
  //           scaleElement11.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.7) {
  //           scaleElement11.current.style.transform = `translate(0, -100%)`
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //         if (progress > 0.75) {
  //           scaleElement12.current.style.transform = `translate(0, 0)`
  //         } else if (progress < 0.75) {
  //           scaleElement12.current.style.transform = `translate(0, -100%)`
  //         }

  //       }
  //     })
  //   }
  // }, [scroll, progress])

  return (
    <div className="w-full absolute inset-0 h-full object-cover object-center overflow-hidden" data-scroll data-scroll-id={id}>
      <div className={`z-[0] absolute inset-0 h-full object-cover object-center`} ref={scaleElement}>
        <Image
          image={images[0]}
          focalPoint={images[0].hotspot}
          widthOverride={500}
          className="w-full"
          noCaption
          layout="fill"
        />
      </div>

      <div className={`z-[1] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement2}>
        <Image
          image={images[1]}
          focalPoint={images[1].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>
      
      <div className={`z-[10] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement3}>
        <Image
          image={images[2]}
          focalPoint={images[2].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>
      
      <div className={`z-[20] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement4}>
        <Image
          image={images[3]}
          focalPoint={images[3].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[30] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement5}>
        <Image
          image={images[4]}
          focalPoint={images[4].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[40] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement6}>
        <Image
          image={images[5]}
          focalPoint={images[5].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[50] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement7}>
        <Image
          image={images[6]}
          focalPoint={images[6].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[60] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement8}>
        <Image
          image={images[7]}
          focalPoint={images[7].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[70] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement9}>
        <Image
          image={images[8]}
          focalPoint={images[8].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[80] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement10}>
        <Image
          image={images[9]}
          focalPoint={images[9].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[90] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement11}>
        <Image
          image={images[10]}
          focalPoint={images[10].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>

      <div className={`z-[100] absolute inset-0 h-full object-cover object-center translate-y-full`} ref={scaleElement12}>
        <Image
          image={images[11]}
          focalPoint={images[11].hotspot}
          widthOverride={500}
          layout="fill"
          className="absolute inset-0 h-full object-cover object-center"
          noCaption
        />
      </div>
    </div>
  )
}