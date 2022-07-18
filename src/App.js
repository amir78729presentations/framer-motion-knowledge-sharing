import './App.css';
import MarkdownContainer from "./components/MarkdownContainer";
import GitHubIcon from '@mui/icons-material/GitHub';
import intro from './MarkdownFiles/intro.md'
import animationBasic from './MarkdownFiles/animationBasic.md'
import animationEnter from './MarkdownFiles/animationEnter.md'
import animationExit from './MarkdownFiles/animationExit.md'
import animationControls from './MarkdownFiles/animationControls.md'
import variants from './MarkdownFiles/variants.md'
import variantsMore from './MarkdownFiles/variantsMore.md'

import transitionIntro from './MarkdownFiles/transitionIntro.md'
import transitionDelay from './MarkdownFiles/transitionDelay.md'
import transitionDuraiton from './MarkdownFiles/transitionDuraiton.md'
import transitionEase from './MarkdownFiles/transitionEase.md'

import gesturesIntro from './MarkdownFiles/gesturesIntro.md'
import gesturesTap from './MarkdownFiles/gesturesTap.md'
import viewport from './MarkdownFiles/viewport.md'
import gesturesDrag from './MarkdownFiles/gesturesDrag.md'
import gesturesConstraint from './MarkdownFiles/gesturesConstraint.md'
import gesturesSnapToOrigin from './MarkdownFiles/gesturesSnapToOrigin.md'

import tech from './MarkdownFiles/tech.md'

import example1 from './MarkdownFiles/_e1.md';
import example2 from './MarkdownFiles/_e2.md';
import example3 from './MarkdownFiles/_e3.md';
import example4 from './MarkdownFiles/_e4.md';

import references from './MarkdownFiles/references.md';


import design from './assets/design.png'
import AffiliateCampaignLotteryPage from "./components/examples/AffiliateCampaignLottery/AffiliateCampaignLotteryPage";


import Countdown from "./components/samples/countdown/Countdown";
import React from "react";
import Gesture from "./components/samples/gesture/Gesture";
import CountdownExample from "./components/samples/countdownExample/CountdownExample";

import NowrouzLandingFormPresentation from "./components/examples/NowrouzLandingForm/NowrouzLandingFormPresentation";

