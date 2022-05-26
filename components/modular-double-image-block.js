import Image from "@/components/image";

export default function ModularDoubleImageBlock({ image1, image2, layout }) {
  let layoutClass = '';

  if (layout == 'portrait-left') {
    layoutClass = 'flex-row-reverse'
  }

  return (
    <div className={`flex flex-wrap items-end p-3 ${layoutClass}`}>
      <div className="w-1/2 mb-[11vw] relative overflow-hidden">
        <div className={`w-[65%] relative overflow-hidden ${layoutClass !== '' ? 'ml-auto' : ''}`}>
          <Image
            image={image1}
            focalPoint={image1.hotspot}
            layout="fill"
            widthOverride={1000}
            className="w-full h-[28vw] inset-0"
          />
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden flex">
        <div className={`w-[80%] relative overflow-hidden ${layoutClass !== '' ? '' : 'ml-auto'}`}>
          <Image
            image={image2}
            focalPoint={image2.hotspot}
            layout="fill"
            widthOverride={1000}
            className="w-full h-[60vw] inset-0"
          />
        </div>
      </div>
    </div>
  )
}