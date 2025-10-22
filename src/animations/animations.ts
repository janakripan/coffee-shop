
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
  transition: { duration: 0.3, ease: "easeInOut" }
};

export const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

// Consolidated heroTextAnimation (removed duplicate)
export const heroTextAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 }
  }
};

// Consolidated floatingAnimation (removed duplicate)
export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// New Hero Background Zoom Animation
export const heroBackgroundZoom = {
  initial: { scale: 1.1 },
  animate: { 
    scale: 1,
    transition: { 
      duration: 3, 
      ease: "easeOut" 
    }
  }
};

// Letter-by-Letter Animation for Banner Text - Reference Site Style
export const heroTextSequential = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Timing to match reference site
      delayChildren: 1.5
    }
  }
};

export const heroTextLine = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Letter-by-letter stagger
      delayChildren: 0
    }
  }
};

// Second line animation - starts after first line completes
export const heroTextLineSecond = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Letter-by-letter stagger
      delayChildren: 1.8 // Start after first line completes
    }
  }
};

// Individual Letter Animation with 3D Transform - Reference Site Style
export const heroLetterAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0
    }
  }
};

// Second line letter animation
export const heroLetterAnimationSecond = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0
    }
  }
};

export const heroLetter = {
  hidden: { 
    opacity: 0,
    y: 100, // Start further below
    rotateX: 90, // 3D rotation effect like reference site
    scale: 0.8,
    transformOrigin: "bottom"
  },
  visible: { 
    opacity: 1,
    y: 0, // Slide up to position
    rotateX: 0, // Rotate to normal position
    scale: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth cinematic easing
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Hero Content Animation (for description, buttons, stats)
export const heroContentSequential = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 4.5 // Start after banner text completes
    }
  }
};

export const heroContentItem = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Sequential Content Animation for sections after Hero
export const sequentialContent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 6.5 // Start after all hero content completes
    }
  }
};

export const contentSection = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
