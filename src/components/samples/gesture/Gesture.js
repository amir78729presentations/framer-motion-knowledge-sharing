import React, {useEffect, useRef, useState} from "react";
import s from './Gesture.module.css'
import {AnimatePresence, motion} from "framer-motion";
import {TextField} from "@mui/material";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";

const Gesture = ({ variant }) => {
    const [open, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(false);
    const ref = useRef(null)
    const sectionRef = useRef(null)
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const gestureProps = () => {
        if (variant === 'HOVER') {
            return {
                whileHover:{
                    scale: 1.1,
                    backgroundColor: '#000',
                    rotate: 30,
                    cursor: 'pointer'
                },
                onHoverStart:() => {
                    setOpen(true)
                    setAlertMessage('Hover starts')
                },
                onHoverEnd:() => {
                    setOpen(true)
                    setAlertMessage('Hover ends')
                },
            }
        }
        if (variant === 'TAP') {
            return {
                whileHover:{
                    cursor: 'pointer'
                },
                whileTap:{
                    scale: 1.1,
                    backgroundColor: '#000',
                    rotate: 30,
                    cursor: 'pointer'
                },
                onTapStart:() => {
                    setOpen(true)
                    setAlertMessage('Tap started')
                },
                onTap:() => {
                    setOpen(true)
                    setAlertMessage('Tap ended successfully')
                },
                onTapCancel:() => {
                    setOpen(true)
                    setAlertMessage('Tap canceled')
                },
            }
        }
        if (variant === 'VIEWPORT') {
            return {
                initial:{
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                }
            }
        }
        if (variant === 'VIEWPORT once') {
            return {
                initial:{
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                },
                viewport: {
                    once: true
                }
            }
        }
        if (variant === 'VIEWPORT ref') {
            return {
                initial:{
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    delay: 0.2
                },
                viewport: {
                    root: ref
                }
            }
        }
        if (variant === 'DRAG') {
            return {
                drag: true,
            }
        }
        if (variant === 'DRAG x') {
            return {
                drag: 'x',
            }
        }
        if (variant === 'DRAG y') {
            return {
                drag: 'y',
            }
        }
        if (variant === 'DRAG constraint(px)') {
            return {
                drag: true,
                dragConstraints: { left: 0, right: 150, top: 20, bottom: 30 }
            }
        }
        if (variant === 'DRAG constraint(ref)') {
            return {
                drag: true,
                dragConstraints: ref
            }
        }
        if (variant === 'DRAG dragSnapToOrigin') {
            return {
                drag: true,
                dragSnapToOrigin: true,
            }
        }
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={alertMessage}
            />
            <div className={s.container} ref={sectionRef}>
                {variant.toUpperCase().includes('DRAG') ? (
                  <AnimatePresence>
                      <motion.div ref={ref} className={s.dragContainer}>
                          <motion.p
                            className={s.drag}
                            {...gestureProps()}
                          >
                              {variant}
                          </motion.p>
                      </motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence>
                      <motion.p
                        className={s.countdown}
                        {...gestureProps()}
                      >
                          {variant}
                      </motion.p>
                  </AnimatePresence>
                )}
            </div>
          {variant === 'VIEWPORT ref' && <div ref={ref}>ref</div>}
        </>
    )
};
export default Gesture;
