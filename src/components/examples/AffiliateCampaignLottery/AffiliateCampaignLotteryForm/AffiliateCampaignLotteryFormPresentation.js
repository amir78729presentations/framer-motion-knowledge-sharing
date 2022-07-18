import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './AffiliateCampaignLotteryFormPresentation.css';

import mobileBg from '../../../../assets/lottery-bg-mobile.jpg';
import mobileBgWebp from '../../../../assets/lottery-bg-mobile.webp';
import { LotteryMachine } from './components/LotteryMachine/LotteryMachine';

export default function AffiliateCampaignLotteryFormPresentation({
  // isLoading,
  // isError,
  lotteryName,
  prize,
  winnerFullName,
  winnerPhoneNumber,
  // enteringPassword,
  // retry,
}) {
  // useStyles(s);
  const [isLotteryMachineActive, setLotteryMachineIsActive] = useState(false);
  const [number, setNumber] = useState('???????????');
  const [showConfetti, setShowConfetti] = useState(false);

  const getWinnerSectionText = () => {
    // if (enteringPassword) {
    //   return (
    //     <>
    //       <p className="title">‌ ‌</p>
    //       <p className={`$"name"`}>لطفا رمز عبور را وارد کنید</p>
    //     </>
    //   );
    // }
    // if (isLoading) {
    //   return (
    //     <>
    //       <p className="title">‌ ‌</p>
    //       <p className={`$"name" ${s.loading}`}>در حال دریافت اطلاعات</p>
    //     </>
    //   );
    // }
    // if (isError) {
    //   return (
    //     <>
    //       <p className="title">‌ ‌</p>
    //       <p className={`$"name" ${s.error}`}>خطا در دریافت اطلاعات</p>
    //     </>
    //   );
    // }
    if (number === '???????????') {
      return (
        <>
          <p className="title">‌ ‌</p>
          <p className="name">برای مشاهده برنده کلیک کنید!</p>
        </>
      );
    }
    if (!showConfetti) {
      return (
        <>
          <p className="title">برنده سکه طلا:</p>
          <p className={`name loading`}>اندکی صبر کنید...!</p>
        </>
      );
    }
    return (
      <>
        <p className="title">برنده سکه طلا:</p>
        <p className="name">{winnerFullName || '-'}</p>
      </>
    );
  };

  return (
    <div className="affiliateCampaignLotteryContainer">
      {/*<picture>*/}
      {/*  <source srcSet={mobileBgWebp} type="image/webp" media="(max-width: 700px)" />*/}
      {/*  <source srcSet={mobileBg} type="image/jpg" media="(max-width: 700px)" />*/}
      {/*  <img alt="banner" src={mobileBg} className="bannerBg" />*/}
      {/*</picture>*/}
      <div className="topSection">
        <h2 style={{
          fontSize: '40px',
          fontWeight: 'normal',
          color: 'white',
          margin: 0,
          position: "unset"
        }}>{lotteryName}</h2>
        <h1 style={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'white',
          position: "unset",
          marginBottom: 20,
        }}>{prize}</h1>
      </div>
      <LotteryMachine phoneNumber={number} isActive={isLotteryMachineActive} />
      <div className="winnerSection">{getWinnerSectionText()}</div>
      <div className="buttonContainer">
        <div
          onClick={() => {
            if (!showConfetti && number !== winnerPhoneNumber) {
              if (!isLotteryMachineActive) {
                setShowConfetti(false);
                setNumber(winnerPhoneNumber || '????***????');
                setLotteryMachineIsActive(true);
                setTimeout(() => {
                  setShowConfetti(true);
                }, 11000);
              }
            }
          }}
          className="button"
        />
      </div>
      {showConfetti && <Confetti style={{ zIndex: 30 }} />}
    </div>
  );
}