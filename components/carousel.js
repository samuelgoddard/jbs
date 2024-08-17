import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "@/components/image";
import { m } from "framer-motion";

const Carousel = ({ slides, contained, id }) => {
  const [viewportRef, embla] = useEmblaCarousel({ speed: 4, skipSnaps: false, loop: true, inViewThreshold: 0.75});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
    <div className={`embla ${contained && 'embla--contained' }`}>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide, index) => {
              let type = 'embla__slide--horizontal'

              if (slide.asset.metadata.dimensions.height > slide.asset.metadata.dimensions.width) {
                type = 'embla__slide--vertical'
              }

              return (
                <div className={`embla__slide ${type}`} key={index}>
                  <div className={`embla__slide__inner`}>
                    <div className="absolute inset-0">
                      <Image
                        image={slide}
                        layout="fill"
                        widthOverride={slide.asset.metadata.dimensions.height > slide.asset.metadata.dimensions.width ? 1000 : 1600}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button onClick={scrollPrev} className="absolute w-10 h-10 text-2xl bg-opacity-40 rounded-full flex items-center justify-center leading-[0] border-black border bg-white text-black top-[40%] md:top-[43%] left-3">←</button>

        <button onClick={scrollNext} className="absolute w-10 h-10 text-2xl bg-opacity-40 rounded-full flex items-center justify-center leading-[0] border-black border bg-white text-black top-[40%] md:top-[43%] right-3">→</button>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
              type="button"
              onClick={() => scrollTo(index)}
            >{index + 1}</button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
