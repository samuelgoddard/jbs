
import { blockSerializers } from '@/components/body-renderer'
import {PortableText} from '@portabletext/react'

const BlockContentWrapper = ({ text }) => {
  return (
    <PortableText value={text} components={blockSerializers} />
  )
}

export default BlockContentWrapper