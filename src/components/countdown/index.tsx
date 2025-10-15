import { cn } from "@/lib/utils";
import React from "react";

export interface ICountDownProps {
  duration: number; // in minutes
  startTime: number; // in milliseconds
  onTimeUp: () => void;
  className?: string;
}

const CountDown: React.FC<ICountDownProps> = (props) => {
  const { duration, startTime, onTimeUp, className } = props;
  const totalDuration = duration * 60_000;

  const [timeLeft, setTimeLeft] = React.useState(
    Math.max(totalDuration - (Date.now() - startTime), 0)
  );

  React.useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1000;
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp, timeLeft]);

  // format jadi hh:mm:ss
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  };

  return (
    <div>
      <div
        className={cn(
          "border border-border rounded-md px-5 py-2 flex w-fit",
          className
        )}
      >
        <div className="">{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default CountDown;
