import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './NowrouzLandingFormPresentation.css';
import {AnimatePresence, motion} from 'framer-motion'

import Card from './components/Card';
import Button from "@mui/material/Button";

const information = [
  {
    "title": "۲۹۷ سفر",
    "subTitle": "تا رسیدن به مقصد در کنارتان بودیم.",
    "description": "",
    "image": "lastYearRides"
  },
  {
    "title": "۸۷۴۱ دقیقه",
    "subTitle": "زمانی است که با هم در راه بودیم. ",
    "description": "",
    "image": "lastYearRidesMinutes"
  },
  {
    "title": "۲۰۶ کیلومتر",
    "subTitle": "مسافتی است که با هم طی کردیم.",
    "description": "",
    "image": "lastYearRidesKms"
  },
  {
    "title": "۹.۳ از ۱۰",
    "subTitle": "میانگین امتیازهایی است که از سفیران گرفتید.",
    "description": "از خوش‌سفریتان ممنونیم.",
    "image": "lastYearRidesNps"
  },
  {
    "title": "۱۲۵۶ روز",
    "subTitle": "از اولین سفرتان با تپسی می‌گذرد.",
    "description": "راه درازی در پیش داریم.",
    "image": "daysFromFirstRide"
  },
  {
    "title": "۲۰ کیلومتر",
    "subTitle": "طولانی‌ترین مسافتی است که در یک سفر طی کردید.",
    "description": "",
    "image": "longestRideKms"
  },
  {
    "title": "مشهد",
    "subTitle": "شهری با بیشترین سفر شبانه",
    "description": "مردم مشهد با بیشترین تعداد سفر در ساعات ۲۰ تا ۰۰ بامداد، شب‌زنده‌داران سال بودند.",
    "image": "nightCity"
  },
  {
    "title": "تهران",
    "subTitle": "شهری با بیشترین سفر صبحگاهی",
    "description": "مردم تهران، با بیشترین تعداد سفر در ساعات ۵ تا ۹ صبح، سحرخیزان سال بودند.",
    "image": "dayCity"
  },
  {
    "title": "۷۳۲۵",
    "subTitle": "تعداد سفرهای پرسفرترین سفیر سال",
    "description": "سفیر دست‌به‌فرمان",
    "image": "mostRideDriver"
  },
  {
    "title": "۱۴۷۸",
    "subTitle": "تعداد سفرهای پرسفرترین مسافر سال",
    "description": "شهر زیر پای او",
    "image": "mostRidePassenger"
  },
  {
    "title": "۲۵ بهمن",
    "subTitle": "پرسفرترین روز سال ۱۴۰۰",
    "description": "یک روز زمستانی پر هیاهو",
    "image": "mostRideDay"
  },
  {
    "title": "۲۸ مرداد",
    "subTitle": "کم‌سفرترین روز سال  ۱۴۰۰",
    "description": "",
    "image": "leastRideDay"
  }
]

export default function NowrouzLandingFormPresentation({ title, description, finalNote, isLoading, isError }) {
  const [show, setShow] = useState(true);
  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      <span className={'NowrouzLandingContainer'}>
      <Button
        variant="contained"
        color="warning"
        onClick={() => {
        // setShow(!show);
        setShow(false)
        setTimeout(() => setShow(true), 0)
      }}>re-render and see changes!</Button>
        {show && (
          <div className={`cardsSection`} style={{ minHeight: `${information?.length * 188}px` }}>
            {information?.map((info, i) => (
              <motion.div
                custom={i}
                animate="visible"
                variants={variants}
              >
                <Card
                  delay={(i) * 300}
                  title={info?.title}
                  subtitle={info?.subTitle}
                  description={info?.description}
                  image={info?.image}
                />
              </motion.div>
            ))}
          </div>
        )}
    </span>
    </AnimatePresence>
  );
}

NowrouzLandingFormPresentation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  finalNote: PropTypes.string.isRequired,
  information: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};
