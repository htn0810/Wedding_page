import { useEffect, useState } from "react";

type Time = {
  countdownDays: number;
  countdownHours: number;
  countdownMinutes: number;
  countdownSeconds: number;
};

const Countdown = () => {
  const [expiryTime, setExpiryTime] = useState<string | boolean>(
    "25 sep 2024 11:30:00"
  );
  const [countdownTime, setCountdownTime] = useState<Time>({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime as string).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <>
      <h5 className="absolute top-0 -translate-y-[90%] bg-gray-200 px-10 font-primary mt-2 text-center text-xl lg:text-2xl 2xl:text-4xl">
        Time
      </h5>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        {countdownTime.countdownDays < 10 && "0"}
        {countdownTime.countdownDays}
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        :
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        {countdownTime.countdownHours < 10 && "0"}
        {countdownTime.countdownHours}
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        :
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        {countdownTime.countdownMinutes < 10 && "0"}
        {countdownTime.countdownMinutes}
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        :
      </span>
      <span className="font-secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
        {countdownTime.countdownSeconds < 10 && "0"}
        {countdownTime.countdownSeconds}
      </span>
    </>
  );
};

export default Countdown;
