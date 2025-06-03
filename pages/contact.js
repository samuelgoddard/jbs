import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade, scaleDelay, revealDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
// import Loader from '@/components/loader'
import ScrollBoundImage from '@/components/scroll-bound-image'
import StudioTitle from '@/components/studio-title'
import { IntroContext } from '@/context/intro'
import ScrollBoundFlicker from '@/components/scroll-bound-flicker'
import {PortableText} from '@portabletext/react'
import BodyRenderer from '@/components/body-renderer'
import { NewsletterContentContext } from '@/context/newsletter-content'
import Container from '@/components/container'

const query = `{
  "menu": *[_type == "menu"][0] {
    newsletterHeading,
    newsletterText,
    newsletterImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
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

export default function Contact(initialData) {
  const { data: { contact, menu } } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [newsletterContentContext, setNewsletterContentContext] = useContext(NewsletterContentContext);

  useEffect(() => {
    setNewsletterContentContext({
      heading: menu.newsletterHeading,
      text: menu.newsletterText,
      image: menu.newsletterImage
    })
  },[]);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title={"Contact"}
      />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Loader /> */}

          <m.div variants={fade}>
              <main className="">
              <Container>
              <div className="mt-56">
                <div className="relative overflow-hidden -mx-1 md:-mx-2 ">
                  <h1 className="text-[20.5vw] md:text-[11vw] leading-[0.75] md:leading-[0.7] mt-auto h-auto w-auto pt-[5px] pb-[24px]">
                  <m.span className="block" variants={revealDelay}>Contact</m.span></h1>
                </div>
              </div>
                <div className="flex flex-wrap md:-mx-6">
                  <div className="w-full block mb-8 md:mb-8 md:px-6">
                    <p>Representation<br/>
                    Laird and Good Company</p>
                    <hr className="border-b border-black border-t-0 pb-3 mb-3" />
                  </div>
                    <p className="w-full block mb-8 lg:mb-0 md:w-1/2 lg:w-1/3 md:px-6 break-words">
                    UK, Europe + ROW<br/>
                    Biddy Marquis-Henninger<br/>
                    E <a className="underline" href="mailto:biddy@lairdandgoodcompany.com">biddy@lairdandgoodcompany.com</a><br/>
                    T <a className="underline" href="tel:+442045254313">+44 (0) 20 4525 4313</a><br/>
                    M <a className="underline" href="tel:+447950248829">+44 (0) 7950 248 829</a>
                  </p>
                  <p className="w-full block mb-8 lg:mb-0 md:w-1/2 lg:w-1/3 md:px-6 break-words">
                    United States<br/>
                    Kenna Zimmer<br/>
                    E <a className="underline" href="mailto:kenna@lairdandgoodcompany.com">kenna@lairdandgoodcompany.com</a><br/>
                    T <a className="underline" href="tel:+12123344280">+1 212 334 4280</a><br/>
                    M <a className="underline" href="tel:+16466100047">+1 646 610 0047</a>
                  </p>
                  <p className="w-full block mb-8 lg:mb-0 md:w-1/2 lg:w-1/3 md:px-6 break-words">
                    Studio - London, UK<br/>
                    Jason Bailey<br/>
                    E <a className="underline" href="mailto:jason@jasonbaileystudio.com">jason@jasonbaileystudio.com</a><br/>
                    T <a className="underline" href="tel:+447907655617">+44 (0)7907655617</a>
                  </p>
                </div>
              </Container>
              </main>

              <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}