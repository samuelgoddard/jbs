import Header from '@/components/header'
import { NextSeo } from 'next-seo'

export default function Terms() {
  return (
    <>
      <NextSeo title="Terms" />
      <Header />
    
      <div
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <main className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20">
          <article>
            <div className="content max-w-3xl mb-4 font-mono">
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">Terms &amp; Conditions</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}