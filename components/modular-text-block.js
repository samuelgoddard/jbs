import {PortableText} from '@portabletext/react'

export default function ModularTextBlock({ text, position }) {
  let cols = 'col-span-8 md:col-span-3';
  let start = 'md:col-start-0'

  if (position == 'center') {
    cols = 'col-span-8 md:col-span-3'
    start = 'md:col-start-4'
  }

  if (position == 'right') {
    cols = 'col-span-8 md:col-span-3'
    start = 'md:col-start-6'
  }

  return (
    <div className="grid grid-cols-9 p-3">
      <div className={`${cols} ${start} indent-12 text-sm md:text-base`}>
        <PortableText value={text}/>
      </div>
    </div>
  )
}