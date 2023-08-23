import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { IntroContext } from '@/context/intro'
import Link from 'next/link'
import { useState } from 'react'
import { NewsletterContext } from '@/context/newsletter'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);
  const [newsletterContext, setNewsletterContext] = useState(false);

  const newsletterToggle = () => {
    if (newsletterContext) {
      setNewsletterContext(false)
    } else {
      setNewsletterContext(true)
    }
  }

  const introEnd = {
    visible: { opacity: '100%' },
    hidden: { opacity: 0 }
  }

  const itemIn = {
    visible: { opacity: '100%' },
    hidden: { opacity: 0 }
  }

  const itemFill = {
    visible: { width: '100%', height: '100%' },
    hidden: { width: '35vw', height: '24vw' }
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <NewsletterContext.Provider value={[newsletterContext, setNewsletterContext]}>
          <LazyMotion features={domAnimation}>
            { !introContext && (
              <m.div 
                initial="visible"
                animate="hidden"
                variants={introEnd}
                transition={{ delay: 2.95, duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
                className="bg-white fixed inset-0 z-[1000] pointer-events-none flex flex-col"
              >
                <div className="bg-white fixed inset-0 z-[1000] pointer-events-none flex flex-col h-full">
                  <div className="fixed inset-0 w-full z-20 flex items-center justify-center h-full">
                    <div className="relative">
                      <m.div
                        initial="hidden"
                        animate="visible"
                        variants={itemIn}
                        transition={{ delay: 0.3, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                        className="w-[55vw] md:w-[33vw]"
                      >
                        <img src="/images/intro-01.jpg" alt="JBS Photography Image" />
                      </m.div>

                      <m.div
                        initial="hidden"
                        animate="visible"
                        variants={itemIn}
                        transition={{ delay: 0.6, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                        className="absolute top-0 left-0 ml-[20%] mt-[-15%] w-[37vw] md:w-[20vw] rotate-6"
                      >
                        <img src="/images/intro-02.jpg" alt="JBS Photography Image" />
                      </m.div>
                      
                      <m.div
                        initial="hidden"
                        animate="visible"
                        variants={itemIn}
                        transition={{ delay: 0.9, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                        className="absolute top-0 left-0 ml-[8%] w-[55vw] md:w-[28vw] -rotate-6"
                      >
                        <img src="/images/intro-03.jpg" alt="JBS Photography Image" />
                      </m.div>
                    </div>
                  
                    <m.div
                      initial="hidden"
                      animate="visible"
                      variants={itemIn}
                      transition={{ delay: 1.2, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                    >
                      <div    
                        className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center object-cover object-center"
                      >
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={itemFill}
                          transition={{ delay: 1.7, duration: 1.25, ease: [0.85, 0, 0.15, 1]  }}
                        >
                          <img src="/images/intro-04.jpg" alt="JBS Photography Image" className="w-full h-full object-cover object-center" />
                        </m.div>
                      </div>
                    </m.div>
                  </div>
                </div>
              </m.div>
            )}
          </LazyMotion>

          { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

          <div className="ml-auto flex space-x-3 text-sm md:text-base w-auto fixed top-0 right-0 z-[10000000000000]">
            <Link href={router.pathname == '/menu' ? '/' : '/menu'}>
              <a className={`block w-[75px] bg-transparent p-3 group ${ router.pathname == '/studio' ? 'text-white' : 'text-black'}`}>
                <div className="relative">
                  <span className={`block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] ${router.pathname == '/menu' && 'rotate-[45deg] scale-x-[0.55] translate-x-[9px] translate-y-2' }`}></span>
                  <span className={`block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms] ${router.pathname == '/menu' ? 'rotate-[-45deg] scale-x-[0.55] translate-x-2' : 'group-hover:-translate-x-2'  }`}></span>
                </div>
              </a>
            </Link>
          </div>
            
          <div id="app-wrapper">
            <AnimatePresence exitBeforeEnter initial={router.asPath == '/' ? true : false}>
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
          </LazyMotion>
          </NewsletterContext.Provider>
        </IntroContext.Provider>
    </>
  )
}