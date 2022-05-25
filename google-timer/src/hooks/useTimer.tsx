import { useEffect, useState } from "react";

const useTimer = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [msecond, setMsecond] = useState(0);
  const [stop, setStop] = useState(true);

  const onStart = () => {
    setStop(false);
  };
  const onStop = () => {
    setStop(true);
  };
  const onReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMsecond(0);
  };
  useEffect(() => {
    let interval: any = null;
    if (!stop) {
      interval = setInterval(() => {
        if (minute > 59) {
          setHour(hour + 1);
          setMinute(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMinute(minute + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (msecond > 99) {
          setSecond(second + 1);
          setMsecond(0);
          clearInterval(interval);
        }
        if (msecond <= 99) {
          setMsecond(msecond + 1);
        }
      }, 10);
    } else {
      setInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return { hour, minute, second, msecond, onReset, onStart, onStop };
};

export { useTimer };
