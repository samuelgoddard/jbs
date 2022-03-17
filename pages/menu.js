import { useRef } from 'react'
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Header from '@/components/header'

export default function Menu() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Menu" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>

            <Header menu />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20 font-sans tracking-tight">
                  <article>
                    <ul className="text-4xl mb-12">
                      <li className="block mb-1"><Link href="/"><a className="underline">Home</a></Link></li>
                      <li className="block mb-1"><Link href="/work"><a className="underline">Work</a></Link></li>
                      <li className="block mb-1"><Link href="/studio"><a className="underline">Studio</a></Link></li>
                      <li className="block mb-1"><Link href="/reel"><a className="underline">Reel</a></Link></li>
                    </ul>
                    <ul className="text-lg">
                      <li className="block"><a href="https://www.instagram.com/jasonbaileystudio/?hl=en" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a></li>
                      <li className="block"><a href="mailto:hello@jasonbaileystudio.com" className="underline">Email</a></li>
                      <li className="block"><Link href="/terms"><a className="underline">Terms</a></Link></li>
                    </ul>
                  </article>
                </m.main>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}