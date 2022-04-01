import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
// import FPSStats from 'react-fps-stats'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

      {/* <FPSStats top="auto" bottom="0" right="0" left="auto" /> */}

      { router.pathname !== '/' && (
        <div className="ml-auto flex space-x-3 text-sm md:text-base w-auto fixed top-0 right-0 z-50">
          <Link href={router.pathname == '/menu' ? '/' : '/menu'}>
            <a className="block w-[75px] p-3">
              <span className="block w-full h-[3px] mb-[5px] bg-current"></span>
              <span className="block w-full h-[3px] mb-[5px] bg-current"></span>
            </a>
          </Link>
        </div>
      )}
      
      { (router.pathname == '/work' || router.pathname == '/work/grid') && (
        <div className="absolute bottom-0 right-0 p-3 z-50">
          <nav>
            <ul className="text-right">
              <li className="block">
                <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase">Grid</span>
              </li>
              <li className="block">
                <span className="text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase opacity-20">Index</span>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}