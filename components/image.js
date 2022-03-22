import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'

export default function Image({ image, layout, widthOverride, heightOverride, focalPoint, className, priority }) {
  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(options.width || Math.min(options.originalImageDimensions.width, 800))
      .quality(80)
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

	return (
    <figure className={`image ${className} ${layout == 'fill' && 'cover-image' }`}>
		  <Img {...imageProps} {...attributes} />
      
      {(image.caption && layout !== 'fill') && (
        <figcaption className="text-xs mt-2">"{image.caption}"</figcaption>
      )}
    </figure>
	)
}
