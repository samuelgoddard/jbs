import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
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
      alt
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

export default function Home(initialData) {
  const { data: { home } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={home.title} />
      
      <div className="p-5">
        <Header />
        
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <m.main className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
              <Image 
                image={home.backgroundImage}
                layout="fill"
                className="fixed inset-0 z-0 object-cover object-center"
              />

              <article className="relative z-10">
                <div className="content mb-4 font-mono">
                  <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">{home.title}</h1>

                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.content} />

                  <ul className="mt-6 font-sans tracking-tight text-xl">
                    <li className="block"><Link href="/work"><a className="underline">Work</a></Link></li>
                    <li className="block"><Link href="/studio"><a className="underline">Studio</a></Link></li>
                  </ul>
                </div>
              </article>
            </m.main>
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