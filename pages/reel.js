import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Reel() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Reel" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
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
                  <m.main className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
                    <article>
                      <div className="content max-w-3xl mb-4 font-mono">
                        <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">Reel</h1>
                        <p>Coming soon...</p>
                      </div>
                    </article>
                  </m.main>
                </m.div>
              </LazyMotion>
            </div>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}