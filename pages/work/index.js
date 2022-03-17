import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'

const query = `{
  "work": *[_type == "work"]{
    title,
    content,
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Work(initialData) {
  const { data: { work } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  return (
    <Layout>
      <NextSeo title="Work" />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
                  <article>
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Work</h1>
                    <div className="content max-w-3xl mb-4 font-mono">
                      <ul className="list list-inside list-disc">
                        {work.map((e, i) => {
                          return (
                            <li className="mb-1" key={i}><Link href={`/work/${e.slug.current}`}><a className="underline">{e.title} →</a></Link></li>
                          )
                        })}
                      </ul>
                    </div>
                  </article>
                </m.main>
                
                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}