import Image from "@/components/image";

export default function ModularImageBlock({ image, layout }) {

  let cols = 9;
  let start = 0
  let pad = 'p-0'

  if (layout == 'contained-landscape') {
    pad = 'p-0'
    cols = 7
    start = 2
  }
  if (layout == 'contained-landscape-left') {
    pad = 'p-3'
    cols = 7
    start = 0
  }
  if (layout == 'contained-landscape-right') {
    pad = 'p-3'
    cols = 7
    start = 4
  }
  if (layout == 'contained-portrait') {
    pad = 'p-0'
    cols = 3
    start = 5
  }
  if (layout == 'contained-portrait-left') {
    pad = 'p-3'
    cols = 3
    start = 0
  }
  if (layout == 'contained-portrait-right') {
    pad = 'p-3'
    cols = 3
    start = 7
  }
  if (layout == 'contained-square') {
    pad = 'p-0'
    cols = 5
    start = 3
  }
  if (layout == 'contained-square-left') {
    pad = 'p-3'
    cols = 5
    start = 0
  }
  if (layout == 'contained-square-right') {
    pad = 'p-0'
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