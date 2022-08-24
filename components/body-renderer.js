import BlockContentWrapper from '@/components/block-content-wrapper'
import ModularCollectionGridBlock from '@/components/modular-collection-grid-block'
import ModularImageBlock from '@/components/modular-image-block'
import ModularImageCarouselBlock from '@/components/modular-image-carousel-block'
import ModularTextBlock from '@/components/modular-text-block'
import ModularImageTextBlock from '@/components/modular-image-text-block'
import ModularDoubleImageBlock from '@/components/modular-double-image-block'
import ModularSideBySideImageBlock from '@/components/modular-side-by-side-image-block'
import ModularVideoBlock from '@/components/modular-video-block'

const notImplemented = ({ type }) => <h1>Not implemented {type}</h1>

const bodySerializers = {
  block: {
    component: BlockContentWrapper,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  collectionGridBlock: {
    component: ModularCollectionGridBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  modularImageBlock: {
    component: ModularImageBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  modularVideoBlock: {
    component: ModularVideoBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  imageCarouselBlock: {
    component: ModularImageCarouselBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  textBlock: {
    component: ModularTextBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  modularImageTextBlock: {
    component: ModularImageTextBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  modularDoubleImageBlock: {
    component: ModularDoubleImageBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  },
  modularSideBySideImageBlock: {
    component: ModularSideBySideImageBlock,
    wrapper: ({ children }) => 
      <div className="mb-[12vw]">
        {children}
      </div>
  }
}

function getSerializers() {
  const res = {}
  for (const [key, value] of Object.entries(bodySerializers)) {
    if (key === 'block') continue
    const Component = value.component
    res[key] = (props) => <Component {...props.node} />
  }
  return res
}

export const blockSerializers = getSerializers()

const BodyRenderer = ({ body }) => {
  if (!body) return <></>
  return body.map((item) => {
    const type = item._type
    const serializer = bodySerializers[type]
    const Component = serializer?.component
    const args = serializer?.args
    const Wrapper = serializer?.wrapper

    if (!Component || !serializer) throw new Error(`No serializer implemented for body object: ${type}`)    
    
    return Wrapper ? <Wrapper key={item._key}><Component {...item} {...args} /></Wrapper> : <Component key={item._key} {...item} {...args} />
  })
}

export default BodyRenderer;