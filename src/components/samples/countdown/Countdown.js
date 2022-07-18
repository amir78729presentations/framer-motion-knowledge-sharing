import React, {useEffect, useState} from "react";
import s from './Countdown.module.css'
import {AnimatePresence, motion} from "framer-motion";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";


const Countdown = ({ animationProps, variant="TEXT", text, showDefault, hideButton, buttonText }) => {
  const [num, setNum] = useState(0);
  const [start, setStart] = useState(true);
  const [open, setOpen] = React.useState(false);

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
      setTimeout(() => {
        setNum(((num + 1) % 10) + 1)
      }, 1000);
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
                  sx={{
                    position: 'relative',
                    left: 10
                  }}
                  color="warning"
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
                >{ buttonText || 'animate!'}</Button>
              </div>
          )}
          <AnimatePresence>
              {showDefault && (
                  <motion.p className={s.countdown} animate={{ opacity: 0.5, x: 0, y: 0, position: 'absolute' }}>
                      default
                  </motion.p>
              )}
            <motion.p
              className={s.countdown}
              key={num}
              style={{
                zIndex: 10000
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
export default Countdown;
