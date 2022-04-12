import Carousel from "@/components/carousel";

export default function ModularImageCarouselBlock({ images }) {
  return (
    <Carousel contained slides={images} id="modular" />
  )
}