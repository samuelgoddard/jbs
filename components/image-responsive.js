import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { useState } from 'react';

export default function Image({ image, layout, widthOverride, heightOverride, focalPoint, className, priority, noCaption, sizes, quality, alt }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(90)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};
  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (layout) { attributes.layout = layout } else { attributes.layout = 'responsive' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return (image.overrideVideo || image.overrideVimeoVideo) ? (
    <div className={`image ${className} w-full h-full overflow-hidden relative ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-[850ms] ease-in-out will-change`}>
      <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 z-10`}>
        <source src={ image.overrideVimeoVideo ? image.overrideVimeoVideo : image.overrideVideo.asset.url } type="video/mp4" />

        Sorry. Your browser does not support the video tag.
      </video>
      
      <figure className={`image ${className} ${layout == 'fill' && 'cover-image' }`}>
      
      <Img
        src={imageProps.src}
        loader={imageProps.loader}
        className={`will-change-transform transition-all ease-custom duration-[660ms] object-cover object-center ${imageIsLoaded ? 'scale-1 opacity-100' : 'scale-[1.025] opacity-0'}`}
        {...(priority ? {
          priority: true} : {}
        )}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        width={image.width}
        height={image.height}
        fill={false}
        quality={quality ? quality : 75}
        alt={alt ? alt : 'MISSING ALT TEXT'}

        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />

        {/* <Img {...imageProps} {...attributes}  onLoad={event => {
        const target = event.target;
        if (target.src.indexOf('data:image/gif;base64') < 0) {
          setImageIsLoaded(true)
        }
      }} /> */}
        
        {(image.caption && layout !== 'fill' && !noCaption) && (
          <figcaption className="text-xs mt-2">"{image.caption}"</figcaption>
        )}
      </figure>
    </div>
  )
  : (
    <figure className={`image ${className} ${layout == 'fill' && 'cover-image' } ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-[850ms] ease-in-out will-change`}>
        <Img
          src={imageProps.src}
          loader={imageProps.loader}
          className={`will-change-transform transition-all ease-custom duration-[660ms] object-cover object-center ${imageIsLoaded ? 'scale-1 opacity-100' : 'scale-[1.025] opacity-0'}`}
          {...(priority ? {
            priority: true} : {}
          )}
          sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
          fill
          quality={quality ? quality : 75}
          alt={alt ? alt : 'MISSING ALT TEXT'}

          onLoad={event => {
            const target = event.target;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              setImageIsLoaded(true)
            }
          }}
        />
      
      {(image.caption && layout !== 'fill' && !noCaption) && (
        <figcaption className="text-xs mt-2">"{image.caption}"</figcaption>
      )}
    </figure>
	)
}
