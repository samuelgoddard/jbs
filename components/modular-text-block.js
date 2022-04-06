import BlockContent from '@sanity/block-content-to-react'

export default function ModularTextBlock({ text }) {
  return (
    <div className="grid grid-cols-9 p-3">
      <div className="md:col-start-6 col-span-8 md:col-span-3 indent-12">
        <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
      </div>
    </div>
  )
}