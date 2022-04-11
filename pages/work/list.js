import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import WorkListSection from '@/components/work-list'
import scrollRefresh from '@/helpers/scroll-refresh'

const query = `{
  "work": *[_type == "work"]{
    title,
    content,
    category,
    type,
    location,
    campaignTitle,
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

export default function WorkList(initialData) {
  const { data: { work } } = pageService.getPreviewHook(initialData)()
  scrollRefresh();

  return (
    <Layout>
      <NextSeo title="Work List" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          id="sticky"
        >
          <m.main>
            <WorkListSection work={work} />
          </m.main>
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