import Img from 'next/image'
import sanity from '@/services/sanity'
import { useNextSanityImage } from 'next-sanity-image'

export default function Image({ image, layout, widthOverride, heightOverride, className }) {
  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width(options.width || Math.min(options.originalImageDimensions.width, 800))
      .quality(80)
      .fit('clip')
  };
  
  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

	return (
    <figure className={`${className} ${layout == 'fill' && 'cover-image' }`}>
		  <Img
        {...imageProps}
        layout={layout ? layout : 'responsive'}
        alt={image.alt ? image.alt : 'MISSING ALT TEXT'}
      />
      
      {(image.caption && layout !== 'fill') && (
        <figcaption className="text-xs mt-2">"{image.caption}"</figcaption>
      )}
    </figure>
	)
}
