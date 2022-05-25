import { useTimer } from "../hooks/useTimer";
import { Button, H1,Body } from "./timerstyle";

const Timer = () => {
  const { hour, minute, second, msecond, onResetTimer, onStartTimer, onStopTimer } = useTimer();

  return (
    <Body>
      <H1>Google Timer</H1>
      <h1>
        {hour}:{minute}:{second}:{msecond}
      </h1>
      <Button onClick={onStartTimer}>Start</Button>
      <Button onClick={onStopTimer}>Stop</Button>
      <Button onClick={onResetTimer}>Reset</Button>
    </Body>
  );
};
export default Timer;
