import Image from "@/components/image";

export default function ModularSideBySideImageBlock({ image1, image2 }) {
  let imageWidth = 'w-[100%]';
  let imageHeight = 'h-[55vw]';

  return (
    <div className={`flex flex-wrap p-3 w-9/12 mx-auto`}>
      <div className={`w-1/2 px-2 md:px-5 relative overflow-hidden`}>
        <div className={`${imageWidth} relative overflow-hidden`}>
          <Image
            image={image1}
            focalPoint={image1.hotspot}
            layout="fill"
            widthOverride={1000}
            className={`w-full ${imageHeight} inset-0`}
          />
        </div>
      </div>
      <div className="w-1/2 px-2 md:px-5 relative overflow-hidden">
        <div className={`${imageWidth} relative overflow-hidden`}>
          <Image
            image={image2}
            focalPoint={image2.hotspot}
            layout="fill"
            widthOverride={1000}
            className={`w-full ${imageHeight} inset-0`}
          />
        </div>
      </div>
    </div>
  )
}