import BlockContent from '@sanity/block-content-to-react'

export default function ModularTextBlock({ text }) {
  return (
    <div className="grid grid-cols-9">
      <div className="col-start-6 col-span-3 indent-12">
        <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
      </div>
    </div>
  )
}