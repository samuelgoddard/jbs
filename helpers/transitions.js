export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, delay: 0.38, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scaleDelay = {
	initial: { scale: 1 },
  enter: { 
    scale: 1.2,
    transition: { duration: 1.4, delay: 0.12, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1,
		transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] }
	}
}