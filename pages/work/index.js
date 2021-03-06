import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import Loader from '@/components/loader'
import WorkViewSwitcher from '@/components/work-view-switcher'

const query = `{
  "work": *[_type == "work"]{
    title,
    category,
    type,
    campaignTitle,
    location,
    teaserImage {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    teaserImageThumbnail {
      asset-> {
        ...,
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
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
      <LazyMotion features={domAnimation}>        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {/* <Loader /> */}
          <m.div variants={fade}>
            <LocomotiveScrollProvider
              options={{ smooth: true, lerp: 0.1 }}
              containerRef={containerRef}
              watch={[]}
            >
              <WorkViewSwitcher work={work} />
            </LocomotiveScrollProvider>
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