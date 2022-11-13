import React, { useState } from 'react';
// import { getRandomInt } from 'LotteryWheel/LotteryWheel';
import { motion, useAnimationControls } from 'framer-motion';

export const NotFoundPresentation = () => {
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  
  const [duration, setDuration] = useState(1)
  const [stop, setStop] = useState(false);
  
  const control = useAnimationControls();
  const mockData = {
    0: '۱۰۰۰۰۰۰ تومان',
    1: '۵۰۰۰۰۰ تومان',
    2: '۱۵۰۰۰۰۰۰ تومان',
    3: '۱۱۰۰۰۰۰۰ تومان',
    4: '۷۰۰۰۰۰۰ تومان',
    5: '۳۰۰۰۰۰۰ تومان',
  };

  // const onClick = () => {
  //   if (!spinning) {
  //     setSpinning(true);
  //     // const newCouponNum = getRandomInt(0, 5);
  //     // setCouponNum(newCouponNum);
  //     setMustSpin(true);
  //   }
  // };

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <motion.div
          variants={{
            normal: { scale: 1, transition: { duration: 0.5 } },
            zoomIn: { scale: 1.1, transition: { duration: 0.5 } },
          }}
          initial="normal"
          animate={control}
        >
          <motion.h1
            key={duration}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: stop ? 0 : 'infinity', ease: 'linear', duration }}
          >test</motion.h1>
        </motion.div>
        {open && (
          <motion.div
            initial={{ scale: 0, x: '-50%', y: '-50%', position: 'absolute' }}
            animate={{ scale: 1, x: '-50%', y: '-50%', position: 'absolute' }}
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              height: '80%',
              backgroundColor: '#F6C800',
              color: 'black',
              border: 'solid 10px white',
              borderRadius: '50%',
              boxShadow: '0 0 6px 14px #0003 inset',
            }}
          >
            <p>{mockData[couponNum]}</p>
          </motion.div>
          // </div>
        )}
      </div>

      <button
        style={{
          position: 'relative',
        }}
        onClick={() => {
          // control.start({
          //   scale: 1.1,
          //   transition: { duration: 0.5 },
          // });
          // setTimeout(() => onClick(), 1000);
          setTimeout(() => setDuration(0.5), 1000);
          setTimeout(() => setDuration(0.2), 2200);
          setTimeout(() => {
            setDuration(0);
            setStop(true);
          }, 3000);
          
        }}
      >
        spin
      </button>
    </div>
  );
};

export default NotFoundPresentation;
