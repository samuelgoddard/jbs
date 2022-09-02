import '@/styles/main.css'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { IntroContext } from '@/context/intro'
import Link from 'next/link'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);

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
    hidden: { width: '30vw', height: '22vw' }
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      
      <IntroContext.Provider value={[introContext, setIntroContext]}>
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
                      className="w-[33vw]"
                    >
                      <img src="/images/intro-01.jpg" alt="JBS Photography Image" />
                    </m.div>

                    <m.div
                      initial="hidden"
                      animate="visible"
                      variants={itemIn}
                      transition={{ delay: 0.6, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                      className="absolute top-0 left-0 ml-[20%] mt-[-15%] w-[20vw] rotate-6"
                    >
                      <img src="/images/intro-02.jpg" alt="JBS Photography Image" />
                    </m.div>
                    
                    <m.div
                      initial="hidden"
                      animate="visible"
                      variants={itemIn}
                      transition={{ delay: 0.9, duration: 0, ease: [0.83, 0, 0.17, 1]  }}
                      className="absolute top-0 left-0 ml-[8%] w-[28vw] -rotate-6"
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

        <div className="ml-auto flex space-x-3 text-sm md:text-base w-auto fixed top-0 right-0 z-[100000000]">
          <Link href={router.pathname == '/menu' ? '/' : '/menu'}>
            <a className={`block w-[75px] bg-transparent p-3 group ${ router.pathname == '/studio' ? 'text-white' : 'text-black'}`}>
              <div className="relative">
                <span className="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-[450ms]"></span>
                <span className="block w-full h-[3px] mb-[5px] bg-current group-hover:-translate-x-2 transition ease-in-out duration-[450ms]"></span>
              </div>
            </a>
          </Link>
        </div>
          
        <div id="app-wrapper">
          <AnimatePresence exitBeforeEnter initial={router.asPath == '/' ? true : false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </IntroContext.Provider>
    </>
  )
}