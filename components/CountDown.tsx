
import React from 'react';

interface CountDownProps {
  targetDate: Date;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const clean = (num: number) => {
    if (num < 0) return '00';
    if (num < 10) return `0${num}`;
    return num;
  };


  const diff = targetDate.getTime() - Date.now();
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const $time = 'text-4xl font-bold';
  const $label = 'text-sm font-bold text-gray-400';

  return (
    <div className="flex justify-between space-x-5">
      <div className="flex flex-col items-center">
        <h1 className={$time}>{clean(days)}</h1> 
        <h3 className={$label}>Days</h3>
      </div>

      <div className="flex flex-col items-center">
        <h1 className={$time}>{clean(hours)}</h1>
        <h3 className={$label}>Hours</h3>
      </div>

      <div className="flex flex-col items-center">
        <h1 className={$time}>{clean(minutes)}</h1>
        <h3 className={$label}>Minutes</h3>
      </div>

      <div className="flex flex-col items-center">
        <h1 className={$time}>{clean(seconds)}</h1>
        <h3 className={$label}>Seconds</h3>
      </div>
    </div>
  );
};

export default CountDown;
