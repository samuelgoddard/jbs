import {PortableText} from '@portabletext/react'

export default function ModularTextBlock({ text, position, textAlignment }) {
  let cols = 'col-span-8 md:col-span-3';
  let start = 'md:col-start-0'
  let textAlignmentClass = '';

  if (textAlignment == 'left') {
    textAlignmentClass = 'text-left';
  }
  if (textAlignment == 'center') {
    textAlignmentClass = 'text-center';
  }
  if (textAlignment == 'right') {
    textAlignmentClass = 'text-right';
  }

  if (position == 'center') {
    cols = 'col-span-8 md:col-span-3'
    start = 'md:col-start-4'
  }

  if (position == 'right') {
    cols = 'col-span-8 md:col-span-3'
    start = 'md:col-start-6'
  }

  const components = {
    block: {
      normal: ({children}) => <p>{children}</p>,
      h1: ({children}) => <h1 className="text-3xl lg:text-4xl">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl lg:text-3xl">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl lg:text-2xl">{children}</h3>,
    },
    marks: {
      link: ({children, value}) => <a href={value.href} className="underline hover:text-black/75 focus:text-black/75">{children}</a>,
    }
  }

  return (
    <div className="grid grid-cols-9 p-3">
      <div className={`${cols} ${start} ${textAlignmentClass} text-sm md:text-base flex flex-col space-y-3`}>
        <PortableText value={text} components={components} />
      </div>
    </div>
  )
}