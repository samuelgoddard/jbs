import '@/styles/main.css'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import FPSStats from 'react-fps-stats'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

      {/* <FPSStats top="auto" bottom="0" left="0" right="auto" /> */}

      <div className="ml-auto flex space-x-3 text-sm md:text-base w-auto fixed top-0 right-0 z-[100]">
        <Link href={router.pathname == '/menu' ? '/' : '/menu'}>
          <a className={`block w-[75px] bg-transparent p-3 group ${ router.pathname == '/studio' ? 'text-white' : 'text-black'}`}>
            <div className="relative">
              <span className="block w-full h-[3px] mb-[5px] bg-current transition ease-in-out duration-300"></span>
              <span className="block w-full h-[3px] mb-[5px] bg-current group-hover:-translate-x-2 transition ease-in-out duration-300"></span>
            </div>
          </a>
        </Link>
      </div>
      
      { router.pathname == '/work/list' && (
        <div className="fixed bottom-0 left-0 right-0 h-[90px] bg-white z-30 p-3 items-end hidden md:flex">
          <Link href="/">
            <a className="w-[33px] md:w-[48px]">
              <svg className="w-full" viewBox="0 0 111 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9088 52.2402C27.7683 52.2402 33.8176 45.9723 33.8176 34.0924V0H23.4682V34.8212C23.4682 39.9959 21.5733 42.9112 16.9088 42.9112C12.3172 42.9112 10.3493 40.4332 10.3493 34.4568H0C0 46.3367 6.3408 52.2402 16.9088 52.2402Z" fill="#212121"/>
                <path d="M36.9389 51.1366H53.3375C61.5733 51.1366 69.4446 45.7433 69.4446 35.6126C69.4446 29.3447 66.8208 24.8988 62.1563 22.7852V22.4937C64.7801 21.036 67.5496 17.8292 67.5496 12.6545C67.5496 4.3459 62.0106 0 52.9731 0H36.9389V51.1366ZM47.2882 18.6309V9.15616H52.6087C55.2325 9.15616 57.2003 10.4681 57.2003 13.8935C57.2003 17.4648 55.2325 18.6309 52.6087 18.6309H47.2882ZM47.2882 42.0992V27.0853H52.4629C56.4715 27.0853 59.0952 29.4904 59.0952 34.5922C59.0952 39.694 56.4715 42.0992 52.4629 42.0992H47.2882Z" fill="#212121"/>
                <path d="M87.1158 51.5439C96.9549 51.5439 102.786 45.1334 102.786 36.679C102.786 28.8077 98.777 25.7279 89.5209 21.5735C83.0343 18.6582 81.5038 16.9819 81.5038 13.4836C81.5038 10.4225 83.7632 8.45465 87.0429 8.45465C90.9786 8.45465 92.7277 10.714 92.7277 13.9209H102.421C102.348 5.75799 97.3922 0.000251422 87.0429 0.000251422C78.5885 0.000251422 71.8833 4.30033 71.8833 13.7751C71.8833 20.6261 76.7664 25.0178 83.9089 28.1517C90.4684 30.9942 93.165 32.962 93.165 36.679C93.165 40.5418 90.4684 42.3639 87.1158 42.3639C82.597 42.3639 80.6292 39.3028 80.2648 35.1485H70.7172C71.3002 45.6436 77.3495 51.5439 87.1158 51.5439Z" fill="#212121"/>
                <path d="M106.826 0C104.505 0 102.642 1.70285 102.642 4.19591C102.642 6.66671 104.505 8.35843 106.826 8.35843C109.136 8.35843 111 6.66671 111 4.19591C111 1.70285 109.136 0 106.826 0ZM106.826 7.59048C104.952 7.59048 103.501 6.21039 103.501 4.19591C103.501 2.14804 104.952 0.779082 106.826 0.779082C108.735 0.779082 110.152 2.14804 110.152 4.19591C110.152 6.21039 108.735 7.59048 106.826 7.59048ZM107.931 4.79692C107.775 5.40905 107.317 5.63165 106.815 5.63165C106.157 5.63165 105.677 5.11968 105.677 4.10687C105.677 3.1052 106.168 2.61549 106.815 2.61549C107.362 2.61549 107.775 2.96051 107.909 3.56152L108.835 3.30553C108.623 2.45967 107.92 1.82528 106.849 1.82528C105.521 1.82528 104.673 2.70453 104.673 4.10687C104.673 5.52035 105.443 6.42186 106.815 6.42186C107.92 6.42186 108.623 5.79859 108.869 5.03064L107.931 4.79692Z" fill="#212121"/>
              </svg>
            </a>
          </Link>

          <Link href="/reel"><a className={`text-sm md:text-[2.8vw] xl:text-[2.2vw] 2xl:text-[2vw] leading-none md:leading-none xl:leading-none 2xl:leading-none font-sans uppercase mx-auto`}>
            <span className="block ml-[-48px]">Reel</span>
          </a></Link>
        </div>
      )}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}