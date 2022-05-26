import Image from "@/components/image";

export default function ModularImageBlock({ image, layout }) {

  let cols = 9;
  let start = 0

  if (layout == 'contained-landscape') {
    cols = 7
    start = 2
  }
  if (layout == 'contained-portrait') {
    cols = 3
    start = 5
  }
  if (layout == 'contained-square') {
    cols = 5
    start = 3
  }

  return (
    <div className="grid grid-cols-9">
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