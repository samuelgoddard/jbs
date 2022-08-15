import Image from "@/components/image";

export default function ModularImageBlock({ image, layout, position }) {

  let cols = 9;
  let start = 0
  let pad = 'p-0'

  if (layout == 'contained-landscape' && position == 'center') {
    pad = 'p-0'
    cols = 7
    start = 2
  }
  if (layout == 'contained-landscape' && position == 'left') {
    pad = 'p-3'
    cols = 7
    start = 0
  }
  if (layout == 'contained-landscape' && position == 'right') {
    pad = 'p-3'
    cols = 7
    start = 4
  }
  if (layout == 'contained-portrait' && position == 'center') {
    pad = 'p-3'
    cols = 3
    start = 4
  }
  if (layout == 'contained-portrait' && position == 'left') {
    pad = 'p-3'
    cols = 3
    start = 0
  }
  if (layout == 'contained-portrait' && position == 'right') {
    pad = 'p-3'
    cols = 3
    start = 7
  }
  if (layout == 'contained-square' && position == 'center') {
    pad = 'p-0'
    cols = 5
    start = 3
  }
  if (layout == 'contained-square' && position == 'left') {
    pad = 'p-3'
    cols = 5
    start = 0
  }
  if (layout == 'contained-square' && position == 'right') {
    pad = 'p-3'
    cols = 5
    start = 5
  }

  return (
    <div className={`grid grid-cols-9 ${pad}`}>
      <div className={`col-span-${cols} col-start-${start}`}>
        <Image
          image={image}
          focalPoint={image.hotspot}
          layout="responsive"
          widthOverride={1000}
          className=""
        />
      </div>
    </div>
  )
}