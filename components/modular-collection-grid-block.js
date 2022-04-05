import Image from "@/components/image"

export default function ModularCollectionGridBlock({ items }) {
  return (
    <div className="grid grid-cols-10 sm:grid-cols-9 p-3 gap-3">
      {items.map((e, i) => {
        let start = ''
        if (i == 1) {
          start = 'md:col-start-6'
        }
        if (i == 3) {
          start = 'md:col-start-3'
        }
        if (i == 4) {
          start = 'md:col-start-8'
        }
        return (
          <div className={`col-span-5 sm:col-span-3 md:col-span-2 ${start}`}>
            <Image
              image={e.image}
              focalPoint={e.image.hotspot}
              layout="responsive"
              widthOverride={450}
              className="bg-gray-200"
            />

            { e.text && (
              <span className="block mt-2 mb-2 text-xs lg:text-sm">{e.text}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}