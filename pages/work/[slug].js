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
import Image from '@/components/image'

const query = `*[_type == "work" && slug.current == $slug][0]{
  title,
  content,
  images[] {
    asset-> {
      ...
    },
    alt,
    caption
  },
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function WorkSlug(initialData) {
  const { data: { title, content, images, slug }  } = pageService.getPreviewHook(initialData)()

  const containerRef = useRef(null)
  return (
    <Layout>
      <NextSeo title={title} />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <div className="p-5">
              <Header />

              <LazyMotion features={domAnimation}>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <m.main className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20 max-w-x-3x">
                    <article>
                      <FancyLink destination="/work" a11yText="Navigate to the work index page" label="Back to all work" />
                      
                      <div className="content mb-4 font-mono mt-3">
                        <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">{title}</h1>

                        <SanityBlockContent serializers={{ container: ({ children }) => children }} blocks={content} />

                        { images && (
                          <>
                            <h2>Images:</h2>
                            {images.map((e, i) => {
                              return (
                                <Image
                                  key={i}
                                  image={e}
                                  className="w-full mb-8"
                                />
                              )
                            })}
                          </>
                        )}

                        <p>Some more stuff will eventually go here...</p>
                        <h2>SOME OTHER STUFF?</h2>
                      </div>                    
                    </article>
                  </m.main>
                  
                  <m.div>
                    <Footer />
                  </m.div>
                </m.div>
              </LazyMotion>
            </div>
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