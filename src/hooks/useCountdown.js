// useCountdown.js
import { useState, useEffect } from 'react';

const useCountdown = (targetDateStr, serverDateStr) => {
  const [countdown, setCountdown] = useState(null);
  const [hasCountdownFinished, setHasCountdownFinished] = useState(false);

  useEffect(() => {
    if (!targetDateStr || !serverDateStr) return;

    // check if countdown is already finished on page landing
    if (serverDateStr > targetDateStr) {
      setHasCountdownFinished(true);
    }
    const targetDate = new Date(targetDateStr);
    const serverDate = new Date(serverDateStr);
    let timeDifference = targetDate - serverDate;

    const updateCountdown = () => {
      const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

      setCountdown(`${hours}:${minutes}:${seconds}`);

      if (hours === '00' && minutes === '00' && seconds === '00') {
        setHasCountdownFinished(true);
      }

      timeDifference -= 1000;
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, [targetDateStr, serverDateStr]);

  return { countdown, hasCountdownFinished };
};

export default useCountdown;
