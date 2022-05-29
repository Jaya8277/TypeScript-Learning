import { useRef, useState } from "react";
import { Input } from "./Pinstyle";

type PinOtpType = {
  totalInputs: number;
  onChange: (otp: string) => void;
};

export const PinOtp = ({ totalInputs, onChange }: PinOtpType) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string>("");
  return (
    <div>
      {new Array(totalInputs).fill(1).map((_, index) => (
        <Input
          onChange={(e) => {
            setOtp(otp + e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.code === "Backspace") {
              inputRef.current[index - 1].focus();
              inputRef.current[index - 1].select();
            } else {
              inputRef.current[index + 1].focus();
            }
            onChange(otp);
          }}
          ref={(element) => {
           
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          pattern={"[0-9]"}
          className="otpInput"
          type={"text"}
          maxLength={1}
          key={index}
        />
      ))}
    </div>
  );
};
