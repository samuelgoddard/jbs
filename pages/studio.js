import { Fragment, useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import BlockContent from '@sanity/block-content-to-react'
import Image from '@/components/image'
import HashGrid from '@/components/hash-grid'
import scrollRefresh from '@/helpers/scroll-refresh'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import gsap, { Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'

const query = `{
  "studio": *[_type == "studio"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroText,
    content,
    clientList,
    servicesList,
    contentSupportingImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      }
    },
    teamMembers[] {
      name,
      jobTitle,
      image {
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
    seo {
      ...,
      shareGraphic {
        asset->
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

export default function Studio(initialData) {
  scrollRefresh();

  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, SplitText);
  //   const element = ref.current;

  //   gsap.set(element.querySelector('.studio'), { x: 0 })
  //     const tl = gsap.timeline( { 
  //       scrollTrigger: {
  //         trigger: element.querySelector('.studio'),
  //         start: "+=133 80%",
  //         end: "+=200 40%",
  //         scrub: true,
  //         markers: false,
  //         toggleActions: "play reverse play reverse",
  //       }
  //     });
      
  //     tl.to(element.querySelector('.studio'), { x: '-67%' });

  //   gsap.utils.toArray(element.querySelectorAll('.fade')).forEach((item) => {
  //     gsap.set(item, { autoAlpha: 0 })
  //     const tl = gsap.timeline( { 
  //       scrollTrigger: {
  //         trigger: item,
  //         start: "+=133 80%",
  //         end: "+=200 40%",
  //         scrub: true,
  //         markers: false,
  //         toggleActions: "play reverse play reverse",
  //       }
  //     });
      
  //     tl.to(item, { autoAlpha: 1 });
  //   });
    
  //   setTimeout(() => {
  //     gsap.utils.toArray(element.querySelectorAll('.split-cms')).forEach((item) => {
  //       let SplitClient = new SplitText(item.querySelectorAll('p'), { type: "words, lines" });
        
  //       let chars = SplitClient.lines;

  //       gsap.set(chars, { autoAlpha: 0, y: 15 })

  //       const tl = gsap.timeline( { 
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "+=133 80%",
  //           end: "+=200 40%",
  //           scrub: true,
  //           markers: false,
  //           toggleActions: "play reverse play reverse",
  //         }
  //       });
        
  //       tl.to(chars, {
  //         duration: 3,
  //         autoAlpha: 1,
  //         y: 0,
  //         stagger: 0.2
  //       });
  //     })
  //   }, 10);

  //   gsap.utils.toArray(element.querySelectorAll('.split')).forEach((item) => {
  //     let SplitClient = new SplitText(item, { type: "words, lines" });
      
  //     let chars = SplitClient.lines;

  //     gsap.set(chars, { autoAlpha: 0, y: 10 })

  //     const tl = gsap.timeline( { 
  //       scrollTrigger: {
  //         trigger: item,
  //         start: "+=133 80%",
  //         end: "+=200 40%",
  //         scrub: true,
  //         markers: false,
  //         toggleActions: "play reverse play reverse",
  //       }
  //     });
      
  //     tl.to(chars, {
  //       duration: 3,
  //       autoAlpha: 1,
  //       y: 0,
  //       stagger: 0.2
  //     });
  //   })
  // }, []);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  useIsomorphicLayoutEffect(() => {
    const wrapper = ref.current;

    gsap.set(wrapper.querySelector('.team-member'), { xPercent: '-155'});
    gsap.set(wrapper.querySelector('.team-graph'), { xPercent: '-155', autoAlpha: 0});

    const anim = gsap.to(wrapper.querySelector('.team-member'), {
      ease: "power2.inOut", duration: 1, xPercent: 0, paused: true,
    });  
    
    ScrollTrigger.create({
      trigger: wrapper.querySelector('.team-member'),
      start: "top center",
      end: "top center",
      toggleActions: "play play reverse reverse",
      markers: true,
      invalidateOnRefresh: true,
      onEnter: () => anim.play(),
      onEnterBack: () => anim.reverse(),
    });

    const anim2 = gsap.to(wrapper.querySelector('.team-graph'), {
      ease: "power2.inOut", duration: 1, autoAlpha: 1, xPercent: 0, paused: true
    });  
    
    ScrollTrigger.create({
      trigger: wrapper.querySelector('.team-graph'),
      start: "top center",
      end: "top center",
      toggleActions: "play play reverse reverse",
      markers: true,
      invalidateOnRefresh: true,
      onEnter: () => anim2.play(),
      onEnterBack: () => anim2.reverse(),
    });
  }, []);

  const { data: { studio, contact } } = pageService.getPreviewHook(initialData)()

  return (
    <>
      <NextSeo title={studio.title} />
      
      <Header/>

      <div ref={ref}>
        <main className="">
          <div className="">
            <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
              <div className="col-span-9 md:mr-[1vw] mt-[25vw] md:mt-0">
                <div className="absolute top-0 left-0 grid grid-cols-9 z-10">
                  <div className="col-span-9 md:col-span-3 xl:col-span-2 bg-white pt-[20vw] p-3">
                    <div className="w-10/12 leading-tight indent-8">
                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.heroText} />
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-[83vh] md:h-screen relative overflow-hidden flex flex-wrap flex-col">
                  <div className="grid grid-cols-9 flex-1 h-full">
                    <div className="relative overflow-hidden mb-auto col-span-9 md:col-span-8 h-full">
                      <Image
                        image={studio.heroImage}
                        layout="fill"
                        focalPoint={studio.heroImage.hotspot}
                        widthOverride={1200}
                        className="w-full z-0 absolute inset-0 h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1 className="font-bold text-[11vw] leading-none grid grid-cols-9 mt-auto h-auto w-auto">
                    <span className="block col-start-1">The</span>
                    <span className="block col-start-7 col-span-3 text-right studio">Studio</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="grid grid-cols-9 mb-12 md:mb-24 xl:mb-28 2xl:mb-40">
                <div className="hidden md:block col-span-2 fade">
                  <Image
                    image={studio.contentSupportingImage}
                    focalPoint={studio.contentSupportingImage.hotspot}
                    widthOverride={550}
                    className="w-full"
                  />
                </div>
                
                <div className="col-span-7 md:col-span-3 col-start-1 md:col-start-5 leading-snug content max-w-[550px] split-cms">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={studio.content} />
                </div>
              </div>

              <h2 className="font-bold text-[7.5vw] leading-none mb-8 md:mb-16 xl:mb-20 split">
                <span className="block text-right">JBS Is a</span>
                <span className="block text-left">Photography + Production</span>
                <span className="block text-left">Studio Specialising In</span>
                <span className="block text-left">Lifestyle, Food + Drink</span>
              </h2>

              <div className="grid grid-cols-9 gap-3 mb-12 md:mb-24 xl:mb-28 2xl:mb-40 team-wrapper">
                {studio.teamMembers.map((e, i) =>
                  i == 2 ? (
                    <Fragment key={i}>
                      <div className="col-span-8 md:col-span-3 xl:col-span-3 team-graph relative z-0">
                        <HashGrid />
                      </div>
                      <div className="col-span-8 md:col-span-2 xl:col-span-2 team-member relative z-0">
                        <Image
                          image={e.image}
                          focalPoint={e.image.hotspot}
                          widthOverride={550}
                          className="w-full mb-3"
                        />
                        <span className="block text-xs leading-none mb-2">{e.jobTitle}</span>
                        <span className="block leading-none">{e.name}</span>
                      </div>  
                    </Fragment>
                  ) : (
                    <div className="col-span-8 md:col-span-2 xl:col-span-2 fade relative z-10" key={i}>
                      <Image
                        image={e.image}
                        focalPoint={e.image.hotspot}
                        widthOverride={550}
                        className="w-full mb-3"
                      />
                      <span className="block text-xs leading-none mb-2">{e.jobTitle}</span>
                      <span className="block leading-none">{e.name}</span>
                    </div>  
                  )
                )}
              </div>


              <div className="grid grid-cols-9 gap-3 mb-20 md:mb-32 xl:mb-48 2xl:mb-64">
                <div className="col-span-9 md:col-span-1 mb-5 md:mb-0">
                  <span className="block leading-none mb-1 fade">Clients &amp; <span className="block">Info</span></span>
                </div>
                
                <div className="col-span-9 md:col-span-2 md:col-start-3 mb-6 md:mb-0 split">
                  {studio.clientList.map((e, i) => {
                    return (
                      <span className="block leading-none mb-1" key={i}>{e}</span>
                    )
                  })}
                </div>

                <div className="col-span-9 md:col-span-2 md:col-start-5 mb-6 md:mb-0 split">
                  {studio.servicesList.map((e, i) => {
                    return (
                      <span className="block leading-none mb-1" key={i}>{e}</span>
                    )
                  })}
                </div>

                <div className="col-span-9 md:col-span-2 md:col-start-8">
                  { contact.email && (<a href={`mailto:${contact.email}`} className="block leading-none mb-1 underline fade">Email</a>)}
                  
                  <div className="split">
                    {contact.socials.map((e, i) => {
                      return (
                        <a key={i} href={e.url} target="_blank" rel="noopener noreferrer" className="block leading-none mb-1 underline">{e.title}</a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer contact={contact} />
      </div>
  
    </>
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