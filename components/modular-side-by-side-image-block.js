import Image from "@/components/image";

export default function ModularSideBySideImageBlock({ image1, image2 }) {
  let imageWidth = 'w-[100%]';
  let imageHeight = 'h-[150vw] md:h-[55vw]';

  return (
    <div className={`flex flex-wrap md:p-3 w-full md:w-9/12 mx-auto`}>
      <div className={`w-full md:w-1/2 px-0 md:px-5 relative overflow-hidden border-b border-white md:border-0`}>
        <div className={`${imageWidth} relative overflow-hidden`}>
          <Image
            image={image1}
            focalPoint={image1.hotspot}
            layout="fill"
            widthOverride={1200}
            className={`w-full ${imageHeight} inset-0 scale-[1.01]`}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-0 md:px-5 relative overflow-hidden border-b border-white md:border-0">
        <div className={`${imageWidth} relative overflow-hidden`}>
          <Image
            image={image2}
            focalPoint={image2.hotspot}
            layout="fill"
            widthOverride={1200}
            className={`w-full ${imageHeight} inset-0 scale-[1.01]`}
          />
        </div>
      </div>
    </div>
  )
}