// Centralized Motion Design System
// Timing and curves calibrated directly to the reference video

export const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const // Smooth cubic-bezier for architectural reveals
export const EXPO_EASE = [0.16, 1, 0.3, 1] as const

export const motionConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    reveal: 1.4,
    cinematic: 2.0,
  },
  stagger: {
    tight: 0.08,
    standard: 0.15,
    relaxed: 0.25,
  },
  ease: {
    smooth: TRANSITION_EASE,
    expo: EXPO_EASE,
  },
}
