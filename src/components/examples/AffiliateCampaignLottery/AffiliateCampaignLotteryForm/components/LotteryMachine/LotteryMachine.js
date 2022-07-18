import React, { useEffect, useState } from 'react';
// import useStyles from 'isomorphic-style-loader/useStyles';
import PropTypes from "prop-types";
import machineImage from '../../../../../../assets/machine.png';
import './LotteryMachine.css';
import lights1 from '../../../../../../assets/lottery-light-bulbs-1.png';
import lights2 from '../../../../../../assets/lottery-light-bulbs-2.png';
import { CountDownDigit } from '../CountDownDigit/CountDownDigit';

export const LotteryMachine = ({ phoneNumber, isActive }) => {
  // useStyles(s);
  const getDigit = index => {
    if (!isActive) {
      return '?';
    }
    return index < 4 || index > 6 ? phoneNumber[index] : '*';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTurnOddLightsOn(turnOddLightsOn => !turnOddLightsOn);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [turnOddLightsOn, setTurnOddLightsOn] = useState(false);
  return (
    <>
      <div className="lotteryMachineContainer">
        <div className="lotteryMachine">
          {turnOddLightsOn ? (
            <img className={`lights`} src={lights1} alt="lights1" />
          ) : (
            // <div className={`${s.lights} ${s.lights1}`} />
            <img className={`lights`} src={lights2} alt="lights2" />
            // <div className={`${s.lights} ${s.lights2}`} />
          )}
          <img src={machineImage} alt="machine" />
          <div className="digitsSection">
            <div className="digitsPartition">
              {[0, 1, 2, 3].map(index => (
                <CountDownDigit key={index} value={getDigit(index)} delay={index + 1} isActive={isActive} />
              ))}
            </div>
            <div className="digitsPartition">
              {[4, 5, 6].map(index => (
                <CountDownDigit key={index} value={getDigit(index)} delay={index + 1} isActive={isActive} />
              ))}
            </div>
            <div className="digitsPartition">
              {[7, 8, 9, 10].map(index => (
                <CountDownDigit key={index} value={getDigit(index)} delay={index + 1} isActive={isActive} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};