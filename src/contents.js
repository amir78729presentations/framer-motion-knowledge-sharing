import Countdown from "./components/samples/countdown/Countdown";

import intro from './MarkdownFiles/intro.md'
import animationBasic from './MarkdownFiles/animationBasic.md'
import animationEnter from './MarkdownFiles/animationEnter.md'
import animationExit from './MarkdownFiles/animationExit.md'

import variants from './MarkdownFiles/variants.md'
import variantsMore from './MarkdownFiles/variantsMore.md'

import transitionIntro from './MarkdownFiles/transitionIntro.md'
import transitionDelay from './MarkdownFiles/transitionDelay.md'
import transitionDuraiton from './MarkdownFiles/transitionDuraiton.md'
import transitionEase from './MarkdownFiles/transitionEase.md'


import gesturesIntro from './MarkdownFiles/gesturesIntro.md'
import gesturesTap from './MarkdownFiles/gesturesTap.md'


import React from "react";
import Control from "./components/samples/control/Control";
import {motion} from "framer-motion";
import {log} from "react-syntax-highlighter/dist/cjs/languages/prism";
import Gesture from "./components/samples/gesture/Gesture";

export const contents = [
  {
    markdown: intro,
  },
  {
    markdown: animationBasic,
    component: <Countdown showDefault animationProps={{
      animate: { x: -100, y: 80, rotate: 30, scale: 0.7, position: 'absolute' },
      initial: { x: 0, y: 0, rotate: 0, scale: 1 }
    }} text="animated" />
  },
  {
    markdown: animationEnter,
    component: <Countdown showDefault animationProps={{
      animate: { x: -100, y: 80, rotate: 30, scale: 0.7, position: 'absolute' },
      initial: { x: 50, y: 20, rotate: -60, scale: 1.1, position: 'absolute' },
    }} text="animated" />,
  },
  {
    markdown: animationExit,
    component: <Countdown
        hideButton
        variant="TIMER"
      animationProps={{
        exit: { x: 100, opacity: 0, position: "absolute" },
        initial: { y: -100, opacity: 0, position: "absolute" },
        animate: { y:0, x: 0, opacity: 1 }
      }}
    />,
  },
    {
        markdown: variants,
        component: (
            <Countdown
                hideButton
                text="variant example"
                variant="TIMER"
                animationProps={{
                    variants: {
                        visible: { opacity: 1, position: 'absolute' },
                        hidden: { opacity: 0, position: 'absolute' },
                    },
                    initial: 'hidden',
                    animate: 'visible',
                }}
            />
        ),
    },
    {
        markdown: variantsMore,
    },
    {
        markdown: transitionIntro,
    },
  {
    markdown: transitionDelay,
    component: (
        <div style={{ transform: 'scale(0.9)' }}>
          <Countdown
              hideButton
              text="delay: 0"
              variant="TIMER"
              animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" },
                initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0 }
              }}
          />
          <Countdown
              hideButton
              text="delay: 0.2"
              variant="TIMER"
              animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" },
                initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0.2 }
              }}
          />
          <Countdown
              hideButton
              text="delay: 0.4"
              variant="TIMER"
              animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" },
                initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0.4 }
              }}
          />
        </div>
    ),
  },
  {
    markdown: transitionDuraiton,
      component: (
          <div style={{ transform: 'scale(0.9)' }}>
              <Countdown
                  hideButton
                  text="duration: 0.4s"
                  variant="TIMER"
                  animationProps={{
                      exit: { x: 100, opacity: 0, position: "absolute" },
                      initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                      animate: { x: 0, opacity: 1 },
                      transition: { duration: 0.4 }
                  }}
              />
              <Countdown
                  hideButton
                  text="duration: 0.6s"
                  variant="TIMER"
                  animationProps={{
                      exit: { x: 100, opacity: 0, position: "absolute" },
                      initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                      animate: { x: 0, opacity: 1 },
                      transition: { duration: 0.6 }
                  }}
              />
              <Countdown
                  hideButton
                  text="duration: 0.8s"
                  variant="TIMER"
                  animationProps={{
                      exit: { x: 100, opacity: 0, position: "absolute" },
                      initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                      animate: { x: 0, opacity: 1 },
                      transition: { duration: 0.8 }
                  }}
              />
              <Countdown
                  hideButton
                  text="duration: 1s"
                  variant="TIMER"
                  animationProps={{
                      exit: { x: 100, opacity: 0, position: "absolute" },
                      initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 },
                      animate: { x: 0, opacity: 1 },
                      transition: { duration: 1 }
                  }}
              />
          </div>
      ),
  },
  {
    markdown: transitionEase,
    component: (
        <div style={{ transform: 'scale(0.9)' }}>
            <Countdown
                hideButton text="linear" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'linear'}
                }}
            />
            <Countdown
                hideButton text="easeIn" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'easeIn'}
                }}
            />
            <Countdown
                hideButton text="easeOut" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'easeOut'}
                }}
            />
            <Countdown
                hideButton text="easeInOut" variant="TIMER" animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                transition: { ease: 'easeInOut'}
            }}
            />
            <Countdown
                hideButton text="circIn" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'circIn'}
                }}
            />
            <Countdown
                hideButton text="circOut" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'circOut'}
                }}
            />
            <Countdown
                hideButton text="circInOut" variant="TIMER" animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                transition: { ease: 'circInOut'}
            }}
            />
            <Countdown
                hideButton text="backIn" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'backIn'}
                }}
            />
            <Countdown
                hideButton text="backOut" variant="TIMER" animationProps={{
                    exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                    transition: { ease: 'backOut'}
                }}
            />
            <Countdown
                hideButton text="backInOut" variant="TIMER" animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                transition: { ease: 'backInOut'}
            }}
            />
            <Countdown
                hideButton text="anticipate" variant="TIMER" animationProps={{
                exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 0.6 }, animate: { x: 0, opacity: 1 },
                transition: { ease: 'anticipate'}
            }}
            />
        </div>
    ),
  },
  {
    markdown: gesturesIntro,
    component: (
        <Gesture variant="HOVER" />
    ),
  },
  {
    markdown: gesturesTap,
    component: (
        <Gesture variant="TAP" />
    ),
  },
  {
    markdown: ``,
    component: '',
  },
  {
    markdown: ``,
    component: '',
  },
  {
    markdown: ``,

  },
]
