import { m } from 'framer-motion'

export default function FadeInWhenVisible({ children, duration, delay, className }) {
  return(
    <div className={`relative overflow-hidden ${className}`}>
      <m.div
        initial="none"
        whileInView="block"
        viewport={{ once: false, margin: '-50px' }}
        transition={{ duration: duration ? duration : 0.7, ease: [0.83, 0, 0.17, 1], delay: delay ? delay : 0 }}
        className="w-full"
        variants={{
          block: { opacity: 1 },
          none: { opacity: 0 }
        }}
      >
        {children}
      </m.div>
    </div>
  )
}