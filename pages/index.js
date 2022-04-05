import { useRef } from 'react'
import Layout from '@/components/layout'
// import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from '@/components/image'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    content,
    backgroundImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "contact": *[_type == "contact"][0]{
    email,
    socials[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, contact } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={home.title} />
      
      <div className="p-3 min-h-screen relative">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <m.header className="absolute top-0 left-0 right-0 z-10">
              <div className="grid grid-cols-9 p-3">
                <div className="col-span-6">
                  <svg className="w-[31px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 82 125" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.744 124.592c26.168 0 40.744-15.134 40.744-43.818V0H56.55v82.534c0 12.494-4.566 19.533-15.806 19.533-11.064 0-15.806-5.983-15.806-20.413H0c0 28.684 15.279 42.938 40.744 42.938Z" /></svg>
                </div>

                <div className="col-span-2">
                  <svg className="w-[30px] md:w-[5.7vw] xl:w-[5.2vw] fill-current" viewBox="0 0 79 124" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 123.184h39.515c19.845 0 38.812-13.022 38.812-37.483 0-15.134-6.323-25.869-17.562-30.972v-.704c6.322-3.52 12.996-11.262 12.996-23.757C73.76 10.207 60.414 0 38.637 0H0v123.184Zm24.938-78.486V21.821h12.82c6.323 0 11.064 3.168 11.064 11.439 0 8.623-4.741 11.438-11.064 11.438h-12.82Zm0 56.665V65.112h12.47c9.658 0 15.98 5.807 15.98 18.125 0 12.319-6.322 18.126-15.98 18.126h-12.47Z" /></svg>
                </div>
                
                <div className="col-span-1 text-right">
                  <svg className="w-[30px] md:w-[5.7vw] xl:w-[5.2vw] fill-current ml-auto" viewBox="0 0 78 126" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.515 126c23.709 0 37.758-14.782 37.758-35.195 0-19.006-9.659-28.685-31.963-38.716-15.63-7.039-19.318-11.086-19.318-19.533 0-7.391 5.444-12.143 13.347-12.143 9.484 0 13.699 5.456 13.699 13.199h23.357C76.22 13.902 64.277 0 39.34 0 18.967 0 2.81 10.383 2.81 33.26c0 16.542 11.768 29.388 28.979 36.955C47.593 77.078 54.09 81.83 54.09 90.805c0 9.326-6.498 13.726-14.576 13.726-10.889 0-15.63-7.391-16.509-17.422H0C1.405 112.45 15.982 126 39.515 126Z" /></svg>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 right-0 grid grid-cols-9 p-3">
                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1">(</span>

                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-4 md:col-span-1 col-start-2">A Photography <span className="inline-block md:hidden">++ Moving Image</span></span>
                
                <span className="hidden md:block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-3">++</span>
                <span className="hidden md:block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-4">Moving Image</span>
                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-6">Studio</span>
                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-8">London</span>
                <span className="block text-[10px] md:text-[11px] lg:text-sm 2xl:text-base leading-[0.85] md:leading-[0.85] lg:leading-[0.85] 2xl:leading-[0.85] col-span-1 col-start-9">)</span>
              </div>
            </m.header>

            <m.main className="">
              <Image 
                image={home.backgroundImage}
                focalPoint={home.backgroundImage.hotspot}
                layout="fill"
                widthOverride={600}
                className="fixed inset-0 z-0 object-cover object-enter"
              />

              <article className="absolute bottom-0 top-auto md:bottom-auto md:top-0 right-0 left-0 z-10 w-full md:mt-[20vh] mb-[8vh] md:mb-0 p-3 indent-8 text-sm md:text-base leading-tight md:leading-tight grid grid-cols-9">
                <div className="col-span-9 md:col-span-3 md:col-start-7 pr-12 xl:pr-20">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.content} />
                </div>
              </article>
            </m.main>

            <m.footer className="absolute bottom-0 left-0 right-0 z-10 p-3">
              <div className="grid grid-cols-9 items-end">
                <div className="col-span-2 text-left">
                  <Link href="/work"><a className="text-2xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase hover:underline focus:underline">Work</a></Link>
                </div>

                <div className="col-span-4 col-start-3 text-right md:space-x-7">
                  <a href={`mailto:${contact.email}`} className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase group">
                    <span className="hidden md:inline-block group-hover:underline group-focus:underline">Get in touch</span>
                    <span className="inline-block md:hidden group-hover:underline group-focus:underline">Contact</span>
                  </a>

                  {contact.socials.map((e, i) => {
                    return e.title === 'Instagram' && (
                      <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="text-sm md:text-[2.2vw] xl:text-[2vw] 2xl:text-[2.3vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase hover:underline focus:underline ml-5">{e.title}</a>
                    )
                  })}
                </div>
                
                <div className="col-span-2 col-start-8 text-right">
                  <Link href="/studio"><a className="text-2xl md:text-[4.5vw] xl:text-[4.5vw] 2xl:text-[5.5vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase hover:underline focus:underline">Studio</a></Link>
                </div>
              </div>
            </m.footer>
          </m.div>
        </LazyMotion>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}