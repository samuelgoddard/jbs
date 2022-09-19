import Image from "@/components/image";

export default function ModularDoubleImageBlock({ image1, image2, image1AspectRatio, image2AspectRatio, reverseOrder }) {
  let image1Width = 'w-[100%] md:w-[87%]';
  let image1Height = 'h-[130vw] md:h-[57vw]';

  let image2Width = 'w-[100%] md:w-[87%]';
  let image2Height = 'h-[60vw] md:h-[57vw]';

  if (image1AspectRatio == 'square') {
    image1Width = 'w-[100%] md:w-[75%]'
    image1Height = 'h-[100vw] md:h-[35vw]'
  }

  if (image1AspectRatio == 'portrait' && image2AspectRatio == 'portrait') {
    image2Width = 'w-[100%] md:w-[65%]'
    image2Height = 'h-[150vw] md:h-[45vw]'
  }

  if (image2AspectRatio == 'square') {
    image2Width = 'w-[100%] md:w-[75%]'
    image2Height = 'h-[100vw] md:h-[35vw]'
  }

  return (
    <div className={`flex flex-wrap items-end md:p-3`}>
      <div className={`w-full md:w-1/2 relative overflow-hidden ${image1AspectRatio == 'square' ? '' : '' }`}>
        <div className={`${image1Width} relative overflow-hidden border-b md:border-0 border-white `}>
          <Image
            image={image1}
            focalPoint={image1.hotspot}
            layout="fill"
            widthOverride={1200}
            className={`w-full ${image1Height} inset-0`}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden flex border-b md:border-0 border-white">
        <div className={`${image2Width} relative overflow-hidden ml-auto`}>
          <Image
            image={image2}
            focalPoint={image2.hotspot}
            layout="fill"
            widthOverride={1200}
            className={`w-full ${image2Height} inset-0`}
          />
        </div>
      </div>
    </div>
  )
}