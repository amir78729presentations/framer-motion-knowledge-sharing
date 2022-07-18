import React, {useEffect, useState} from "react";
import s from './Control.module.css'
import {AnimatePresence, motion} from "framer-motion";
import {TextField} from "@mui/material";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

const Control = ({ animationProps, variant, text }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(1);



    return (
        <>
            <div className={s.container}>
                <AnimatePresence>
                    <motion.div
                        key={`${x}-${y}-${scale}-${rotate}`}
                        className={s.countdown}
                        animate={{ x, y, scale, rotate, position: 'absolute' }}
                    />
                </AnimatePresence>

            </div>
            <TextField variant="outlined"  type="number" label="x" value={x} onChange={(event) => setX(event.target.value)}/>
            <TextField variant="outlined"  type="number" label="y" value={y} onChange={(event) => setY(event.target.value)}/>
            <TextField variant="outlined"  type="number" label="scale" value={scale} onChange={(event) => setScale(event.target.value)}/>
            <TextField variant="outlined"  type="number" label="rotate" value={rotate} onChange={(event) => setRotate(event.target.value)}/>

            <SyntaxHighlighter
                children={`<motion.div
    animate={{
         x: ${x}, 
         y: ${y}, 
         scale: ${scale}, 
         rotate: ${rotate} 
    }}
/>`}
                style={a11yDark}
                language='javascript'
                PreTag="div"
                wrapLines
            />
        </>

    )
}
export default Control;