import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AnimationIcon from '@mui/icons-material/Animation';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GestureIcon from '@mui/icons-material/Gesture';
import BuildIcon from '@mui/icons-material/Build';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import {motion} from "framer-motion";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 136deg, #ff5722 0%, #ff5722 100%);',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 136deg, #ff5722 0%, #ff5722 100%);',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  
  const icons = {
    1: <AnimationIcon />,
    2: <AutoAwesomeMotionIcon />,
    3: <GestureIcon />,
    4: <BuildIcon />,
    5: <AutoFixHighIcon />,
  };
  
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
function App() {
  const steps = ['Animations', 'Transition', 'Gestures', 'Technical Review', 'Examples'];
  
  return (
    <div className="App">
      <section className="hero">
        <motion.h1
          initial={{x: -10, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{
            delay: 0.5
          }}
        >framer-motion Knowledge Sharing</motion.h1>
        <motion.h2
          initial={{x: -10, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{
            delay: 0.7
          }}
        >by Amirhossein <a href="https://github.com/amir78729">
          ( <GitHubIcon sx={{
          position: 'relative',
          top:5
        }} /><code>/amir78729</code> )
        </a></motion.h2>
      </section>
      <div/>
      <section style={{
        height: '50vh'
      }}>
        <Stepper alternativeLabel activeStep={steps.length} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </section>
      
      <section>
        <MarkdownContainer markdown={intro} />
      </section>
      <section>
        <h1>Animations</h1>
        <div>
          <MarkdownContainer markdown={animationBasic} />
          <Countdown showDefault animationProps={{
            animate: { x: -100, y: 80, rotate: 30, scale: 0.7, position: 'absolute' },
            initial: { x: 0, y: 0, rotate: 0, scale: 1 }
          }} text="animated" buttonText='re-render!' />
        </div>
  
        <div>
          <MarkdownContainer markdown={variants} />
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
          <MarkdownContainer markdown={variantsMore} />
        </div>

        <div>
          <MarkdownContainer markdown={animationEnter} />
          <Countdown showDefault animationProps={{
            animate: { x: -100, y: 80, rotate: 30, scale: 0.7, position: 'absolute' },
            initial: { x: 50, y: 20, rotate: -60, scale: 1.1, position: 'absolute' },
            transition: {duration: 1}
          }} text="animated" buttonText='re-render!' />
        </div>

        <div>
          <MarkdownContainer markdown={animationExit} />
          <Countdown
            hideButton
            text="Animate with exit"
            variant="TIMER"
            animationProps={{
              exit: { x: 100, opacity: 0, position: "absolute" },
              initial: { y: -100, opacity: 0, position: "absolute" },
              animate: { y:0, x: 0, opacity: 1 }
            }}
          />
          <span className="info">
          <h3>AnimatePresence</h3>
          <b>Animate components when they're removed from the React tree.</b>
          <p>
            <code>AnimatePresence</code> allows components to animate out when they're removed from the React tree.
          </p>
          <p>It's required to enable exit animations because React lacks a lifecycle method that:</p>
          <ol>
            <li>Notifies components when they're going to be unmounted and </li>
            <li>Allows them to defer that unmounting until after an operation is complete (for instance an animation).</li>
          </ol>
          <br/>
        </span>
        </div>
        
        
        <MarkdownContainer markdown={animationControls} />
        <NowrouzLandingFormPresentation />
        
        
        
      </section>
      
      <section>
        <MarkdownContainer markdown={transitionIntro} />

        <MarkdownContainer markdown={transitionDelay} />
        <div style={{ transform: 'scale(1)' }}>
          <Countdown
            hideButton
            text="delay: 0"
            variant="TIMER"
            animationProps={{
              exit: { x: 100, opacity: 0, position: "absolute" },
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
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
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
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
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
              animate: { x: 0, opacity: 1 },
              transition: { delay: 0.4 }
            }}
          />
        </div>

        <MarkdownContainer markdown={transitionDuraiton} />
        <div style={{ transform: 'scale(1)' }}>
          <Countdown
            hideButton
            text="duration: 0.4s"
            variant="TIMER"
            animationProps={{
              exit: { x: 100, opacity: 0, position: "absolute" },
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
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
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
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
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
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
              initial: { x: -100, opacity: 0, position: "absolute", scale: 1 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 1 }
            }}
          />
        </div>

        <MarkdownContainer markdown={transitionEase} />
        <div style={{ transform: 'scale(1)' }}>
          <Countdown
            hideButton text="linear" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'linear'}
          }}
          />
          <Countdown
            hideButton text="easeIn" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'easeIn'}
          }}
          />
          <Countdown
            hideButton text="easeOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'easeOut'}
          }}
          />
          <Countdown
            hideButton text="easeInOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'easeInOut'}
          }}
          />
          <Countdown
            hideButton text="circIn" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'circIn'}
          }}
          />
          <Countdown
            hideButton text="circOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'circOut'}
          }}
          />
          <Countdown
            hideButton text="circInOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'circInOut'}
          }}
          />
          <Countdown
            hideButton text="backIn" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'backIn'}
          }}
          />
          <Countdown
            hideButton text="backOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'backOut'}
          }}
          />
          <Countdown
            hideButton text="backInOut" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'backInOut'}
          }}
          />
          <Countdown
            hideButton text="anticipate" variant="TIMER" animationProps={{
            exit: { x: 100, opacity: 0, position: "absolute" }, initial: { x: -100, opacity: 0, position: "absolute", scale: 1 }, animate: { x: 0, opacity: 1 },
            transition: { ease: 'anticipate'}
          }}
          />
        </div>

      </section>
      
      <section>
        <h1>Gestures</h1>
        <div>
          <MarkdownContainer markdown={gesturesIntro} />
          <Gesture variant="HOVER" />
        </div>
        
        <div>
          <MarkdownContainer markdown={gesturesTap} />
          <Gesture variant="TAP" />
        </div>
        
        <div>
          <MarkdownContainer markdown={viewport} />
          <Gesture variant="VIEWPORT" />
        </div>
  
        <div>
          <MarkdownContainer markdown={gesturesDrag} />
          
          {/*<Gesture variant="VIEWPORT ref" />*/}
          
          <Gesture variant="DRAG" />
          <Gesture variant="DRAG x" />
          <Gesture variant="DRAG y" />
  
          <MarkdownContainer markdown={gesturesConstraint} />
          <Gesture variant="DRAG constraint(px)" />
          <Gesture variant="DRAG constraint(ref)" />
  
          <MarkdownContainer markdown={gesturesSnapToOrigin} />
          <Gesture variant="DRAG dragSnapToOrigin" />
        </div>
        
      </section>
      
      <section>
        <MarkdownContainer markdown={tech} />
      </section>
      
      <section>
        <h1>Example: Affiliate Campaign Lottery</h1>
        
        <h2>Design</h2>
        <img src={design} alt="" style={{ width: '100%'}}/>
  
        <h2>Goal</h2>
        <img  style={{ width: '100%'}} src="https://i.pinimg.com/originals/5c/c7/03/5cc703145cc29a86f25c8175772f35fe.gif" alt=""/>
  
        <h2>Implementation</h2>
        
        <h3>No animation</h3>
        <MarkdownContainer markdown={example1} />
        <CountdownExample
          hideButton
          variant="TIMER"
          // duration={100}
          animationProps={{
            exit: { y: 0, opacity: 0, position: "absolute" },
            initial: { y: -0, opacity: 0, position: "absolute" },
            animate: { y:0, opacity: 1 },
            transition: { duration: 0}
          }}
        />
  
        <h3>Moving Digits from top to bottom</h3>
        <MarkdownContainer markdown={example2} />
        <CountdownExample
          hideButton
          variant="TIMER"
          // duration={100}
          animationProps={{
            exit: { y: 50, opacity: 1, position: "absolute" },
            initial: { y: -50, opacity: 1, position: "absolute" },
            animate: { y:0, opacity: 1 },
            // transition: { duration: 0.1}
          }}
        />
  
        <h3>Using <code>opacity</code></h3>
        <MarkdownContainer markdown={example3} />
        <CountdownExample
          hideButton
          variant="TIMER"
          // duration={100}
          animationProps={{
            exit: { y: 50, opacity: 0, position: "absolute" },
            initial: { y: -50, opacity: 0, position: "absolute" },
            animate: { y:0, opacity: 1 },
            // transition: { duration: 0.1}
          }}
        />
  
        <h3>Rotation</h3>
        <MarkdownContainer markdown={example4} />
        <CountdownExample
          hideButton
          variant="TIMER"
          // duration={100}
          animationProps={{
            exit:{ y: 50, opacity: 1, position: 'absolute', rotateX: 90 },
            initial:{ y: -50, opacity: 1, position: 'absolute', rotateX: 90 },
            animate:{ y: 0, opacity: 1, position: 'absolute', rotateX: 0 },
            transition:{
              ease: 'easeOut',
              duration: 0.2,
            }
          }}
        />
  
        <h3>Adding speed</h3>
        <CountdownExample
          hideButton
          variant="TIMER"
          duration={100}
          animationProps={{
            exit:{ y: 50, opacity: 1, rotateX: 90 },
            // exit:{ y: 50, opacity: 1, position: 'absolute', rotateX: 90 },
            initial:{ y: -50, opacity: 1, rotateX: 90 },
            // initial:{ y: -50, opacity: 1, position: 'absolute', rotateX: 90 },
            animate:{ y: 0, opacity: 1, rotateX: 0 },
            // animate:{ y: 0, opacity: 1, position: 'absolute', rotateX: 0 },
            transition:{
              ease: 'easeOut',
              duration: 0.2,
            }
          }}
        />
  
        <h3>Output:</h3>

      </section>
      
      <AffiliateCampaignLotteryPage />
      
      <section>
        <h1>3D!</h1>
        
        <p>Framer Motion 3D is a simple yet powerful animation library for React Three Fiber. It offers most of the same functionality as Framer Motion for declarative 3D scenes.</p>
      </section>
  
      <iframe src="https://codesandbox.io/embed/framer-motion-3d-star-button-forked-nn2hyt?fontsize=14&hidenavigation=1&theme=light&view=preview"
              style={{
                width: '100%',
                height:'500px',
                border:'0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
              title="Framer Motion 3D: Star button (forked)"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      
      <section>
        <MarkdownContainer markdown={references} />
      </section>
      
    </div>
  );
}

export default App;
