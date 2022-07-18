import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
// import useStyles from 'isomorphic-style-loader/useStyles';
import { useForceUpdate } from '../../../../../../utils/utils';
import './CountDownDigit.css';

export const CountDownDigit = ({ value, delay, isActive }) => {
  // useStyles(s);
  const forceUpdate = useForceUpdate();

  const [complete, setComplete] = useState(false);
  const [num, setNum] = useState(`0`);

  useEffect(() => {
    let interval;
    if (!complete && isActive) {
      interval = setInterval(() => {
        setNum(number => `${(Number(number) + 1) % 10}`);
        forceUpdate();
      }, 100);
    } else {
      setNum(`${value}`);
      forceUpdate();
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [complete, value, isActive]);

  useEffect(() => {
    if (value !== '?' && isActive) {
      setNum(`${Math.floor(Math.random() * 10)}`);
      forceUpdate();
      setTimeout(() => {
        setComplete(true);
        forceUpdate();
      }, delay * 1000);
    }
  }, [value, delay, isActive]);

  return (
    <div className="digitContainer">
      <AnimatePresence>
        <motion.h1
          style={{
            color: '#000', width: '100%'
          }}
          key={num}
          exit={{ y: 20, opacity: 0, position: 'absolute', rotateX: 90 }}
          initial={{ y: -20, opacity: 0, position: 'absolute', rotateX: 90 }}
          animate={{ y: 0, opacity: 1, position: 'absolute', rotateX: 0 }}
          transition={{
            ease: 'easeOut',
            duration: 0.2,
          }}
        >
          {num}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
