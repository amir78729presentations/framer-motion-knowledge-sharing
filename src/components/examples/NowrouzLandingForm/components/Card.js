// import useStyles from 'isomorphic-style-loader/useStyles';
import React, { useEffect, useState } from 'react';
// import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import './Card.css';
import { cardImages } from '../constants';
import {motion} from "framer-motion";

export default function Card({ delay, title, subtitle, description, image }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setShow(true);
      }, delay);
    }
  }, [show]);

  return (
    <>
      {show && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`NowrouzLandingCardContainer`}>
          <div className={'cardImageContainer'}>
            <picture>
              <source srcSet={cardImages[image]?.webp} type="image/webp" />
              <source srcSet={cardImages[image]?.png} type="image/png" />
              <img alt="banner" src={cardImages[image]?.png} className={'cardImage'} />
            </picture>
          </div>
          <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}}>{title || '-'}</motion.h1>
          <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}>{subtitle || '-'}</motion.h2>
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>{description ?? ''}</motion.p>
        </motion.div>
      )}
    </>
  );
}

Card.propTypes = {
  delay: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
