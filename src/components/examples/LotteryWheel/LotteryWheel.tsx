// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import s from './LotteryWheel.module.scss';

interface Roulette {
  startSpinningTime: number;
  continueSpinningTime: number;
  stopSpinningTime: number;
  startRotationDegrees: number;
  finalRotationDegrees: number;
}

export const RotationContainer = styled.div<Roulette>`
  transform: rotate(${(props) => props.startRotationDegrees}deg);
  &.started-spinning {
    animation: spin ${({ startSpinningTime }) => startSpinningTime / 1000}s cubic-bezier(0.71, -0.29, 0.96, 0.9) 0s 1 normal
        forwards running,
      continueSpin 0.75s linear ${({ startSpinningTime }) => startSpinningTime / 1000}s 1 normal forwards running,
      stopSpin ${({ stopSpinningTime }) => stopSpinningTime / 1000}s cubic-bezier(0, 0, 0.35, 1.02)
        ${({ startSpinningTime, continueSpinningTime }) => (startSpinningTime + continueSpinningTime) / 1000}s 1 normal forwards
        running;
  }
  @keyframes spin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(props) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props) => 1440 + props.finalRotationDegrees}deg);
    }
  }
`;

const START_SPINNING_TIME = 800;
const CONTINUE_SPINNING_TIME = 400;
const STOP_SPINNING_TIME = 4000;

export const getRotationDegrees = (prizeNumber, numberOfPrizes) => {
  const degreesPerPrize = 360 / numberOfPrizes;
  const prizeRotation = degreesPerPrize * (numberOfPrizes - prizeNumber);
  return numberOfPrizes - prizeNumber > numberOfPrizes / 2 ? -360 + prizeRotation : prizeRotation;
};

export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));

const LotteryWheel = ({
  mustStartSpinning,
  prizeNumber,
  onStopSpinning = () => null,
  wheelCircleImageUrl,
  wheelPointerImageUrl,
  numberOfPrizes,
}) => {
  const [startRotationDegrees, setStartRotationDegrees] = useState(0);
  const [finalRotationDegrees, setFinalRotationDegrees] = useState(0);
  const [hasStartedSpinning, setHasStartedSpinning] = useState(false);
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false);
  const [isCurrentlySpinning, setIsCurrentlySpinning] = useState(false);
  const mustStopSpinning = useRef(false);

  const startSpinning = () => {
    setHasStartedSpinning(true);
    setHasStoppedSpinning(false);
    mustStopSpinning.current = true;
    setTimeout(() => {
      if (mustStopSpinning.current) {
        mustStopSpinning.current = false;
        setHasStartedSpinning(false);
        setHasStoppedSpinning(true);
        onStopSpinning();
      }
    }, START_SPINNING_TIME + CONTINUE_SPINNING_TIME + STOP_SPINNING_TIME - 300);
  };

  useEffect(() => {
    if (mustStartSpinning && !isCurrentlySpinning) {
      setIsCurrentlySpinning(true);
      startSpinning();
      const finalRotationDegreesCalculated = getRotationDegrees(prizeNumber, numberOfPrizes);
      setFinalRotationDegrees(finalRotationDegreesCalculated);
    }
  }, [isCurrentlySpinning, mustStartSpinning, numberOfPrizes, prizeNumber, startSpinning]);

  useEffect(() => {
    if (hasStoppedSpinning) {
      setIsCurrentlySpinning(false);
      setStartRotationDegrees(finalRotationDegrees);
    }
  }, [finalRotationDegrees, hasStoppedSpinning]);

  return (
    <div className={s.lotteryWheelContainer}>
      <img src={wheelPointerImageUrl} alt="pointer" className={s.wheelPointer} />
      <RotationContainer
        className={classnames({
          'started-spinning': hasStartedSpinning,
          [s.rotationContainer]: true,
        })}
        startSpinningTime={START_SPINNING_TIME}
        continueSpinningTime={CONTINUE_SPINNING_TIME}
        stopSpinningTime={STOP_SPINNING_TIME}
        startRotationDegrees={startRotationDegrees}
        finalRotationDegrees={finalRotationDegrees}
      >
        <img src={wheelCircleImageUrl} alt="wheel" className={s.wheelCircle} />
      </RotationContainer>
    </div>
  );
};

export default LotteryWheel;
