import { useTimer } from "../hooks/useTimer";
import { Button, H1,Body } from "./timerstyle";

const Timer = () => {
  const { hour, minute, second, msecond, onReset, onStart, onStop } = useTimer();

  return (
    <Body>
      <H1>Google Timer</H1>
      <h1>
        {hour}:{minute}:{second}:{msecond}
      </h1>
      <Button onClick={onStart}>Start</Button>
      <Button onClick={onStop}>Stop</Button>
      <Button onClick={onReset}>Reset</Button>
    </Body>
  );
};
export default Timer;
