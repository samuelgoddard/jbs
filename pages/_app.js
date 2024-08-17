import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { IntroContext } from '@/context/intro'
import Link from 'next/link'
import { useState } from 'react'
import { NewsletterContext } from '@/context/newsletter'
import { ReelContext } from '@/context/reel'
import Header from '@/components/header'
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(true);
  const [reelContext, setReelContext] = useState(false)
  const [newsletterContext, setNewsletterContext] = useState(false);

  const newsletterToggle = () => {
    if (newsletterContext) {
      setNewsletterContext(false)
    } else {
      setNewsletterContext(true)
    }
  }

  return (
    <ReactLenis root options={{ lerp: 0.125 }}>
      <DefaultSeo {...SEO} />

      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <ReelContext.Provider value={[reelContext, setReelContext]}>
          <NewsletterContext.Provider value={[newsletterContext, setNewsletterContext]}>
            { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

            <Header />
            {/* <div className="ml-auto flex space-x-3 text-sm md:text-base w-auto fixed top-0 right-0 z-[10000000000000]">
              <Link href={router.pathname == '/menu' ? '/' : '/menu'}>
                <a className={`block w-[75px] bg-transparent p-3 group ${ router.pathname == '/studio' ? 'text-white' : 'text-black'}`}>
                  <div className="relative">
                    <span className={`block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] ${router.pathname == '/menu' && 'rotate-[45deg] scale-x-[0.55] translate-x-[9px] translate-y-2' }`}></span>
                    <span className={`block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] ${router.pathname == '/menu' ? 'rotate-[-45deg] scale-x-[0.55] translate-x-2' : 'group-hover:-translate-x-2'  }`}></span>
                  </div>
                </a>
              </Link>
            </div> */}
              
            <div id="app-wrapper">
              <AnimatePresence exitBeforeEnter initial={false}>
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
            </div>

            <LazyMotion features={domAnimation}>
              <AnimatePresence>
                {newsletterContext && (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.71,0,0.17,1] }}
                    className="fixed inset-0 flex-col items-center justify-center z-[1000] flex"
                  >
                    <button
                      onClick={newsletterToggle}
                      aria-label="Close Newsletter Modal"
                      className="z-[1001] bg-black fixed inset-0 w-full h-full block opacity-90"
                    ></button>
                    
                    <m.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      transition={{ duration: 0.3, ease: [0.71,0,0.17,1] }}
                      className="bg-white w-10/12 lg:w-[75%] h-[78vh] relative z-[1002] overflow-hidden"
                    >
                      
                      <div className="flex flex-wrap h-full">
                        <div className="w-full md:w-1/2 h-[40%] md:h-full">
                          <img src="/images/intro-04.jpg" alt="JBS Photography Image" className="w-full h-full object-cover object-center" />
                        </div>

                        <div className="w-full md:w-1/2 h-[60%] md:h-full p-5 md:p-10 flex flex-col items-center justify-center relative">
                          <button onClick={newsletterToggle} aria-label="Close Newsletter Modal" className="absolute top-3 right-4 font-sans uppercase text-sm md:text-lg">Close</button>
                          <div className="w-full">
                            <span className="block leading-none text-xs md:text-sm md:leading-none font-mono mx-auto text-center mb-2 md:mb-3 lg:mb-3">The Newsletter</span>
                            <h2 className="text-[6.5vw] md:text-[3.55vw] leading-[0.88] md:leading-[0.88] text-center mb-4 md:mb-6">The latest from the JBS crew, directly to your inbox.</h2>
                            <span className="block leading-none text-xs md:text-sm md:leading-none font-mono mx-auto text-center mb-2 md:mb-3 lg:mb-3 max-w-[600px] w-full md:w-10/12">Once a month updates with no spam. New projects, behind-the-scenes stuff, and opportunities, all in one place.</span>

                            <form action="https://jasonbaileystudio.us21.list-manage.com/subscribe/post?u=c918f045453cfed8b4120ae25&amp;id=d3840ade25&amp;f_id=0090b2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="w-full mt-8 md:mt-[4vw]">
                              <input type="email" name="EMAIL" id="mce-EMAIL" required placeholder="Enter Email Address.." className="uppercase text-sm border border-black appearance-none w-full p-2 md:p-4 px-3 md:px-4 mb-2 md:mb-4 focus-visible:outline-none focus-visible:border-orange" />

                              <input type="submit" className="appearance-none bg-black text-white p-2 md:p-3 px-3 md:px-4 w-full text-center font-sans uppercase text-base md:text-xl xl:text-2xl block cursor-pointer focus-visible:outline-none focus-visible:bg-orange focus-visible:text-black hover:text-black hover:bg-orange" value="Sign Up" />
                            </form>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {reelContext && (
                  <m.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.66, ease: [0.83, 0, 0.17, 1] }} className="fixed inset-0 w-full h-full bg-white bg-opacity-90 z-[10000000000000000000] flex items-center justify-center">
                    <button
                      onClick={() => setReelContext(!reelContext)}
                      className="absolute top-3 right-3 z-[1000000000000000000] block w-[75px] bg-transparent p-3 group"
                    >
                      <div class="relative"><span class="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] rotate-[45deg] scale-x-[0.55] translate-x-[9px] translate-y-2"></span><span class="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] rotate-[-45deg] scale-x-[0.55] translate-x-2"></span></div>
                    </button>

                    <div className="grid grid-cols-9 p-3 md:p-3 border-b border-white md:border-0">
                      <div className="col-span-9 md:col-span-7 md:col-start-2">
                        <video 
                          controls
                          preload="metadata"
                          className="w-full h-[66vw] md:h-[40vw] relative z-10 block object-cover object-center"
                          autoPlay={true}
                        >
                          <source src="https://player.vimeo.com/progressive_redirect/playback/913281113/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c7c1a8a64031beda28fcc4483dc3d7a7be8917cc6d1eb97f21ff700071cdf093" type="video/mp4"/>
                          Sorry. Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </LazyMotion>
            </NewsletterContext.Provider>
          </ReelContext.Provider>
        </IntroContext.Provider>
      </ReactLenis>
  )
}