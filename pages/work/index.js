import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import WorkCarousel from '@/components/work-carousel'
import scrollRefresh from '@/helpers/scroll-refresh'
import { SmootherContext } from '@/context/smoother-context'
import { useContext } from 'react'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'

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
  scrollRefresh();
  
  const smoother = useContext(SmootherContext);
  
  useIsomorphicLayoutEffect(() => {
    smoother && smoother.content("#new-container");
  }, [smoother]);
  
  return (
    <Layout>
      <NextSeo title="Work" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          id="sticky"
        >
          <m.main>
            <WorkCarousel work={work} />
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  await waitload(2);
  const cms = await pageService.fetchQuery(context)

  return {
    props: { dummy: 'dummy', ...cms }
  }
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
