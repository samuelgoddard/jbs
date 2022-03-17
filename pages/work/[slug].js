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
import SanityBlockContent from '@sanity/block-content-to-react'

const query = `*[_type == "work" && slug.current == $slug][0]{
  title,
  content,
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function WorkSlug(initialData) {
  const { data: { title, content, slug }  } = pageService.getPreviewHook(initialData)()

  const containerRef = useRef(null)
  return (
    <Layout>
      <NextSeo title={title} />

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
                    <FancyLink destination="/work" a11yText="Navigate to the work index page" label="Back to all work →" />
                    <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl my-4">{title}</h1>
                    <div className="content max-w-3xl mb-4 font-mono">
                      <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={content} />

                      <h2>Project Info:</h2>
                      <p>Some stuff here...</p>
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
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}