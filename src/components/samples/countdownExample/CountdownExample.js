import React, {useEffect, useState} from "react";
import s from './countdownExample.module.css'
import {AnimatePresence, motion} from "framer-motion";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import {useForceUpdate} from "../../../utils/utils";


const CountdownExample = ({ animationProps, variant="TEXT", text, showDefault, hideButton, duration }) => {
  const [num, setNum] = useState(0);
  const [start, setStart] = useState(true);
  const [open, setOpen] = React.useState(false);
  const forceUpdate = useForceUpdate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (variant === 'TIMER' && start) {
      // setTimeout(() => {
      //   setNum(number => `${(Number(number) + 1) % 10}`);
      // }, 200);
      setTimeout(() => {
        setNum(`${(Number(num) + 1) % 10}`);
        // setNum(number => `${(Number(number) + 1) % 10}`);
        forceUpdate();
      }, duration || 1000);
    }
  }, [num]);

  return (
      <>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
        />
        <div className={s.container}>
          {!hideButton && (
              <div style={{
                left: 0,
                position: "absolute"
              }}>
                <Button
                    variant="contained"
                    className={s.btn}
                    onClick={() => {
                      if (variant === 'TEXT') {
                        setNum(num + 1)
                      }
                      if (variant === 'TIMER') {
                        setStart(true)
                      }
                    }}
                >animate!</Button>
              </div>
          )}
          <AnimatePresence>
              {/*{showDefault && (*/}
              {/*    <motion.p className={s.countdown} animate={{ opacity: 0.5, x: 0, y: 0, position: 'absolute' }}>*/}
              {/*        default*/}
              {/*    </motion.p>*/}
              {/*)}*/}
            <motion.p
              className={s.countdown}
              key={num}
              style={{
                zIndex: 100
              }}
              {...animationProps}
            >
              {variant === 'TIMER' && !text ? num : text}
              {/*{variant === 'TEXT' && text}*/}
            </motion.p>
            

          </AnimatePresence>
        </div>
      </>
  )
}
export default CountdownExample;
