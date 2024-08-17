import Image from "@/components/image";

export default function ModularImageBlock({ image, layout, position }) {

  let cols = 9
  let size = 1920
  let start = 0
  let pad = 'p-0'

  if (layout == 'contained-landscape' && position == 'center') {
    pad = 'p-0'
    cols = 7
    start = 2
    size = 1600
  }
  if (layout == 'contained-landscape' && position == 'left') {
    pad = 'md:p-3'
    cols = 7
    start = 0
    size = 1600
  }
  if (layout == 'contained-landscape' && position == 'right') {
    pad = 'md:p-3'
    cols = 7
    start = 4
    size = 1600
  }
  if (layout == 'contained-portrait' && position == 'center') {
    pad = 'md:p-3'
    cols = 3
    start = 4
    size = 1200
  }
  if (layout == 'contained-portrait' && position == 'left') {
    pad = 'md:p-3'
    cols = 3
    start = 0
    size = 1200
  }
  if (layout == 'contained-portrait' && position == 'right') {
    pad = 'md:p-3'
    cols = 3
    start = 7
    size = 1200
  }
  if (layout == 'contained-square' && position == 'center') {
    pad = 'p-0'
    cols = 5
    start = 3
    size = 1400
  }
  if (layout == 'contained-square' && position == 'left') {
    pad = 'md:p-3'
    cols = 5
    start = 0
    size = 1400
  }
  if (layout == 'contained-square' && position == 'right') {
    pad = 'md:p-3'
    cols = 5
    start = 5
    size = 1400
  }

  return (
    <div className={`grid grid-cols-9 ${pad}`}>
      <div className={`col-span-9 md:col-span-${cols} md:col-start-${start} border-b border-white md:border-none`}>
        <Image
          image={image}
          focalPoint={image.hotspot}
          widthOverride={size}
          className=""
        />
      </div>
    </div>
  )
}