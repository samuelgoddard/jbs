import Image from "@/components/image";

export default function ModularDoubleImageBlock({ image1, image2, image1AspectRatio, image2AspectRatio, reverseOrder }) {
  let image1Width = 'w-[60%]';
  let image1Height = 'h-[45vw]';

  let image2Width = 'w-[80%]';
  let image2Height = 'h-[60vw]';

  if (image1AspectRatio == 'square') {
    image1Width = 'w-[65%]'
    image1Height = 'h-[28vw]'
  }

  if (image2AspectRatio == 'square') {
    image2Width = 'w-[65%]'
    image2Height = 'h-[28vw]'
  }

  return (
    <div className={`flex flex-wrap items-end p-3 ${reverseOrder ? 'flex-row-reverse' : ' '}`}>
      <div className={`w-1/2 relative overflow-hidden ${image1AspectRatio == 'square' ? '' : '' }`}>
        <div className={`${image1Width} relative overflow-hidden ${ reverseOrder ? 'ml-auto' : '' }`}>
          <Image
            image={image1}
            focalPoint={image1.hotspot}
            layout="fill"
            widthOverride={1000}
            className={`w-full ${image1Height} inset-0`}
          />
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden flex">
        <div className={`${image2Width} relative overflow-hidden ${ reverseOrder ? 'mr-auto' : 'ml-auto' }`}>
          <Image
            image={image2}
            focalPoint={image2.hotspot}
            layout="fill"
            widthOverride={1000}
            className={`w-full ${image2Height} inset-0`}
          />
        </div>
      </div>
    </div>
  )
}